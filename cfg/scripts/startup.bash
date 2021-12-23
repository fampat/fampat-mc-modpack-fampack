#!/bin/bash

RUNNING_SCREEN=$(screen -ls | grep 'minecraft')

if [[ ! -z $RUNNING_SCREEN ]]; then
    echo '>>> Starting the Minecraft home-server...'
    screen -S "minecraft" -dm bash -c "cd /home/minecraft/Fampack && ./run.sh"
fi
