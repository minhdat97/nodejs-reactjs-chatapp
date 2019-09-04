FROM node:10-alpine

# Create app directory and use it as working directory
RUN mkdir -p /srv/app/fr-chat-app-server && apk update && apk add libc6-compat	
WORKDIR /srv/app/fr-chat-app-server

COPY package.json /srv/app/fr-chat-app-server
# COPY package-lock.json /srv/app/fr-chat-app-server

RUN npm i --only=production

COPY . /srv/app/fr-chat-app-server

EXPOSE 3001

RUN npm install -g nodemon

CMD [ "nodemon", "./src/index.js" ]