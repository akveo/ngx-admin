export const structure = [
  {
    type: 'section',
    name: 'Getting Started',
    children: [
      {
        type: 'page',
        name: 'What is ngx-admin?',
        title: 'Ngx-admin - documentation',
        description: 'ngx-admin is a front-end admin dashboard template based on Angular 15+, Bootstrap 4+ and Nebular',
        keywords: 'Ngx-admin features, Angular 15+ typescript, Bootstrap 4+ & SCSS, ngx-admin documentation',
        children: [
          {
            type: 'block',
            block: 'markdown',
            source: 'index.md',
          },
        ],
      },
      {
        type: 'page',
        name: 'Installation Guidelines',
        title: 'Ngx-admin - Guideline to install.',
        description: 'A guideline to install ngx-admin on your machine: backend integration,' +
          ' tools you need to be installed.',
        keywords: 'Ngx-admin install tools, ngx-admin versions, ngx-admin install.',
        children: [
          {
            type: 'block',
            block: 'markdown',
            source: 'install-starter-kit.md',
          },
        ],
      },
      {
        type: 'page',
        name: 'Server deployment',
        title: 'Ngx-admin - Server deployment',
        description: 'How to set up your web-server to better serve the application on Angular.',
        keywords: 'Ngx-admin server, ngx-admin server deployment',
        children: [
          {
            type: 'block',
            block: 'markdown',
            source: 'server-deployment.md',
          },
        ],
      },
    ],
  },
  {
    type: 'section',
    name: 'Guides',
    children: [
      {
        type: 'page',
        name: 'Theme System',
        title: 'Ngx-admin - Theme System',
        description: 'Theme System in is a set of rules we put into how SCSS files and variables are organized.' +
          ' Theme Map | Component Variables |  Built-in-Themes',
        keywords: 'Nebular theme system, nebular components, nebular theme map, ngx-admin built-in-themes',
        children: [
          {
            type: 'block',
            block: 'markdown',
            source: 'concept-theme-system.md',
          },
        ],
      },
      {
        type: 'page',
        name: 'Change Theme',
        title: 'Ngx-admin - Change theme',
        description: 'How to change the current theme in ngx-admin.' +
          ' Switch from Cosmic to Default. Runtime Theme Switch.',
        keywords: 'ngx-admin runtime theme switch, ngx-admin theme change',
        children: [
          {
            type: 'block',
            block: 'markdown',
            source: 'theme-change.md',
          },
        ],
      },
      {
        type: 'page',
        name: 'Backend integration',
        title: 'Ngx-admin - Backend integration',
        description: 'Approaches of integration of ngx-admin application with backend API.' +
          ' Integration with JSON REST server, angular-cli/webpack-dev-server setup.',
        keywords: 'Ngx-admin backend integration, JSON REST server integration,' +
          ' angular-cli/webpack-dev-server setup, ngx-admin production setup',
        children: [
          {
            type: 'block',
            block: 'markdown',
            source: 'backend-integration.md',
          },
        ],
      },
    ],
  },
];
