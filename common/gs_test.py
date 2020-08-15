from __future__ import print_function

import os.path
import pickle

from google.auth.transport.requests import Request
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
SAMPLE_SPREADSHEET_ID = '1Pu6JC4yMSXkBYQSzZ2BRT1h1eHiaFzVZqPQ64GVuaUM'
sheet = None


# 获取 google sheet 对象
def get_sheet():
    global sheet

    creds = None
    module_path = os.path.dirname(__file__)
    # The file token111.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists(module_path + '/token111.pickle'):
        with open(module_path + '/token111.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                module_path + '/credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open(module_path + '/token111.pickle', 'wb') as token:
            pickle.dump(creds, token)

    service = build('sheets', 'v4', credentials=creds)

    # Call the Sheets API
    sheet = service.spreadsheets()


def read_test():
    get_sheet()
    result = sheet.values().get(spreadsheetId=SAMPLE_SPREADSHEET_ID, range='链接管理!A2:C').execute()
    values = result.get('values', [])

    if not values:
        print('No data found.')
    else:
        print('名称, 链接')
        for row in values:
            print('%s, %s' % (row[1], row[2]))


if __name__ == '__main__':
    read_test()
