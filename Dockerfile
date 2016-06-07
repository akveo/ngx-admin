FROM node:latest

COPY . /var/www
WORKDIR /var/www

#Install rimraf globally, so root can perform delete operation
RUN npm install --global rimraf
RUN npm run clean

#install bower and dependcies with --allow-root flag
RUN npm install --global bower
RUN bower install --allow-root

#install right version of typings
RUN npm install --global typings@0.8.1
RUN npm run typings -- install

#install all
RUN npm install --global webpack webpack-dev-server typescript
RUN npm install

#build
RUN npm run prebuild:prod
RUN npm run build:prod

EXPOSE 8080

ENTRYPOINT ["npm", "run", "server:prod"]

#to build image - docker quick terminal, navigate to folder, docker build -t [your docker hub account]/ng2-admin .
#to run docker run -p 8080:8080 [your docker hub account]/ng2-admin
#or you can simply pull from my registry - docker pull dimkk/ng2-admin, docker run -p8080:8080 dimkk/ng2-admin
#now you can navigate to docker-machine (assuming you are on windows or osx) in browser - 192.168.99.100:8080