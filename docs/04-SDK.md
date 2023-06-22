# Software Development Kit

- [Source code](https://github.com/entropyxyz/entropy-js)
- [API documentation](https://entropy-api-docs.vercel.app/entropy-js/index.html)

The SDK provides a way to interact with the Entropy network. It is written in Typescript.

The SDK is run by a user (for example as part of wallet software) to communicate with both Entropy chain nodes over websocket, and threshold servers over HTTP.

The SDK has multiple classes containing functionality for using the Entropy network. All classes can be spun up individually for power users, or for quick use an [`Entropy`](https://entropy-api-docs.vercel.app/entropy-js/classes/core.default.html) class bundles all of them together and creates more complex functions for making entropy network use easy.

## [`Entropy`](https://entropy-api-docs.vercel.app/entropy-js/classes/core.default.html) class

This can be created with the static method [`Entropy.setup`](https://entropy-api-docs.vercel.app/entropy-js/classes/core.default.html#setup).

It has the important methods [`register`](https://entropy-api-docs.vercel.app/entropy-js/classes/core.default.html#register), which allows a new user to register with the Entropy network, and [`sign`](https://entropy-api-docs.vercel.app/entropy-js/classes/core.default.html#sign) for submitting a transaction to be signed.

## [`Substrate`](https://entropy-api-docs.vercel.app/entropy-js/classes/substrate.Substrate.html) class

- This has functionality for interacting with the Entropy chain (which is built with substrate) over a websocket.
- It exposes an `api` object which allows more direct interaction the the Entropy chain (see [polkadot.js](https://polkadot.js.org/docs/) for documentation on that).
- `Substrate` inherits from the `SubstrateRead` class which gives read-only access to the chain and does not require a private key to instantiate.

## [`ThresholdServer`](https://entropy-api-docs.vercel.app/entropy-js/classes/threshold_server.ThresholdServer.html) class

Allows interaction with Entropy Threshold Servers over HTTP. This includes sending key-shares to be stored, and transactions to be collectively signed.

## [`crypto`](https://entropy-api-docs.vercel.app/entropy-js/classes/crypto.Crypto.html) class

Allows messages for the Threshold Servers to be encrypted and signed.

## [`constraints`](https://entropy-api-docs.vercel.app/entropy-js/modules/constraints.html) class

This extends the `Substrate` class to allow interaction with the constraints system.

Currently, an 'access control list' is implemented, for EVM compatible blockchains. A list of addresses can be given which are either allowed or blocked.

## Notable dependencies of the SDK

The underlying API for communication with the Entropy chain is [`@polkadot/api`](https://www.npmjs.com/package/@polkadot/api) which has its [own documentation](https://polkadot.js.org/docs/api).

Other notable dependencies of the SDK are [ethers](https://docs.ethers.org/v6/) for handling EVM transactions, and [`x25519-chacha20poly1305`](https://www.npmjs.com/package/x25519) for encrypting messages to the threshold servers. 


<!-- - Sign -->
<!--   - Sign takes in an EVM unsigned transaction sends it off to the chain then recovers the signed transaction from a node after the signing process is completed. -->
<!--   - The function only returns a signed tx so that should be handled and sent to chain by the client -->
<!--  -->
<!--   ```js -->
<!--   import { BigNumber, ethers } from "ethers"; -->
<!--  -->
<!--   const provider = ethers.getDefaultProvider(network) -->
<!--   const tx: ethers.utils.UnsignedTransaction = { -->
<!--     to: "0x772b9a9e8aa1c9db861c6611a82d251db4fac990", -->
<!--     value: BigNumber.from("1"), -->
<!--     chainId: 1, -->
<!--     nonce: 1, -->
<!--     data: ethers.utils.hexlify(ethers.utils.toUtf8Bytes("Created On Entropy")), -->
<!--   }; -->
<!--  -->
<!--   const result = await entropy.sign(tx, 10); -->
<!--  -->
<!--   // take sig return and use ethers to serialize the tx and signature -->
<!--   const signed_tx = await ethers.utils.serializeTransaction(tx, signature); -->
<!--  -->
<!--    // send tx off to ethereum -->
<!--    try { -->
<!--     const tx_send = await provider.sendTransaction(signed_tx); -->
<!--     console.log("transaction sent successfully", { tx_send }); -->
<!--   } catch (e: any) { -->
<!--     console.log({ failedTransaction: e.transaction, e }); -->
<!--   } -->
<!--   ``` -->

<!-- `Entropy.sign` -->
<!-- Takes: -->
<!-- - An unsigned EVM transaction - support for other message formats will be added later.  -->
<!-- - Flag whether to use the freeTx pallet -->
<!-- - Number of times to poll whether signing is complete - currently no direct communication with validators -->
<!-- - Internally this calls `Entropy.thresholdServer.submitTransactionRequest` which takes an array of encrypted transactions together with urls of respective threshold servers, so that constraints can be checked before the nodes participate in signing. -->
