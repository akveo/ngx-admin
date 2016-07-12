FROM node:latest

RUN git clone https://github.com/akveo/ng2-admin.git /var/www \
    && cd /var/www \
    && npm install --global rimraf \
    && npm run clean \
    && npm install --global bower typings webpack webpack-dev-server typescript \
    && bower install --allow-root \
    && npm run typings -- install \
    && npm install \
    && npm run prebuild:prod && npm run build:prod

EXPOSE 8080

WORKDIR /var/www
ENTRYPOINT ["npm", "run", "server:prod"]
