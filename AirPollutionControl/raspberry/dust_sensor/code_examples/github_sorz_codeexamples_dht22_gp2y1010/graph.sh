#!/bin/bash

DIR=/srv/http/home/air/graph
DATA=~/arduino/data.rrd
TIME=$1

time=$(date '+%H\:%M\:%S')

rrdtool graph $DIR/temp-$TIME.svg \
        --imgformat SVG \
        --start end-$TIME \
        --title "Air Temperature" \
        DEF:temp=$DATA:temp:AVERAGE \
        VDEF:avg=temp,AVERAGE \
        VDEF:max=temp,MAXIMUM \
        VDEF:min=temp,MINIMUM \
        VDEF:now=temp,LAST \
        LINE2:temp#d85427 \
        GPRINT:avg:"average\: %2.1lf℃" \
        GPRINT:max:"maximum\: %2.1lf℃" \
        GPRINT:min:"minimum\: %2.1lf℃" \
        GPRINT:now:"current\: %2.1lf℃" \
        COMMENT:"($time)"

rrdtool graph $DIR/humi-$TIME.svg \
        --imgformat SVG \
        --start end-$TIME \
        --title "Relative Humidity" \
        DEF:humi=$DATA:humi:AVERAGE \
        VDEF:avg=humi,AVERAGE \
        VDEF:max=humi,MAXIMUM \
        VDEF:min=humi,MINIMUM \
        VDEF:now=humi,LAST \
        LINE2:humi#0084a4 \
        GPRINT:avg:"average\: %2.0lf%%" \
        GPRINT:max:"maximum\: %2.0lf%%" \
        GPRINT:min:"minimum\: %2.0lf%%" \
        GPRINT:now:"current\: %2.0lf%%" \
        COMMENT:"($time)"

rrdtool graph $DIR/dust-$TIME.svg \
        --imgformat SVG \
        --start end-$TIME \
        --title "Dust Density" \
        DEF:dust=$DATA:dust:AVERAGE \
        VDEF:avg=dust,AVERAGE \
        VDEF:max=dust,MAXIMUM \
        VDEF:min=dust,MINIMUM \
        VDEF:now=dust,LAST \
        LINE2:dust#676767 \
        GPRINT:avg:"average\: %2.0lfµg/m³" \
        GPRINT:max:"maximum\: %2.0lfµg/m³" \
        GPRINT:min:"minimum\: %2.0lfµg/m³" \
        GPRINT:now:"current\: %2.0lfµg/m³" \
        COMMENT:"($time)"
