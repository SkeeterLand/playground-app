# Use the official Nginx image as the base image
FROM nginx:alpine

# Copy the build output to replace the default Nginx static files
COPY dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 30080

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]