#!/bin/bash
# Shuts down the minecraft server if its running via screen named "minecraft"
# and no one is playing currently

# Fetch running screens with minecraft
RUNNING_SCREEN=$(screen -ls | grep -e '[/d]*\.minecraft')

# In case we have running minecraft-screens...
if [[ ! -z $RUNNING_SCREEN ]]; then
    # ... Check if someone is playing...
    screen -S $(screen -ls | grep -e '[/d]*\.minecraft' | awk '{ print $1 }') -X stuff "list^M"
    sleep 3s
    SERVER_EMPTY=$(screen -S $(screen -ls | grep -e '[/d]*\.minecraft' | awk '{ print $1 }') -X hardcopy /tmp/minecraft-screen.log && tail /tmp/minecraft-screen.log | grep 'There are 0')

    # ... if no-one is playing, continue...
    if [[ ! -z $SERVER_EMPTY ]]; then
        # ... Stop the minecraft instance gracefully
        echo '>>> Stopping Minecraft server and waiting for completion...'
        screen -S $(screen -ls | grep -e '[/d]*\.minecraft' | awk '{ print $1 }') -X stuff "stop^M"
        
        #Wait for the world to be saved
        while [ ! -z $(screen -ls | grep -e '[/d]*\.minecraft' | awk '{ print $1 }') ]
        do
            sleep 3s
        done
       
        echo '>>> Minecraft server saved and stopped...'

        # If a param is present, also shutdown the system
        if [[ "$1" = "turnoff" ]]; then
            echo '>>> Shutting down the Minecraft home-server machine...'
            sudo /usr/sbin/shutdown now -h
        fi
    else
        echo '>>> Shutdown aborted, Minecraft home-server not empty...'
    fi
else
    echo '>>> Shutdown aborted, no Screen with name "minecraft" found...'
fi
