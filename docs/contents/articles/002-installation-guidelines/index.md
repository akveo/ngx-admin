---
title: Installation Guidelines
author: vl
sort: 500
group: Quick Start
template: article.jade
---

## Prerequisites

Despite BlurAdmin can be run without any development experience, it would be much easier if you already know something about it. In general following instruction do allow to run local copy by complete newbie, but it doesn't answer questions that can arise in the process of installation.

## Install tools

If you don't havee any of these tools installed already, you will need to:
* Download and install [git](https://git-scm.com/)
* Download and install nodejs [https://nodejs.org](https://nodejs.org)

**Note**: It seems like there are some problems with some libraries used in this template and old node versions. That's why we suggest you to have one of the latest.

## Clone repository and install dependencies

You will need to clone source code of BlurAdmin GitHub repository. To do this open console and execute following lines:
```bash
git clone https://github.com/akveo/blur-admin.git
```
After repository is cloned, go inside of repository directory and install dependencies there:
```bash
cd blur-admin
npm install
```
This will setup a working copy of BlurAdmin on your local machine

## Running local copy

To run local copy in development mode, execute:
```bash
gulp serve
```
This script should automatically open template in your default browser.

To run local copy in production mode, execute:
```bash
gulp serve:dist
```
For addition information about build, please check out [this angular generator](https://github.com/Swiip/generator-gulp-angular)
