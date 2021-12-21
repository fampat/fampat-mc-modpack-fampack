#!/bin/bash

RUNNING_SCREEN=$(screen -ls | grep -e 'pts.*minecraft')

if [[ ! -z RUNNING_SCREEN ]]; then
    screen -d -m
    sleep 5s
    screen -S $(screen -ls | grep -e 'pts.*minecraft' | awk '{ print $1 }') -p 0 -X stuff "cd /home/minecraft/Fampack && ./run.sh^M"
fi
