---
title: "Programs"
lead: "The purpose of an Entropy program is to determine whether a group of nodes should generate a signature or not. Developers can create and deploy programs, but validator nodes are the only agents that will directly interact with the programs once deployed. Programs do not return any data other than a success or failed response."
---

## Features and details

More concretely, they are WebAssembly components that implement an Entropy-specific interface. The only function a user must manually implement is `evaluate`, which takes the user's signature request as input and returns it as successful or an error. If no error is returned, then the message in the signature request will be signed using the program's corresponding key pair with the specified hashing algorithm.

### Custom Hashing

As ECDSA schemes sign 256-bit numbers, programs can include a `custom_hash` function so users can utilize less common hashing functions. In its simplest form, the function converts a signature request (which also contains the message) into a 256-bit number.

An example of a custom hash implementation is available in the [entropyxyz/programs repository](https://github.com/entropyxyz/programs/tree/master/examples/custom-hash).

The list of natively supported hashing algorithms can be found within the [entropyxyz/entropy-core repository](https://github.com/entropyxyz/entropy-core/blob/master/crates/shared/src/types.rs#L101).

### Program Configs

Programs can include a configuration, which allows users to modify the `evaluation` behavior without having to recompile and upload a new program to the chain. The format of this is undefined, allowing a configuration to be defined as a serialized C-compatible struct, UTF-8 JSON string, or anything in between.

An example of a program that uses a config can be found within the [entropyxyz/programs repository](https://github.com/entropyxyz/programs/blob/master/examples/basic-transaction/src/lib.rs#L18). In this example; the user specifies an allow-list of Ethereum recipients using a JSON string config.

### Auxiliary Data

Programs can require users to include auxiliary data, separate from the message, in their signature request. An example of a program that requires a zero-knowledge proof as auxiliary data can be found within the [entropyxyz/programs repository](https://github.com/entropyxyz/programs/blob/master/examples/risczero-zkvm-verification/src/lib.rs#L24).

## Upload Programs

Programs are written and compiled to WASM using the [entropyxyz/programs repository](https://github.com/entropyxyz/programs).

The workflow is as follows:

1. A program owner calls `set_program` in the program pallet with
    - the program bytecode
    - the configuration interface which is a seralized json object that allows a user to know the configuration of the program then set their own indiviudualized configuration in programsData
    - The signing key signs the tx and becomes the deployer key
    - A ref counter gets set to 0 when uploading and is used to track how many users are using a program
1. A program then gets stored in the Programs storage slot with the key being `H(bytecode + configuration_interface)`. The hash is used by a user to point to the programs they want applied to their key, everytime a program is referenced the ref counter increments
1. Since the key is a hash there is no editing programs (since that would change the hash)
1. Programs can be removed if the ref count is zero by the deploy key
