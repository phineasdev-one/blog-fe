# Stage 1: Compile and Build
FROM node:20-alpine as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY package*.json ./usr/local/app/
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build

# Expose port 3000 (Default)
EXPOSE 3000
CMD ["npm", "start"]