// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Grupo das Casas - Esclarecimentos de IA',
  tagline: 'Esclarecimentos sobre o uso de Inteligência Artificial',
  favicon: 'img/ebenai.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://RuiRDA.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/cliente-a_casa_das_casas/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RuiRDA', // Usually your GitHub org/user name.
  projectName: 'cliente-a_casa_das_casas', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-pt',
    locales: ['en', 'pt-pt'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: undefined, // No sidebar file, will autogenerate
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/ebenai.png',
      navbar: {
        title: 'Grupo das Casas',
        logo: {
          alt: 'Eben AI Logo',
          src: 'img/ebenai.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'duvidas/lista_de_duvidas',
            position: 'left',
            label: 'Ferramentas e Prompts',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Dúvidas',
                to: '/docs/duvidas/lista_de_duvidas',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'Eben AI Solutions',
                href: 'https://ebenaisolutions.pt/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Eben AI Solutions.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;
