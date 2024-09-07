---
title: "Rust Testing Interface"
lead: "The Rust testing interface (RTI) is a simple way to perform some actions on the Entropy network directly from the command line. It is intended for testing [Entropy Core](https://github.com/entropyxyz/entropy-core) functionality and wasn't designed for end-user or production use."
---

{{< callout type="warning" >}}
**No Secure Key Storage**: This CLI has no secure private key storage and is only intended for use with test networks. Do not use this interface in a production environment. If you want a fully featured interface, [check out the Entropy CLI]({{< relref "./command-line-interface.md" >}}).
{{< /callout >}}

## Installation

We've made installing this CLI straightforward by using Rust's Cargo crate manager.

### Prerequisites

To run this CLI, you need to:

1. Install the OpenSSL and `pkg-config` packages:

    {{< tabs items="Debian/Ubuntu, MacOS" >}}

        {{< tab >}}
        ```shell
        sudo apt install libssl-dev pkg-config
        ```
        {{< /tab >}}

        {{< tab >}}
        ```shell
        brew install openssl pkg-config
        ```
        {{< /tab >}}

    {{< /tabs >}}

1. Ensure that the latest stable release of Rust is installed:

    ```shell
    # Any Unix-based operating system:
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    ```

## Install the CLI

The easiest way to install this CLI is to use the pre-built crate through Cargo:

```shell
cargo install entropy-test-cli
```

```output
Updating crates.io index
Downloaded entropy-test-cli v0.1.0

...

Installed package `entropy-test-cli v0.1.0` (executable `entropy-test-cli`) 
```

### Environment variables

You can use the following environment variables to make using this CLI easier:

| Variable | Description | Example |
| -------- | ----------- | ------- |
| `ENTROPY_MNEMONIC` | The mnemonic of the account you'd like to use when interacting with this CLI. | `ENTROPY_MNEMONIC='choice square dance because into glance hazard return cram host snap deer'` |
| `ENTROPY_DEVNET` | The specific chain-endpoint you want to use when interacting with this CLI. | `ENTROPY_DEVNET='wss://testnet.entropy.xyz'` |

## Usage

You can use this CLI to register an account with the network, display a list of registered accounts, ask the network to sign a message, store a program on the network, and update a program that you stored on the network.

### Register

Register an account with the Entropy network and create keyshares.

#### Usage

```output
entropy-test-cli register <MNEMONIC> [KEY_VISIBILITY] [PROGRAMS]
```

#### Example

```shell
entropy-test-cli --chain-endpoint="wss://testnet.entropy.xyz" register "image point raccoon steak champion clown adult until hamster sun army year"
```

### Status

Display a list of registered Entropy accounts.

#### Usage

```output
entropy-test-cli status
```

#### Example

```shell
entropy-test-cli --chain-endpoint="wss://testnet.entropy.xyz" status
```

### Sign

Ask the network to sign a given message.

#### Usage

```output
entropy-test-cli sign <SIGNATURE_VERIFYING_KEY> <MESSAGE> [AUXILARY_DATA]
```

#### Example

```output
entropy-test-cli --chain-endpoint="wss://testnet.entropy.xyz" sign "0x1ca639d1cae8ea4e4bd37f972999e0e140866614b621bc09950ceb469b987e27" "Good morning."
```

### Store program

Store a given program on-chain.

#### Usage

```output
entropy-test-cli store-program <MNEMONIC> [PROGRAM_FILE] [CONFIG_INTERFACE_FILE] [AUX_DATA_INTERFACE_FILE]
```

#### Example

```shell
entropy-test-cli --chain-endpoint="wss://testnet.entropy.xyz" store-program "image point raccoon steak champion clown adult until hamster sun army year" ./program.wasm ./interface-file.config ./aux-data.config
```

### Update programs

Update the program for a particular account.

#### Usage

```output
entropy-test-cli update-programs <SIGNATURE_VERIFYING_KEY> <MNEMONIC> [PROGRAMS]
```

#### Example

```shell
entropy-test-cli --chain-endpoint="wss://testnet.entropy.xyz" update-programs "0x1ca639d1cae8ea4e4bd37f972999e0e140866614b621bc09950ceb469b987e27" "image point raccoon steak champion clown adult until hamster sun army year" ./programs
```
