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

We appreciate contributions of any size from everyone, from fixing typos to proposing substantial rewrites to aid clarity. Simply make a PR with your edits, and a member of the Entropy devrel team will review everything.

## License

- Most things in `/content` are licensed under [MIT](./LICENSE) unless otherwise specified.
- The theme for this site is modified version of [Imfing's Hextra theme](https://github.com/imfing/hextra) used under the [MIT license](https://github.com/imfing/hextra/blob/e3b582676e5db64078053db99e3636e5b6311874/LICENSE).
- Hugo is _currently_ licensed under the [Apache 2.0 License](https://github.com/gohugoio/hugo/blob/439f07eac4706eb11fcaea259f04b3a4e4493fa1/LICENSE). The maintainers of _this_ repository have no control over what license the Hugo team apply to their code.
