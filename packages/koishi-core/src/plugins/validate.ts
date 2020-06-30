import { onApp, Meta, UserData, Command } from '..'
import { messages } from '../shared'
import { format } from 'util'
import { getDateNumber } from 'koishi-utils'

declare module '../context' {
  interface EventMap {
    'usage-exhausted' (meta: Meta): void
  }
}

declare module '../command' {
  interface CommandConfig {
    /** disallow unknown options */
    checkUnknown?: boolean
    /** check required options */
    checkRequired?: boolean
    /** check argument count */
    checkArgCount?: boolean
    /** show command warnings */
    showWarning?: boolean
    /** usage identifier */
    usageName?: string
    /** max usage per day */
    maxUsage?: UserType<number>
    /** min interval */
    minInterval?: UserType<number>
  }

  interface OptionConfig {
    validate? (value: any): void | string | boolean
  }
}

export function getUsageName (command: Command) {
  return command.config.usageName || command.name
}

Object.assign(Command.defaultConfig, {
  showWarning: true,
  maxUsage: Infinity,
  minInterval: 0,
})

Command.userFields(({ command, options = {} }, fields) => {
  const { maxUsage, minInterval, authority } = command.config
  let shouldFetchAuthority = !fields.has('authority') && authority > 0
  let shouldFetchUsage = !!(maxUsage || minInterval)
  for (const option of command._options) {
    if (option.camels[0] in options) {
      if (option.authority > 0) shouldFetchAuthority = true
      if (option.notUsage) shouldFetchUsage = false
    }
  }
  if (shouldFetchAuthority) fields.add('authority')
  if (shouldFetchUsage) {
    if (maxUsage) fields.add('usage')
    if (minInterval) fields.add('timers')
  }
})

onApp((app) => {
  app.on('before-command', ({ meta, args, unknown, options, command }) => {
    async function sendHint (meta: Meta<'message'>, message: string, ...param: any[]) {
      if (command.config.showWarning) {
        await meta.$send(format(message, ...param))
        return true
      }
    }

    if (command.getConfig('disable', meta)) return true

    // check argument count
    if (command.config.checkArgCount) {
      const nextArg = command._arguments[args.length]
      if (nextArg?.required) {
        return sendHint(meta, messages.INSUFFICIENT_ARGUMENTS)
      }
      const finalArg = command._arguments[command._arguments.length - 1]
      if (args.length > command._arguments.length && !finalArg.noSegment && !finalArg.variadic) {
        return sendHint(meta, messages.REDUNANT_ARGUMENTS)
      }
    }

    // check unknown options
    if (command.config.checkUnknown && unknown.length) {
      return sendHint(meta, messages.UNKNOWN_OPTIONS, unknown.join(', '))
    }

    // check required options
    if (command.config.checkRequired) {
      const absent = command._options.find((option) => {
        return option.required && !(option.longest in options)
      })
      if (absent) {
        return sendHint(meta, messages.REQUIRED_OPTIONS, absent.rawName)
      }
    }

    for (const option of command._options) {
      if (!option.validate || !(option.longest in options)) continue
      const result = option.validate(options[option.longest])
      if (result) {
        return sendHint(meta, messages.INVALID_OPTION, option.rawName, result === true ? messages.CHECK_SYNTAX : result)
      }
    }

    if (!meta.$user) return
    let isUsage = true

    // check authority
    if (command.config.authority > meta.$user.authority) {
      return sendHint(meta, messages.LOW_AUTHORITY)
    }
    for (const option of command._options) {
      if (option.camels[0] in options) {
        if (option.authority > meta.$user.authority) {
          return sendHint(meta, messages.LOW_AUTHORITY)
        }
        if (option.notUsage) isUsage = false
      }
    }

    // check usage
    if (isUsage) {
      const name = getUsageName(command)
      const minInterval = command.getConfig('minInterval', meta)
      const maxUsage = command.getConfig('maxUsage', meta)

      if (maxUsage < Infinity && checkUsage(name, meta.$user, maxUsage)) {
        app.emit(meta, 'usage-exhausted', meta)
        return sendHint(meta, messages.USAGE_EXHAUSTED)
      }

      if (minInterval > 0 && checkTimer(name, meta.$user, minInterval)) {
        return sendHint(meta, messages.TOO_FREQUENT)
      }
    }
  })
})

export function getUsage (name: string, user: Pick<UserData, 'usage'>) {
  const $date = getDateNumber()
  if (user.usage.$date !== $date) {
    user.usage = { $date }
  }
  return user.usage[name] || 0
}

export function checkUsage (name: string, user: Pick<UserData, 'usage'>, maxUsage?: number) {
  const count = getUsage(name, user)
  if (count >= maxUsage) return true
  if (maxUsage) {
    user.usage[name] = count + 1
  }
}

const UPDATE_INTERVAL = 86400000

export function checkTimer (name: string, { timers }: Pick<UserData, 'timers'>, timestamp?: number) {
  const now = Date.now()
  if (!(now <= timers.$date)) {
    for (const key in timers) {
      if (now > timers[key]) delete timers[key]
    }
    timers.$date = now + UPDATE_INTERVAL
  }
  if (now <= timers[name]) return true
  if (timestamp) {
    timers[name] = timestamp
  }
}
