# Entropy Docs - README

This repository contains code that builds a Web site is using [Docusaurus 2](https://docusaurus.io/), a modern [static site generator](https://en.wikipedia.org/wiki/Static_site_generator).

## Installation

As Docusaurus is built with [Node.js](https://nodejs.org/), to build this site you will need:

* [the `yarn` package manager](https://yarnpkg.com/).

Once installed, simply run `yarn` in the directory you cloned this codebase into. For example:

```sh
git clone https://github.com/entropyxyz/entropy-docs.git
cd entropy-docs # Go to the repository root.
yarn            # Performs installation.
```

## Local development

```sh
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```sh
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

This site is hosted on [GitHub Pages](https://pages.github.com/). It uses the `gh-pages` Node.js package to make deploying to the GitHub Pages site easy (by automating the process of committing to the `gh-pages` branch in this repository).

```sh
npm run deploy # Deploy the site to GH Pages as your user.
```
