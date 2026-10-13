# FROM node:20-alpine AS build

# WORKDIR /app

# COPY package*.json ./

# # FIX: Forces npm to fetch clean, Linux-compatible platform binaries
# RUN npm ci --backwards-compatible || npm ci --legacy-peer-deps

# COPY . .

# RUN npm run build

# EXPOSE 3000

# CMD ["npm" , "start"]


# Stage 1: Build React application
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve production files
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]