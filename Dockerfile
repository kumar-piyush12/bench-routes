# Use Node.js base image
FROM node:18.20.5-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (or just package.json if the lock file is missing)
COPY package.json ./
COPY package-lock.json ./  
# Install backend dependencies
RUN npm install

# Copy the rest of the backend application code
COPY . .

# Expose the port the backend is running on
EXPOSE 5000

# Start the backend service
CMD ["npm", "start"]
