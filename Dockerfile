FROM node:14

# Create a directory for the application
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install npm dependencies
RUN npm install --unsafe-perm=true --allow-root

# Copy the rest of the application code
COPY . .

# Set permissions for the app directory
RUN chown -R node:node /app

# Switch to the node user
USER node

# Start the application
CMD ["npm", "start"]
