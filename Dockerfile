FROM node:14

WORKDIR /app

COPY package.json .

# RUN npm i -g npm-check-updates
# RUN ncu -u
RUN npm update
RUN npm install

COPY . .

RUN npm run build

EXPOSE 4200

# Start APP
# ENTRYPOINT ["npm","start"]
CMD npm start
