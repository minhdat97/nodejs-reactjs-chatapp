FROM node:8.7.0-alpine

# Create app directory and use it as working directory
RUN mkdir -p /srv/app/fr-chat-app-client
WORKDIR /srv/app/fr-chat-app-client

COPY package.json /srv/app/fr-chat-app-client
COPY package-lock.json /srv/app/fr-chat-app-client

RUN npm install

COPY . /srv/app/fr-chat-app-client

EXPOSE 3000

CMD [ "npm", "start" ]