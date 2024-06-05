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

1. Install the dependencies for Docusaurus (pick one package manage process, do not run all three):

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

## Information architecture

Documentation within this repository is found within the `/docs` directory. That directory is split into the following subdirectories:

```plaintext
docs
|-- basics
|-- concepts
|-- guides
`-- reference
```

* **Basics**: information that everybody needs to know in order to understand, and effectivly use, Entropy.
* **Concepts**: discusses ideas and concepts that everyone may not be familiar with, or things that are relevant only to Entropy and not other blockchains.
* **Guides**: easy-to-understand guides that show users how to hit a specific goal, without diving into the content discussed in `/concepts`.
* **Reference**: in-depth reference documentation for the CLI and SDK.

## Repository structure

| File or directory | Description |
| --- | --- |
| .docusaurus | Configuration directory specific to Docusaurus. Holds themes and plugins for this site. |
| .git/ | Stores Git version control information (ignore). |
| .github/ | Directory for GitHub specific configurations (ignore). |
| .gitignore | File specifying files to be ignored by Git (ignore). |
| LICENSE | File containing the license under which this project is distributed. |
| README.md | This file. |
| blog/ | Directory containing markdown files for Entropy Docs blog posts. This is currently un-used. |
| docs/ | Core directory containing markdown files for Entropy technical documentation. |
| docusaurus.config.js | Main configuration file for this Docusaurus project. |
| package-lock.json | (Generated file) Lists exact versions of dependencies used in this project. |
| package.json | File specifying project dependencies and scripts. |
| sidebars.js | File defining the navigation structure for the docs site. Docusaurus depends on this file. |
| src/ | Source code directory for this Docusaurus project, specifically React components. |
| static/ | Directory for static assets used by docs.entropy.xyz site (images, fonts, etc.). |
| tsconfig.json | Configuration file for TypeScript (ignore). |
| yarn.lock | Similar to `package-lock.json`. Lists exact versions of dependencies used in this project. |

## Support

All support tickets are handled in the **Issues** tab of this repository. If you encounter anyone claiming to be from Entropy in any other location on the web (Discord, Discuss, Reddit, Twitter/X, etc.), this is likely a scam.

### Submitting a ticket

To submit a support ticket:

1. Click on the [**Issues**](https://github.com/entropyxyz/entropy-docs/issues) tab within this repository.
1. Select [**New Issue**](https://github.com/entropyxyz/entropy-docs/issues/new).
1. Fill out the fields and click **Create issue**.
1. Someone from Entropy will reach out to you within that issue thread for more details.

### Discord

**We do not use Discord for support tickets.** If you receive a message about a support ticket from someone claiming to be from Entropy, this is likely a scam. All support tickets are handled publically through GitHub Issues in this repository.

## Contribute

We appreciate contributions of any size from everyone, from fixing typos to proposing substantial rewrites to aid clarity. This section briefly describes how you can contribute to our documentation in four easy steps.

### Getting started

1. [**Fork this repository**](https://github.com/entropyxyz/entropy-docs/fork): Before making changes, you'll need to [create a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) of our repository on GitHub. This creates a copy in your own account that you can modify.
1. **Clone your fork**: Once you've forked our repository, [clone your fork to your local machine](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository). This will allow you to make changes locally.

### Making changes

1. **Identify your contribution**: Look through the documentation in the `docs/` directory and find areas where you can improve the content, fix typos, or add new information.
1. **Edit files**: Make the changes you'd like to see. Check out the [Docusaurus documentation](https://docusaurus.io/docs/markdown-features) for any specific markdown rules you might not be aware of.

### Submitting your changes

1. **Commit your changes**: [Commit your changes](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/about-commits) with a descriptive message explaining what you modified.
1. **Push your changes**: [Push your committed changes](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository) to your forked repository on GitHub.
1. **Create a pull request**: On GitHub, navigate to your forked repository and [create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request). This sends a notification to the Entropy Docs team about your proposed changes.

### Review Process

1. **Receive review from the docs team**: The Entropy docs team will review your pull request and may ask questions or suggest edits.
2. **Respond to feedback**: Be prepared to discuss your changes and make adjustments based on the feedback provided.
3. **Your proposed changes are merged**: Once your pull request is approved, we will merge your changes into the `main` branch.

### Additional Tips

* **Small, focused changes**: [Break down larger contributions into smaller, more manageable pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/best-practices-for-pull-requests#write-small-prs). This makes the review process easier and faster.
* **Test your changes**: Test your changes to ensure they don't introduce any unintended consequences. In the simplest case, this just means to remember to [run your copy locally](#run-locally) to ensure your changes do what you intended.
* **Stay up-to-date**: Consider [configuring your GitHub notification settings to watch for any updates to this repository](https://docs.github.com/en/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository) or changes to the contribution guidelines.

We appreciate your help in making our documentation even better. By following these guidelines, you can ensure a smooth and successful contribution process.

## License

- Most things in `/docs` are licensed under [MIT](./LICENSE) unless otherwise specified.
- Docusaurus is _currently_ [MIT](https://github.com/facebook/docusaurus/blob/main/LICENSE) licensed. The maintainers of _this_ repository have no control on what license Facebook, and thus the Docusaurus team, apply to their code.
