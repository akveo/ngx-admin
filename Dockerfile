FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build --prod

EXPOSE 4200

# Start APP
CMD npm start
