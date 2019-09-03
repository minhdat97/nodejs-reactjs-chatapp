FROM node:8.7.0-alpine

# Create app directory and use it as working directory
RUN mkdir -p /srv/app/fr-chat-app-server && apk update && apk add libc6-compat	
WORKDIR /srv/app/fr-chat-app-server

EXPOSE 3001

COPY package.json /srv/app/fr-chat-app-server
# COPY package-lock.json /srv/app/fr-chat-app-server

RUN npm ci --only=production

COPY . /srv/app/fr-chat-app-server

CMD [ "node", "index.js" ]