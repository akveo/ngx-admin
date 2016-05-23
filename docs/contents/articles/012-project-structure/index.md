---
title: Project Structure
author: vl
sort: 800
group: Customization
template: article.jade
---

Project structure was originally based on [this angular generator](https://github.com/Swiip/generator-gulp-angular). We made some changes we thought would be better for our particular problem.

The directory structure of this template is as follows:
```
├── bower.json               <- front-end library dependencies
├── gulpfile.js              <- main task runner file
├── package.json             <- mostly task runner dependencies
├── docs/                    <- wintersmith documentation generator
├── gulp/                    <- build tasks
├── src/                     <- main front-end assets
│   ├── 404.html
│   ├── auth.html
│   ├── index.html          <- main app dashboard page
│   ├── reg.html
│   ├── app/                <- angular application files
│   │   ├── app.js         <- angular application entry point. Used for managing dependencies
│   │   ├── pages/         <- UI router pages. Pages created for demonstration purposes. Put your application js and html files here
│   │   ├── theme/         <- theme components. Contains various common widgets, panels which used across application
│   ├── assets/             <- static files (images, fonts etc.)
│   ├── sass/               <- sass styles
│   │   ├── app/           <- application styles. Used mostly for demonstration purposes. Put your app styles here.
│   │   ├── theme/         <- theme styles. Used to customize bootstrap and other common components used in tempate.
```

In our template we tried to separate theme layer and presentation layer. We believe most of other templates have them combined. That's why when you start developing using them, it gets very hard for you to remove things you don't need. Though we understand that our structure is not ideal, but we're aiming to make it as good as possible.
