---
title: "Use the explorer"
---

A blockchain explorer is a web-based tool that functions like a search engine specifically designed for blockchain data. Blockchains, like Entropy, store information in public databases called ledgers. These ledgers are transparent, meaning anyone can view them. However, the data can be complex and challenging to understand without assistance. Blockchain explorers act as an interface, allowing users to quickly search, retrieve, and analyze information on the blockchain.

The [Polkadot\{.js\} Apps](https://polkadot.js.org/apps) is a user interface for interacting with Substrate blockchains. Since Entropy is built using Substrate, we can use this explorer to search and view chain data on the Entropy network.

## Prerequisites

- [Docker](https://docker.com)

## Run the explorer

1. Open a terminal window and run:

   ```shell
   docker run --rm -it --name polkadot-ui -e WS_URL=wss://testnet.entropy.xyz -p 80:80 jacogr/polkadot-js-apps:latest
   ```

   This command will start a background process.

1. Open a browser and go to `http://localhost`.

## Connect to the Entropy network

1. With the explorer running, select the **Unknown** dropdown at the top left:

   ![Front-page with dropdown highlighted.](./images/front-page.png)

1. In the sidebar, select the **Development** dropdown.
1. Within the **custom endpoint** field, enter the address for the network you want to connect to:

   ```plaintext
   # Testnet
   wss://testnet.entropy.xyz
   ```

1. Click the **Save** icon next to the address field.

   ![Front-page with a populated address field.](./images/enter-testnet-address.png)

1. The block explorer should start populating with details from the Entropy network:

   ![A functioning blockchain explorer window.](./images/functioning-block-explorer.png)

You should now be able to use the block explorer as usual. Check out the [wiki](https://wiki.polkadot.network/) for details on what information you can get from this blockchain explorer.
