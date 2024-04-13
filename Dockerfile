# Use a Node.js base image with a version that meets Next.js requirements
FROM node:18

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port Next.js is running on (default is 3000)
EXPOSE 3000

# Command to run the Next.js app
CMD ["npm", "start"]

