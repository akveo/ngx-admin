---
title: Installation Guidelines
author: vl
sort: 500
group: Quick Start
template: article.jade
---

## Prerequisites

Although ng2-admin can be run without any development experience, it would be much easier if you already have some. 
The following instructions allow you to run a local copy on your machine.

## Install tools

If you don't have any of these tools installed already, you will need to:
* Download and install [git](https://git-scm.com/)
* Download and install nodejs [https://nodejs.org](https://nodejs.org)

**Note**: Make sure you have Node version >= 4.0 and NPM >= 3

Once you have those, you should install these globals with `npm install --global`:
* webpack
```bash
npm install --global webpack
```

* webpack-dev-server
```bash
npm install --global webpack-dev-server
```

* typescript
```bash
npm install --global typescript@2.0.0
```

## Clone repository and install dependencies

You will need to clone the source code of ng2-admin GitHub repository:

```bash
git clone https://github.com/akveo/ng2-admin.git
```
After the repository is cloned, go inside of the repository directory and install dependencies:

```bash
cd ng2-admin
npm install
```
This will setup a working copy of ng2-admin on your local machine.

```
## Running local copy

To run a local copy in development mode, execute:

```bash
npm start
```

Go to http://0.0.0.0:3000 or http://localhost:3000 in your browser.


To run the local copy in production mode and build the sources, execute:

```bash
npm run prebuild:prod && npm run build:prod && npm run server:prod
```

This will clear up your dist folder (where release files are located), generate a release build and start the 
built-in server.
Now you can copy the sources from the `dist` folder and use it with any backend framework or 
simply put it under a web server.

For addition information about creating a build, please check out [Angular2 Webpack Starter documentation](https://github.com/AngularClass/angular2-webpack-starter)
