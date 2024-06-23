FROM node:14

# Create a directory for your app
WORKDIR /app

# Install npm packages
COPY package*.json ./
RUN npm install

# Copy your application code
COPY . .

# Set permissions for /app directory
RUN chown -R node:node /app
USER node

# Command to run your application
CMD [ "npm", "start" ]  