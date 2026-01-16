FROM node:25-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm prune --production

FROM node:25-alpine
WORKDIR /app
COPY --from=builder /app /app
COPY package.json .
EXPOSE 8080
ENV NODE_ENV=production
CMD [ "node", "server.mjs" ]