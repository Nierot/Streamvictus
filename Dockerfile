FROM node:18.14.0-slim

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --production

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]