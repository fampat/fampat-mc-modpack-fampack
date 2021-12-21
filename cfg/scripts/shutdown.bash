#!/bin/bash

RUNNING_SCREEN=$(screen -ls | grep -e 'pts.*minecraft')

if [[ ! -z RUNNING_SCREEN ]]; then
    screen -S $(screen -ls | grep -e 'pts.*minecraft' | awk '{ print $1 }') -p 0 -X stuff "stop^M"
    sleep 8m
    screen -S $(screen -ls | grep -e 'pts.*minecraft' | awk '{ print $1 }') -p 0 -X stuff "exit^M"
fi
