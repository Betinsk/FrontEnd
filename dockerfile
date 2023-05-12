FROM node:16

WORKDIR /app 

# Copy the application files into the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Define the entry point for the container
CMD ["nodemon", "index.js"]
