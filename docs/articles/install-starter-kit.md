# Install ngx-admin

Please note, that **ngx-admin** is just a frontend application. Backend integration can be done relatively simple, but you should be aware that all the data is mocked using JavaScript objects. 
If you want the data to be dynamic, you should consider developing a backend integration by your own. 
The Nebular team doesn't consider providing generic integration layer as a part of this project because every backend API has a different structure in terms of data format and URLs.
<hr>

## Install tools

To install ngx-admin on your machine you need to have the following tools installed:
- Git - <a href="https://git-scm.com" target="_blank">https://git-scm.com</a>
- Node.js - <a href="https://nodejs.org" target="_blank">https://nodejs.org</a>. Please note the **version** should be **>=8**
- Npm - Node.js package manager, comes with Node.js. Please make sure npm **version** is **>=5**
- You might also need some specific native packages depending on your operating system like `build-essential` on Ubuntu

<div class="note note-warning">
  <div class="note-title">Warning!</div>
  <div class="note-body">
    Please note that **it is not possible** to build ngx-admin **without these tools** and it will not be possible because of the way how Angular is built.
  </div>
</div>
<hr>

## Download the code

When you completed tools setup, you need to download the code of ngx-admin application. The easiest way to do that is to clone GitHub repository:
```bash
git clone https://github.com/akveo/ngx-admin.git
```

After clone is completed, you need to install npm modules:
```bash
cd ngx-admin && npm i
```
<div class="note note-warning">
  <div class="note-title">Warning!</div>
  <div class="note-body">
    Please make sure that installation process successfully completed without errors.
  </div>
</div>
<hr>

## Run local copy

To run a local copy in development mode, execute:

```bash
npm start
```

Go to <a href="http://0.0.0.0:4200" target="_blank">http://0.0.0.0:4200</a> or <a href="http://localhost:4200" target="_blank">http://localhost:4200</a> in your browser.
<hr>

## Production bundle

To create a bundle in production mode, execute:

```bash
npm run build:prod
```

This will clear up your `dist` folder (where release files are located) and generate a release build.
Now you can copy the sources from the `dist` folder and use it with any backend framework or simply [put it under a web server](docs/getting-started/server-deployment).
