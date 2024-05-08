---
sidebar_position: 60
---

# Overview of Programs

Programs are the agents that decide what signing requests get signed. More concretely, they are [WebAssembly components][components] that implement an Entropy-specific [interface][wit-interface]. The only function a user must manually implement is `evaluate`, which takes the user's signature request as input and returns as successful or an error. If no error is returned, then the message in the signature request will be signed using the program's corrosponding keypair with the specified hashing algorithm.

## Custom Hashing

As ECDSA schemes sign 256-bit numbers, programs can include a `custom_hash` function so users can utilize less common hashing functions. In its simplest form, the function converts a signature request (which also contains the message) into a 256-bit number.

An example of a custom hash implementation can be found [here][custom-hash-example].

The list of supported natively-supported hashing algorithms can be found [here][native-hashing-algorithms].

## Program Configs

Programs can include a configuration, or config, which allow users to modify the `evaluation` behavior without having to recompile and upload a new program to the chain. The format of this is undefined, allowing for a config to be defined as a serialized C-compatible struct, UTF-8 JSON string, or anything in between.

An example of a program that uses a config can be found [here][config-example]. In this example, the user specifies an allow-list of Ethereum recipients via a JSON string config.

## Auxiliary Data

Programs can require users to include auxiliary data, separate from the message, in their signature request.

An example of a program that requires a zero-knowledge proof as auxiliary data can be found [here][zkp-example].

## Future Updates

Just like [WASI], additional runtime functions and features (eg. oracles) will be added via [WITs][wit]. The user will import them via [entropy-programs-core] and the newly compiled program will be able to interact with the new Wasm runtime functions. Any additional features will be implemented following the existing [WASI proposals] or new WITs will be defined.

[components]: https://github.com/WebAssembly/component-model
[wit]: https://github.com/WebAssembly/component-model/blob/main/design/mvp/WIT.md
[entropy-programs-core]: https://github.com/entropyxyz/programs/tree/main/core
[custom-hash-example]: https://github.com/entropyxyz/programs/tree/master/examples/custom-hash
[config-example]: https://github.com/entropyxyz/programs/blob/master/examples/basic-transaction/src/lib.rs#L18
[zkp-example]: https://github.com/entropyxyz/programs/blob/master/examples/risczero-zkvm-verification/src/lib.rs#L24
[native-hashing-algorithms]: https://github.com/entropyxyz/entropy-core/blob/master/crates/shared/src/types.rs#L101
[wit-interface]: https://github.com/entropyxyz/programs/blob/master/wit/application.wit
[WASI]: https://wasi.dev/
[WASI proposals]: https://github.com/WebAssembly/WASI/blob/main/Proposals.md
