FROM node:18-slim

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./
RUN corepack enable --install-directory=/usr/bin \
    && corepack prepare --activate pnpm@5.4.0
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build
RUN rm -rf node_modules
RUN pnpm install --frozen-lockfile --prod

# runtime image
FROM node:18-alpine

ENV TZ="Asia/Shanghai"

WORKDIR /app
COPY package.json .
COPY public /app/public
COPY config /app/config
COPY --from=0 /app/node_modules /app/node_modules
COPY --from=0 /app/dist /app/dist

EXPOSE 3000

CMD ["npm", "run", "start:prod"]

#> docker buildx build --platform linux/amd64,linux/arm64/v8,linux/arm/v7 -t land007/chatgpt-mirror:latest --push .
#docker build -t land007/chatgpt-mirror:latest .
#docker run --rm --name chatgpt-mirror --env-file env -p 23000:3000 land007/chatgpt-mirror:latest
