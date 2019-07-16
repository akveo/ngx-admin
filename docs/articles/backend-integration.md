# Backend Integration

This section describes approaches of integration of ngx-admin application with backend API. Despite we understand that every backend is really different, we think that we can cover several most commonly used ways.
<hr>

## Integration with JSON REST server

Despite there's an option to do CORS requests to API server directly, we don't advise to do so. This way has disadvantages in terms of security and performance. In terms of security when you do CORS request you basically expose your API server URL to everybody. Your API server should take additional measures to make sure some URLs are not accessible, because it is exposed to the web. As for performance, CORS requests require to send preflight OPTIONS request before each HTTP request. This adds additional HTTP overhead.

The solution we suggest is to use proxy for your API server. In this case you can make your app accessible through some sub-url. For example, if your application's hosted under url `website.com` and your index file is located at `website.com/index.html`, you can make your API root accessible on `website.com/api`. This is well supported by angular-cli/webpack-dev-server for development setup and by web servers for production setup. Let's review these setups:
<hr>

## angular-cli/webpack-dev-server setup

There's not so much needs to be done to proxy your api using angular-cli. You can read detailed documentation in <a href="https://github.com/angular/angular-cli/blob/masterdocs/documentation/stories/proxy.md" target="_blank">their docs</a>.
But the most important topics are:

You should create `proxy.conf.json` file in your application root. The file should contain something like below:
```json
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false
  }
}
```

In this case you should put URL of your API server instead of `http://localhost:3000`.

After that you need to run your angular-cli application using following command 
```bash
ng serve --proxy-config proxy.conf.json
```
That's it. Now you can access `/api` URL from your ngx-admin application and your requests will be forwarded to your API server.
<hr>

## Production setup

Production setup is not much different from development setup. The only difference is that usually you don't use there angular-cli or webpack-dev-server to host your HTML/CSS/JS. Usually we all use some web server for that. At Akveo we mostly use [nginx](https://nginx.org/en/) for this use case. Below there is a sample configuration for this particular web server. For others it is not that much different.

Usually you create new virtual host with some similar configuration:

```nginx
server {
  listen 80;
  server_name website.com;

  root /yourAngularAppDistPath;
  index index.html index.htm;
  etag on;

  location / {
    index index.html;
    try_files $uri /index.html;
  }
}
```

The only thing you need to add is proxy-pass to `/api` URL like below:

```nginx
server {
  listen 80;
  server_name website.com;

  root /yourAngularAppDistPath;
  index index.html index.htm;
  etag on;

  location / {
    index index.html;
    try_files $uri /index.html;
  }

  location /api {
    proxy_pass http://localhost:3000/;
    proxy_set_header Host $host;
  }
}
```

That's it. Now your API server works on production as well.
