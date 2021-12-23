#!/bin/bash

# Fetch running screens with minecraft
RUNNING_SCREEN=$(screen -ls | grep -e '[/d]*\.minecraft')

# In case we have running minecraft-screens...
if [[ ! -z $RUNNING_SCREEN ]]; then
    # ... Check if someone is playing...
    screen -S $(screen -ls | grep -e '[/d]*\.minecraft' | awk '{ print $1 }') -X stuff "list^M"
    SERVER_EMPTY=$(screen -S $(screen -ls | grep -e '[/d]*\.minecraft' | awk '{ print $1 }') -X hardcopy /tmp/minecraft-screen.log && tail /tmp/minecraft-screen.log | grep 'There are 0')

    # ... if no-one is playing, continue...
    if [[ ! -z $SERVER_EMPTY ]]; then
        # ... Stop the minecraft instance gracefully
        echo '>>> Stopping Minecraft server and waiting 5 minutes for completion...'
        screen -S $(screen -ls | grep -e '[/d]*\.minecraft' | awk '{ print $1 }') -X stuff "stop^M"
        
        # Aggange some time for saving
        sleep 5m

        # End the screen session
        echo '>>> Ending Minecraft screen session...'
        screen -S $(screen -ls | grep -e '[/d]*\.minecraft' | awk '{ print $1 }') -X stuff "exit^M"
        
        # If a param is present, also shutdown the system
        if [[ "$1" = "turnoff" ]]; then
            echo '>>> Shutting down the Minecraft home-server...'
            sleep 10s
            sudo /usr/sbin/shutdown now -h
        fi
    fi
fi
