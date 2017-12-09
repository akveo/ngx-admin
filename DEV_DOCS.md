# How to develop
- Clone ngx-admin: git@github.com:akveo/ngx-admin.git
- And nebular: git@github.com:akveo/nebular.git
- Run **npm install** in ngx-admin
- Run **npm link** for each module in *nebular/src/framework* except *icons*
- Make sure you don't have *node_modules* in nebular
- Link nebular in ngx-admin: **npm link @nebular/{auth,theme}**
- Keep calm and code hard!
