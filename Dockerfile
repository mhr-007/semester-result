# Use Node image as base
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application files
COPY . .

# Build the Angular app

# Set environment variable for production

# Expose port 4200
EXPOSE 4200

# Start the Angular app
CMD [ "yarn", "start" ]

