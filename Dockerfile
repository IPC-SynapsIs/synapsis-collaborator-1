FROM node:argon

RUN apt-get update -y
RUN apt-get -y install mongodb
RUN mkdir -p /data/db/
#RUN mongod

RUN mkdir -p /urs/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY . /usr/src/app


RUN npm install

EXPOSE 8080


CMD [ "bash", "start.sh"]
