FROM node:8.7.0-alpine

# Create app directory and use it as working directory
RUN mkdir -p /src/app/fr-chat-app-server
WORKDIR /src/app/fr-chat-app-server

COPY package.json /src/app/fr-chat-app-server
COPY package-lock.json /src/app/fr-chat-app-server

RUN npm install

COPY . /src/app/fr-chat-app-server

CMD [ "npm", "run", "dev" ]