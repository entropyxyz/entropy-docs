// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const math = require('remark-math');
const katex = require('rehype-katex');

const config = {
  title: 'Entropy Documentation',
  tagline: "Documentation for Entropy's Core and SDK packages",
  favicon: 'img/favicon.ico',
  organizationName: 'entropyxyz', // Usually your GitHub org/user name.

  // Set the production url of your site here
  // Production URL for the moment while still in alpha
  url: 'https://docs.entropy.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/entropyxyz/entropy-docs/edit/main',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarCollapsible: false,
        },
        blog: false,
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'Entropy Logo',
        src: 'img/entropy-logo-black.png',
        srcDark: 'img/entropy-logo-white.png'
      },
      items: [
        {
          href: 'https://github.com/entropyxyz',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'html',
          position: 'right',
          value:'<div class="colorModeToggle_node_modules-@docusaurus-theme-classic-lib-theme-Navbar-Content-styles-module toggle_node_modules-@docusaurus-theme-classic-lib-theme-ColorModeToggle-styles-module"><button class="clean-btn toggleButton_node_modules-@docusaurus-theme-classic-lib-theme-ColorModeToggle-styles-module"id=font-switcher-button onclick=switch_fonts() type=button><svg class=lightToggleIcon_node_modules-@docusaurus-theme-classic-lib-theme-ColorModeToggle-styles-module height=24 viewBox="0 0 24 24"width=24><path d="M12 3V21M9 21H15M19 6V3H5V6"stroke=#000000 stroke-linecap=round stroke-linejoin=round stroke-width=2 /></svg></button></div>'
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  }),

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  scripts: [
    {
      src: '/javascript/custom.js',
      async: false
    }
  ]
}

module.exports = config
