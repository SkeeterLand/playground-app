# Use the official Node.js image as a base
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./  
COPY deployment.yml ./deployment.yml
COPY service.yml ./service.yml

#ADD . /usr/app
#RUN ls /usr/app

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build 

RUN ls -la /app

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/index.js"]
