import datetime
import glob
import random


def test():
    d0 = datetime.datetime.now()
    d1 = datetime.datetime(2020, 9, 5)
    d2 = datetime.datetime(2020, 10, 11)
    interval1 = (d1 - d0).days + 1
    interval2 = (d2 - d0).days + 1
    if interval1 > 0 and interval1 % 10 == 0:
        print('距离中级考试还有 ' + str(interval1) + ' 天，彭熙雅冲鸭 🦆')
    if interval2 > 0 and interval2 % 10 == 1:
        print('距离 CPA 考试还有 ' + str(interval2) + ' 天，彭熙雅冲鸭 🦆')
    print('距离中级考试还有 ' + str(interval1) + ' 天，距离 CPA 考试还有 ' + str(interval2) + ' 天，彭熙雅冲鸭 🦆')


def test1(a, *b):
    print(a)
    print(b)


def test2():
    path = '/Users/kolly/Downloads/emoji'

    path_file_number = glob.glob(path + '/*.*')  # 指定文件下文件个数

    return len(path_file_number)


def test3():
    list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    slice = random.sample(list, 5)  # 从list中随机获取5个元素，作为一个片断返回
    print(slice)
    print(list)


if __name__ == '__main__':
    # test()
    print(test2())
    # test3()
