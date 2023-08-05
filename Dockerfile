FROM node:alpine AS builder

USER node

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
COPY --chown=node:node . .

RUN npm install
RUN npm run build

FROM node:alpine AS production

WORKDIR /usr/src/app

COPY --from=builder --chown=node:node /usr/src/app/package*.json ./
COPY --from=builder --chown=node:node /usr/src/app/dist ./dist

RUN npm install

RUN npm install pm2 -g

CMD ["pm2-runtime", "dist/shared/infrastructure/http/server.js"]