FROM node:8.7.0-alpine

# Create app directory and use it as working directory
RUN mkdir -p /srv/app/fr-chat-app-server
WORKDIR /srv/app/fr-chat-app-server

COPY package.json /srv/app/fr-chat-app-server
COPY package-lock.json /srv/app/fr-chat-app-server

RUN npm install

COPY . /srv/app/fr-chat-app-server

CMD [ "npm", "run", "dev" ]