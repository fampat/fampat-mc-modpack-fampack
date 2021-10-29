#!/bin/sh
# Valhelsia 3 Server Startup Script

# Edit the below values to change JVM Arguments or Allocated RAM for the server.
JAVA_PATH="java"
ALLOCATED_RAM="5G"
JVM_ARGUMENTS="-XX:+UseG1GC -XX:+UnlockExperimentalVMOptions -XX:MaxGCPauseMillis=100 -XX:+DisableExplicitGC -XX:TargetSurvivorRatio=90 -XX:G1NewSizePercent=50 -XX:G1MaxNewSizePercent=80 -XX:G1MixedGCLiveThresholdPercent=50 -XX:+AlwaysPreTouch"

# Make sure this matches the Forge version of the server if you update.
FORGE_VERSION="forge-1.16.5-36.2.8"

# Install Minecraft Forge if it isn't already installed.
FILE=./${FORGE_VERSION}.jar
if [ ! -f "${FILE}" ]; then
  echo "Installing Minecraft Forge Server."
  "${JAVA_PATH}" -jar ./${FORGE_VERSION}-installer.jar --installServer
fi

echo "Starting Fampack Server."
"${JAVA_PATH}" -jar -Xms${ALLOCATED_RAM} -Xmx${ALLOCATED_RAM} ${JVM_ARGUMENTS} ${FILE} nogui

