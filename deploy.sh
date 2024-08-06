#!/bin/bash

# Define the service names
SERVICES=(
    "client"
    "nginx"
)

# Generate a temporary docker-compose file with new container names
generate_temp_compose_file() {
    cp docker-compose.yml docker-compose.temp.yml
    for SERVICE in "${SERVICES[@]}"; do
        sed -i "s/container_name: Blog-FE/container_name: Blog-FE-new/g" docker-compose.temp.yml
        sed -i "s/container_name: Blog-Nginx-Client/container_name: Blog-Nginx-Client-new/g" docker-compose.temp.yml
    done
    echo "Temporary docker-compose file generated:"
    cat docker-compose.temp.yml
}

# Deploy new containers
deploy_new_containers() {
    echo "Deploying new containers..."
    docker compose -f docker-compose.temp.yml up -d --build
}

# Verify new containers are running correctly
verify_new_containers() {
    for SERVICE in "${SERVICES[@]}"; do
        NEW_CONTAINER_NAME="${SERVICE}-new"
        STATUS=$(docker inspect -f '{{.State.Status}}' $NEW_CONTAINER_NAME || echo "not found")
        if [ "$STATUS" != "running" ]; then
            echo "Error: $NEW_CONTAINER_NAME is not running. Current status: $STATUS"
            exit 1
        fi
    done
}

# Switch traffic to the new containers
switch_traffic() {
    for SERVICE in "${SERVICES[@]}"; do
        OLD_CONTAINER_NAME="${SERVICE}"
        NEW_CONTAINER_NAME="${SERVICE}-new"
        docker rename $OLD_CONTAINER_NAME "${OLD_CONTAINER_NAME}-old"
        docker rename $NEW_CONTAINER_NAME $OLD_CONTAINER_NAME
    done
}

# Remove old containers
remove_old_containers() {
    for SERVICE in "${SERVICES[@]}"; do
        docker rm -f "${SERVICE}-old"
    done
}

# Main deployment flow
generate_temp_compose_file
deploy_new_containers
verify_new_containers
switch_traffic
remove_old_containers

# Clean up
rm -f docker-compose.temp.yml
