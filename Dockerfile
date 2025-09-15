# Stage 1: Build the app
FROM node:23.11.1-alpine AS build

# Install pnpm
RUN corepack enable

WORKDIR /app

# Copy only package.json and pnpm-lock.yaml to leverage caching
COPY package.json pnpm-lock.yaml* ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm build

# Stage 2: Serve the app with a minimal web server
FROM nginx:alpine

# Copy built files from the previous stage to the Nginx web server's public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]