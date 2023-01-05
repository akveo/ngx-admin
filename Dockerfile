# Stage 1
FROM node:14.15.0 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist /usr/share/nginx/html


# docker run -d -it -p 80:80/tcp --name ngx-admin bashizip/ngx-admin:latest
# docker exec -it 79fb3f7d6f9d /bin/sh