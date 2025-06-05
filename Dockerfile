#  Node.js base image
FROM node:18

# Create app directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Run the app
CMD ["npm", "run", "start:prod"]
