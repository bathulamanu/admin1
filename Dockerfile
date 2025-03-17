# Use official Node.js 20 image as base
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package*.json ./

# Update npm to the latest version (optional, if needed)
RUN npm install -g npm@latest

# Install production dependencies
RUN npm install --only=production

# Copy the rest of the application source code
COPY . .

# Expose the application port (Change from 3000 to 5000)
EXPOSE 5000

# Start the application (ensure your app listens on port 5000)
CMD ["node", "server.js"]
