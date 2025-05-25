# # Build stage
# FROM node:18 AS build
# WORKDIR /app
# COPY . .
# RUN npm install && npm run build

# # Production stage
# FROM nginx:alpine
# COPY --from=build /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
# Copy built files to nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html
# Don't copy custom nginx.conf - let the main nginx handle routing
# COPY nginx.conf /etc/nginx/conf.d/default.conf  # Remove this line

# Expose port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]