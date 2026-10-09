FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

# FIX: Forces npm to fetch clean, Linux-compatible platform binaries
RUN npm ci --backwards-compatible || npm ci --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm" , "start"]