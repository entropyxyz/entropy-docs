---
title: "Programs"
lead: "The purpose of an Entropy program is to determine whether a group of nodes should generate a signature or not. Developers can create and deploy programs, but validator nodes are the only agents that will directly interact with the programs once deployed. Programs do not return any data other than a _success_ or _failed_ response."
---

# Questions:
#     - Is there a size limit for programs?
#     - What can I call?
#     - Can I call other chains or things external to the program.
#     - Can I call other programs?
#     - Can I get randomness within a program?

## Features and Details

In more concrete terms, Entropy programs are WebAssembly components that implement an Entropy-specific interface. The only function that a user must manually implement is `evaluate`, which takes the user's signature request as input and returns a success or an error. If no error is returned, then the message in the signature request will be signed using the program's corresponding key pair with the specified hashing algorithm.

### Custom Hashing

As ECDSA schemes sign 256-bit numbers, programs can include a `custom_hash` function so users can utilize less common hashing functions. In its simplest form, the function converts a signature request (which also contains the message) into a 256-bit number.

An example of a custom hash implementation is available in the [entropyxyz/programs repository](https://github.com/entropyxyz/programs/).

The list of natively supported hashing algorithms can be found within the [entropyxyz/entropy-core](https://github.com/entropyxyz/entropy-core/blob/master/crates/shared/src/types.rs#L101) repository.

### Program Configs

Programs can include a configuration, which allows users to modify the `evaluation` behavior without having to recompile and upload a new program to the chain. The format of this is undefined, allowing a configuration to be defined as a serialized C-compatible struct, UTF-8 JSON string, or anything in between.

An example of a program that uses a config can be found within the entropyxyz/programs repository. In this example, the user specifies an allow-list of Ethereum recipients using a JSON string config.

### Auxiliary Data

Programs can require users to include auxiliary data, separate from the message, in their signature request. An example of a program that requires a zero-knowledge proof as auxiliary data can be found within the entropyxyz/programs repository.

## Upload Programs

Programs are written and compiled to WASM using the [entropyxyz/programs repository](https://github.com/entropyxyz/programs).

The workflow is as follows:

1. A program owner calls `set_program` in the program pallet with:
    - the program bytecode
    - the configuration interface, which is a serialized JSON object that allows a user to know the configuration of the program and then set their own individualized configuration in programsData
    - The signing key signs the transaction and becomes the deployer key
    - A reference counter gets set to 0 when uploading and is used to track how many users are using a program
2. A program then gets stored in the Programs storage slot with the key being `H(bytecode + configuration_interface)`. The hash is used by a user to point to the programs they want applied to their key. Every time a program is referenced, the reference counter increments
3. Since the key is a hash, there is no editing programs (since that would change the hash)
4. Programs can be removed if the ref count is zero by the deploy key

## Device-proxy

The device-proxy program is an Entropy program available at `0000000000000000000000000000000000000000000000000000000000000000`. It's main functionality is to:

1. Verify signatures based on the provided configuration and auxiliary data.
1. Check if a given public key is in the allowed set of keys (from the provided config).
1. Verify the generated signature against the provided message.
