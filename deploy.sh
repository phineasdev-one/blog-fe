# #!/bin/bash

# # Stop existing containers
# docker compose stop

# # Remove existing containers
# docker compose rm -f

# docker compose pull

# docker compose up -d


#!/bin/bash

# Define the service names
SERVICES=(
    "nginx"
    "client"
)

# Generate a temporary docker-compose file with new container names
generate_temp_compose_file() {
    cp docker-compose.yml docker-compose.temp.yml
    for SERVICE in "${SERVICES[@]}"; do
        sed -i "s/container_name: ${SERVICE}/container_name: ${SERVICE}_new/g" docker-compose.temp.yml
    done
}

# Deploy new containers
deploy_new_containers() {
    docker compose -f docker-compose.temp.yml up -d --build
}

# Verify new containers are running correctly
verify_new_containers() {
    for SERVICE in "${SERVICES[@]}"; do
        NEW_CONTAINER_NAME="${SERVICE}_new"
        STATUS=$(docker inspect -f '{{.State.Status}}' $NEW_CONTAINER_NAME)
        if [ "$STATUS" != "running" ]; then
            echo "Error: $NEW_CONTAINER_NAME is not running."
            exit 1
        fi
    done
}

# Switch traffic to the new containers
switch_traffic() {
    for SERVICE in "${SERVICES[@]}"; do
        OLD_CONTAINER_NAME="${SERVICE}"
        NEW_CONTAINER_NAME="${SERVICE}_new"
        docker rename $OLD_CONTAINER_NAME "${OLD_CONTAINER_NAME}_old"
        docker rename $NEW_CONTAINER_NAME $OLD_CONTAINER_NAME
    done
}

# Remove old containers
remove_old_containers() {
    for SERVICE in "${SERVICES[@]}"; do
        docker rm -f "${SERVICE}_old"
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
