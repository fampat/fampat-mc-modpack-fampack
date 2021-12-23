#!/bin/bash

RUNNING_SCREEN=$(screen -ls | grep -e '[/d]*\.minecraft')

if [[ ! -z RUNNING_SCREEN ]]; then
    echo '>>> Stopping Minecraft server and waiting 5 minutes for completion...'
    screen -S $(screen -ls | grep -e '[/d]*\.minecraft' | awk '{ print $1 }') -p 0 -X stuff "stop^M"
    sleep 5m
    echo '>>> Ending Minecraft screen session...'
    screen -S $(screen -ls | grep -e '[/d]*\.minecraft' | awk '{ print $1 }') -p 0 -X stuff "exit^M"
    
    # If a param is present, also shutdown the system
    # This requires that the minecraft user has executed this script with sudo
    if [[ "$1" = "turnoff" ]]; then
     echo '>>> Shutting down the Minecraft home-server...'
     sleep 10s
     shutdown now -h
    fi
fi
