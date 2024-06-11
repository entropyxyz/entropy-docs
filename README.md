<h1 align="center">Entropy Docs</h1>
<p align="center">
    <strong>This repository contains the documentation for the Entropy project (found in <code>/docs</code>) and all the build scripts to create the <a href="https://docs.entropy.xyz">docs.entropy.xyz</a> site. This repo also serves as the support hub for Entropy.</strong>
    <br><br>
    <a href="https://github.com/orgs/entropyxyz/projects/32">Project Board</a>
    <a href="https://github.com/entropyxyz/entropy-docs/issues">Issues</a>
    <a href="https://github.com/entropyxyz/entropy-docs/blob/main/LICENSE">MIT License</a>
</p>

## Table of contents

- [Run locally](#run-locally)
- [Information architecture](#information-architecture)
- [Repository structure](#repository-structure)
- [Support](#support)
- [Contributions](#contributions)
- [License](#license)

## Run locally

This repository uses the Docusaurus static-site-generator to build docs.entropy.xyz. To run the site locally:

1. Clone this repository and move into the new directory:

   ```shell
   git clone https://github.com/entropyxyz/entropy-docs
   cd entropy-docs
   ```

1. Install the dependencies for Docusaurus (pick one package manager process; do not run all three):

   ```shell
   # Using NPM
   npm install
   ```

   ```shell
   # Using PNPM
   pnpm install
   ```

   ```shell
   # Using Yarn
   yarn
   ```

1. Run the build scripts and run a local server:

   ```shell
   # Using NPM
   npm run start
   ```

   ```shell
   # Using PNPM
   pnpm run start
   ```

   ```shell
   # Using Yarn
   yarn start
   ```

1. Go to [localhost:3000](http://localhost:3000) in your browser.
1. To stop the local server, press `CTRL` + `c` in the terminal window.

To _build_ the site but not serve it, run steps `1` and `2`, followed by `yarn build`. This will build the site and save it in `./build`.

### Deploy

Deploying the site is done from the command-line:

```shell
GIT_USER=<GITHUB_USERNAME> USE_SSH=true yarn deploy
```

#### Troubleshooting

If the deploy doesn't work for whatever reason, try checking out to the `gh-pages` branch, pullling in the latest changes, and running the `deploy` command again:

```shell
git checkout gh-pages && git pull && checkout main && npm run start
```

## Information architecture

Documentation within this repository can be found in the `/docs` directory. That directory is split into the following subdirectories:

```plaintext
docs
|-- basics
|-- concepts
|-- guides
`-- reference
```

**Basics**: information that everybody needs to know in order to understand, and effectivly use, Entropy.
**Concepts**: discusses ideas and concepts that everyone may not be familiar with or things that are relevant only to Entropy and not other blockchains.
**Guides**: easy-to-understand guides that show users how to hit a specific goal without diving into the content discussed in `/concepts`.
**Reference**: in-depth reference documentation for the CLI and SDK.

## Repository structure

| File or directory    | Description                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------- |
| .docusaurus          | Configuration directory specific to Docusaurus. Holds themes and plugins for this site.     |
| .git/                | Stores Git version control information (ignore).                                            |
| .github/             | Directory for GitHub-specific configurations (ignore).                                      |
| .gitignore           | File specifying files to be ignored by Git (ignore).                                        |
| LICENSE              | File containing the license under which this project is distributed.                        |
| README.md            | This file.                                                                                  |
| blog/                | Directory containing markdown files for Entropy Docs blog posts. This is currently unused. |
| docs/                | Core directory containing markdown files for Entropy technical documentation.               |
| docusaurus.config.js | Main configuration file for this Docusaurus project.                                        |
| package-lock.json    | (Generated file) Lists exact versions of dependencies used in this project.                 |
| package.json         | File specifying project dependencies and scripts.                                           |
| sidebars.js          | File defining the navigation structure for the docs site. Docusaurus depends on this file.  |
| src/                 | Source code directory for this Docusaurus project, specifically React components.           |
| static/              | Directory for static assets used by docs.entropy.xyz site (images, fonts, etc.).            |
| tsconfig.json        | Configuration file for TypeScript (ignore).                                                 |
| yarn.lock            | Similar to `package-lock.json`. Lists exact versions of dependencies used in this project.  |

## Support

All support tickets are handled in the **Discussion** tab of the [github.com/entropyxyz/community repository](https://github.com/entropyxyz/community).

### Submitting a ticket

To submit a support ticket:

1. Head to the **Discussion** tab of the [github.com/entropyxyz/community repository](https://github.com/entropyxyz/community).
1. Select **New discusison**.
1. Next to *Support** click **Get started**.
1. Someone from Entropy will reach out to you within that thread for more details.

### Discord

We do not use Discord for support tickets. If you receive a message about a support ticket from someone claiming to be from Entropy, this is likely a scam. All support tickets are handled publically through GitHub Issues in this repository.

## Contribute

### Getting started

**Fork the repository**: Before making changes, you'll need to create a fork of our repository on GitHub. This creates a copy in your own account that you can modify.

**Clone your fork**: Once you've forked the repository, clone it to your local machine. This will allow you to make changes locally.

### Making changes

**Identify your contribution**: Look through the documentation in the `docs/` directory and find areas where you can improve the content, fix typos, or add new information.
**Edit files**: Make the changes you'd like to see. Check out the [Docusaurus documentation](https://docusaurus.io/docs/markdown-features) for any specific markdown rules you might not be aware of.

### Submitting your changes

**Commit your changes**: Commit your changes with a descriptive message explaining what you modified.
**Push your changes**: Push your committed changes to your forked repository on GitHub.
**Create a pull request**: On GitHub, navigate to your forked repository and create a pull request. This sends a notification to the Entropy Docs team about your proposed changes.

### Review Process

**Review from the docs team**: The Entropy docs team will review your pull request and may ask questions or suggest edits.
**Respond to feedback**: Be prepared to discuss your changes and make adjustments based on the feedback provided.
**Merging your pull request**: Once your pull request is approved, we will merge your changes into the `main` branch.

### Additional Tips

**Small, focused changes**: Break down larger contributions into smaller, more manageable pull requests. This makes the review process easier and faster.
**Test your changes**: Test your changes to ensure they don't introduce any unintended consequences.
**Stay up-to-date**: Keep an eye on this repository for any updates or changes to the contribution guidelines.

We appreciate your help in making our documentation even better. By following these guidelines, you can ensure a smooth and successful contribution process.

## License

- Most things in `/docs` are licensed under [MIT](./LICENSE) unless otherwise specified.
- Docusaurus is _currently_ [MIT](https://github.com/facebook/docusaurus/blob/main/LICENSE) licensed. The maintainers of _this_ repository have no control over what license Facebook, and thus the Docusaurus team, apply to their code.
