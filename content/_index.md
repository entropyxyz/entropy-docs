---
cascade:
  type: docs
toc: false
---

{{< hextra/hero-headline >}}
Entropy Docs
{{< /hextra/hero-headline >}}

{{< hextra/hero-subtitle>}}
Explore our guides and examples to integrate Entropy into your project.
{{< /hextra/hero-headline >}}

![](./images/index-main-banner.png)

{{< cards >}}

<!--Images referenced here can be found in /static/images/.-->

    {{< card 
        link="./basics/quickstart" 
        title="Get started" 
        image="./images/index-quickstart.png" 
        subtitle="Understand the basics of Entropy with the Quickstart guide." 
    >}}

    {{< card 
        link="./basics/entrosplainer" 
        title="Core concepts" 
        image="./images/index-core-concepts.png" 
        subtitle="Learn about the core concepts of Entropy with the Entrosplainer." 
    >}}

    {{< card 
        link="./reference" 
        title="Reference" 
        image="./images/index-reference.png" 
        subtitle="Dive right into the codebase with the reference docs." 
    >}}

{{< /cards >}}

## Install the CLI

The Entropy command-line interface (CLI) is the fastest way to interact with the Entropy network. You can find out more by heading over to the [CLI reference section](./reference/cli.md).

{{< tabs items="Debian/Ubuntu, MacOS, Build from source" >}}

    {{< tab >}}
    ```shell
    sudo apt update -y 
    sudo apt install nodejs npm -y
    npm install -g yarn 
    git clone https://github.com/entropyxyz/cli 
    cd cli 
    yarn 
    yarn start
    ```
    {{< /tab >}}

    {{< tab >}}
    ```shell
    brew update 
    brew install node 
    source ~/.zshrc 
    npm install -g yarn 
    git clone https://github.com/entropyxyz/cli 
    cd cli 
    yarn 
    yarn start
    ```
    {{< /tab >}}

    {{< tab >}}
    ```shell
    git clone https://github.com/entropyxyz/cli
    cd cli
    make install
    ```
    {{< /tab >}}

{{< /tabs >}}

## Need help?

Are you stuck with something and aren't sure what to do? Head over to the [Entropy Community repo](https://github.com/entropyxyz/community) for support. You can also check out the [Entropy Discord](https://discord.com/invite/9JUQwHBhVz) if you want to chat to the community!
