export const structure = [
  {
    type: 'section',
    name: 'Getting Started',
    children: [
      {
        type: 'page',
        name: 'What is ngx-admin?',
        description: 'Ngx-admin is Angular 9+ Bootstrap 4+ admin dashboard template. Free and Open Source to bootstrap the development of your product or to learn Angular.',
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
        description: 'A guideline to install ngx-admin on your machine: backend integration, tools you need to be installed.',
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
        description: 'How to set up your web-server to better serve the application on Angular.',
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
        description: 'Theme System in is a set of rules we put into how SCSS files and variables are organized. Theme Map | Component Variables |  Built-in-Themes',
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
        description: 'How to change the current theme in ngx-admin. Switch from Cosmic to Default. Runtime Theme Switch.',
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
        description: 'Approaches of integration of ngx-admin application with backend API. Integration with JSON REST server, angular-cli/webpack-dev-server setup.',
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
