#!/bin/bash

RUNNING_SCREEN=$(screen -ls | grep 'minecraft')

if [[ ! -z RUNNING_SCREEN ]]; then
    screen -S $(screen -ls | grep 'minecraft' | awk '{ print $1 }') -p 0 -X stuff "stop^M"
    sleep 8m
    screen -S $(screen -ls | grep 'minecraft' | awk '{ print $1 }') -p 0 -X stuff "exit^M"
fi
