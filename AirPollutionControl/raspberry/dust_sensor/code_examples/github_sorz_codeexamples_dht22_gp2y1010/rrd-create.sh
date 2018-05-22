#!/bin/bash

rrdtool create data.rrd --step 5 \
        DS:dust:GAUGE:10:0:600 \
        DS:temp:GAUGE:10:-40:80 \
        DS:humi:GAUGE:10:0:100 \
        RRA:AVERAGE:0.5:12:12960 \
        RRA:AVERAGE:0.5:60:25920 \
        RRA:AVERAGE:0.5:360:35040
