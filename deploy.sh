#!/bin/bash

# Determine which environment is currently running
CURRENT=$(docker-compose ps -q client-blue)

if [ -n "$CURRENT" ]; then
  ACTIVE="client-blue"
  IDLE="client-green"
else
  ACTIVE="client-green"
  IDLE="client-blue"
fi

# Deploy the new version to the idle environment
docker-compose stop $IDLE
docker-compose rm -f $IDLE
docker-compose pull $IDLE
docker-compose up -d $IDLE

# Wait for the new version to start
echo "Waiting for $IDLE to start..."
sleep 30  # Adjust as needed to ensure the new container is up and running

# Perform health checks here if necessary

# Switch the load balancer to the idle environment
echo "Switching to $IDLE..."
docker-compose exec nginx /bin/sh -c "
  sed -i 's/$ACTIVE/$IDLE/g' /etc/nginx/conf.d/default.conf
  nginx -s reload
"

# Stop and remove the old environment
docker-compose stop $ACTIVE
docker-compose rm -f $ACTIVE

echo "Deployment complete. Active environment is now $IDLE."
