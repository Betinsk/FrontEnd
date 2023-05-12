FROM node:16

WORKDIR /FRONTEND 

# Copy the application files into the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Define the entry point for the container
CMD ["node", "start"]
