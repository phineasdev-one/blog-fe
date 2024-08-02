#!/bin/bash

# Stop existing containers
docker compose stop

# Remove existing containers
docker compose rm -f

docker compose pull

docker compose up -d
