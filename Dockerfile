# Version 2.0.0-alpha.0

FROM node:6

MAINTAINER Akveo <contact@akveo.com>

 WORKDIR /app

ADD . /app

RUN npm install

EXPOSE 80

CMD ["npm", "start"]
