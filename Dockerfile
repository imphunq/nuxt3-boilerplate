FROM node:20-alpine as build

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

RUN npm run build

FROM node:20-alpine as production

WORKDIR /app

COPY --from=build /app/.output /app/.output

CMD ["node", ".output/server/index.mjs"]
