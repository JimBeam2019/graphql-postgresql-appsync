FROM node:10

WORKDIR /usr/src/graphql-postgresql-appsync

RUN apt-get update && apt-get install -y procps vim

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000
CMD [ "npm", "start" ]