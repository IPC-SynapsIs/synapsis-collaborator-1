FROM node:argon
#FROM ubuntu:latest

RUN apt-get update -y
#RUN apt-get -y install mongodb
#RUN apt-get -y install nodejs-legacy npm
#RUN mkdir -p /data/db/

RUN mkdir -p /urs/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
COPY app.js /usr/src/app/app.js
COPY bin/ /usr/src/app/bin/
COPY models/ /usr/src/app/models
COPY public/ /usr/src/app/publics
COPY README.md /usr/src/app/README.md
COPY routes/ /usr/src/app/routes/
COPY start.sh /usr/src/app/start.sh
COPY views/ /usr/src/app/views/


RUN npm install

EXPOSE 8080


CMD [ "bash", "start.sh"]
