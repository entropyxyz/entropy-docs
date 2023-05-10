---
sidebar_position: 1
---

# Intro

Documentation for Entropy's Software Development Kit

- [Source code](https://github.com/entropyxyz/entropy-js).
- [API documentation](https://entropy-api-docs.vercel.app/entropy-js/index.html)

The SDK is run by a user (for example as part of wallet software) to communicate with both an Entropy chain node over websocket, and threshold servers over HTTP.

Entropy's SDK is based off multiple classes containing functionality for using the Entropy network. All classes can be spun up individually for power users, or for quick use an [`Entropy`](./Core) class bundles all of them together and creates more complex functions for making entropy network use easy.

The underlying API for communication with the Entropy chain is [`@polkadot/api`](https://www.npmjs.com/package/@polkadot/api) which has its [own documentation](https://polkadot.js.org/docs/api).

Other notable dependencies of the SDK are [ethers](https://docs.ethers.org/v6/) for handling EVM transactions, and [`x25519-chacha20poly1305`](https://www.npmjs.com/package/x25519) for encrypting messages to the threshold servers. 
