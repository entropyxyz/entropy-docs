import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'c40'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '4bf'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'ad8'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '39c'),
            routes: [
              {
                path: '/basics/',
                component: ComponentCreator('/basics/', '297'),
                exact: true
              },
              {
                path: '/basics/entrosplainer',
                component: ComponentCreator('/basics/entrosplainer', '7d2'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/basics/glossary',
                component: ComponentCreator('/basics/glossary', 'b00'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/basics/support',
                component: ComponentCreator('/basics/support', 'd0c'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/concepts/',
                component: ComponentCreator('/concepts/', '924'),
                exact: true
              },
              {
                path: '/concepts/access-modes',
                component: ComponentCreator('/concepts/access-modes', '05a'),
                exact: true
              },
              {
                path: '/concepts/joining-the-network',
                component: ComponentCreator('/concepts/joining-the-network', '2b1'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/concepts/node-encryption-and-authentication',
                component: ComponentCreator('/concepts/node-encryption-and-authentication', '06e'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/concepts/proactive-refresh',
                component: ComponentCreator('/concepts/proactive-refresh', 'fab'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/concepts/programs',
                component: ComponentCreator('/concepts/programs', 'af8'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/concepts/registering',
                component: ComponentCreator('/concepts/registering', '4cf'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/concepts/signing',
                component: ComponentCreator('/concepts/signing', '9b9'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/concepts/threshold-signature-scheme',
                component: ComponentCreator('/concepts/threshold-signature-scheme', '2d9'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/concepts/validators',
                component: ComponentCreator('/concepts/validators', 'b8c'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/guides/',
                component: ComponentCreator('/guides/', '078'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/guides/deploy-a-program',
                component: ComponentCreator('/guides/deploy-a-program', '757'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/guides/get-funds',
                component: ComponentCreator('/guides/get-funds', '598'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/guides/manage-accounts',
                component: ComponentCreator('/guides/manage-accounts', '9a9'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/guides/register-an-account',
                component: ComponentCreator('/guides/register-an-account', '548'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/guides/spin-up-a-devnet',
                component: ComponentCreator('/guides/spin-up-a-devnet', '0fd'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/guides/transfer-funds',
                component: ComponentCreator('/guides/transfer-funds', '83c'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/guides/use-the-explorer',
                component: ComponentCreator('/guides/use-the-explorer', '252'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/reference/',
                component: ComponentCreator('/reference/', 'ce6'),
                exact: true
              },
              {
                path: '/reference/cli',
                component: ComponentCreator('/reference/cli', 'b7f'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/reference/networks',
                component: ComponentCreator('/reference/networks', '6a0'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/reference/rust-testing-interface',
                component: ComponentCreator('/reference/rust-testing-interface', 'd31'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/reference/sdk',
                component: ComponentCreator('/reference/sdk', '689'),
                exact: true
              },
              {
                path: '/',
                component: ComponentCreator('/', '184'),
                exact: true,
                sidebar: "sidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
