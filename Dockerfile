# Step 1: Build the app using a Node.js image
FROM node:20 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the build files from the previous image into the Nginx server's public folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default HTTP port
EXPOSE 80

# Optionally: Copy a custom nginx.conf if you need to change the default config
# COPY nginx.conf /etc/nginx/nginx.conf

# Start the Nginx server
