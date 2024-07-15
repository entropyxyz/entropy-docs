<h1 align="center">Entropy Docs</h1>
<p align="center">
    <strong>This repository contains the documentation for the Entropy project (found in <code>/content</code>) and all the build scripts to create the <a href="https://docs.entropy.xyz">docs.entropy.xyz</a> site.</strong>
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

This repository uses the Hugo static-site-generator to build `docs.entropy.xyz`. To run the site locally:

1. Install [Hugo](https://gohugo.io/installation/).
1. Clone this repository and move into the new directory:

   ```shell
   git clone https://github.com/entropyxyz/entropy-docs
   cd entropy-docs
   ```

1. Build and serve the site locally using Hugo:

    ```shell
    hugo server
    ```

1. Go to [localhost:1313](http://localhost:1313) in your browser.
1. To stop the local server, press `CTRL` + `c` in the terminal window.

## Build the site

To _build_ the site but not serve it, run steps `1` and `2` from the previous section, followed by `hugo`: 

```shell
git clone https://github.com/entropyxyz/entropy-docs
cd entropy-docs
hugo
```

This create a new directory called `public` and save the site in there.

## Information architecture

Documentation within this repository can be found in the `/docs` directory. That directory is split into the following subdirectories:

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

## Support

All support tickets are handled in the **Discussion** tab of the [github.com/entropyxyz/community repository](https://github.com/entropyxyz/community).

### Submitting a ticket

To submit a support ticket:

1. Head to the **Discussion** tab of the [github.com/entropyxyz/community repository](https://github.com/entropyxyz/community).
1. Select **New discusison**.
1. Next to *Support** click **Get started**.
1. Someone from Entropy will reach out to you within that thread for more details.

### Discord

**We do not use Discord for support tickets.** If you receive a message about a support ticket from someone claiming to be from Entropy, this is likely a scam. All support tickets are handled publically through GitHub.

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

- Most things in `/content` are licensed under [MIT](./LICENSE) unless otherwise specified.
- The theme for this site is modified version of [Imfing's Hextra theme](https://github.com/imfing/hextra) used under the [MIT license](https://github.com/imfing/hextra/blob/e3b582676e5db64078053db99e3636e5b6311874/LICENSE).
- Hugo is _currently_ licensed under the [Apache 2.0 License](https://github.com/gohugoio/hugo/blob/439f07eac4706eb11fcaea259f04b3a4e4493fa1/LICENSE). The maintainers of _this_ repository have no control over what license the Hugo team apply to their code.
