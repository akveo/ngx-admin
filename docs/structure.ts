export const structure = [
  {
    type: 'section',
    name: 'Getting Started',
    children: [
      {
        type: 'page',
        name: 'What is ngx-admin?',
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
