FROM node:8.7.0-alpine

# Create app directory and use it as working directory
RUN mkdir -p /src/app/fr-chat-app-client
WORKDIR /src/app/fr-chat-app-client

COPY package.json /src/app/fr-chat-app-client
COPY package-lock.json /src/app/fr-chat-app-client

RUN npm install

COPY . /src/app/fr-chat-app-client

CMD [ "npm", "start" ]