#!/usr/bin/env python3
from serial import Serial
import subprocess

RRDTOOL = '/usr/bin/rrdtool'
DATAFILE = '/home/xierch/arduino/data.rrd'
FORMAT = 'N:%d:%.1f:%d'

def readline(serial):
    line = serial.readline().decode().strip()
    return line

def read_block(serial):
    line = readline(serial)
    assert line == 'Dust'
    dust = int(readline(serial))

    line = readline(serial)
    assert line == 'Temp'
    temp = float(readline(serial))

    line = readline(serial)
    assert line == 'Humi'
    humi = float(readline(serial))
    humi = round(humi)

    handle_points(dust, temp, humi)


def handle_points(dust, temp, humi):
    print('%dmg %.1fC %d%%' % (dust, temp, humi))
    args = FORMAT % (dust, temp, humi)
    code = subprocess.call([RRDTOOL, 'update',
            '--daemon', '/tmp/rrdcached.sock',
            DATAFILE, args])
    if code != 0:
        print('rrdtool update failed.')


def main():
    serial = Serial(2)
    while True:
        read_block(serial)
    serial.close()

if __name__ == '__main__':
    main()
