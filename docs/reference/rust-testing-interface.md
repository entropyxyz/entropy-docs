---
title: "Rust Testing Interface"
---

The Rust testing interface (RTI) is a simple way to perform some actions on the Entropy network directly from the command line. It is intended for testing [Entropy Core](https://github.com/entropyxyz/entropy-core) functionality and wasn't designed for end-user or production use.

The RTI has no secure private key storage and is only intended for use with test networks. If you want a fully featured interface, [use the CLI](./cli.md).

## Prerequisites

To run the RTI, you will need the following packages installed:

1. OpenSSL:

    ```shell
    # Debian/Ubuntu
    sudo apt install libssl-dev
    ```

    ```shell
    # MacOS
    brew install openssl 
    ```
    
2. The `pkg-config` tool:

    ```shell
    # Debian/Ubuntu
    sudo apt install pkg-config
    ```

    ```shell
    # MacOS
    brew install pkg-config
    ```

3. Rust:

    ```shell
    # Any Unix-based operating system:
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    ```

## Installation

The easiest way to install the RTI is to use the pre-build crate through Cargo:

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

You can use the following environment variables to make using the RTI easier:

| Variable | Description | Example |
| -------- | ----------- | ------- |
| `ENTROPY-MNEMONIC` | The mnemonic of the account you'd like to use when interacting with the RTI. | `ENTROPY_MNEMONIC='choice square dance because into glance hazard return cram host snap deer'` |
| `ENTROPY_DEVNET` | The specific chain-endpoint you want to use when interacting with the RTI. | `ENTROPY_DEVNET='ws://testnet.entropy.xyz:9944'` |

## Usage

### Register

Register an account with the Entropy network and create keyshares.

#### Usage

```output
entropy-test-cli register <MNEMONIC> [KEY_VISIBILITY] [PROGRAMS]
```

#### Example

```shell
entropy-test-cli --chain-endpoint="ws://testnet.entropy.xyz:9944" register "image point raccoon steak champion clown adult until hamster sun army year"
```

### Status

Display a list of registered Entropy accounts.

#### Usage

```output
entropy-test-cli status
```

#### Example

```shell
entropy-test-cli --chain-endpoint="ws://testnet.entropy.xyz:9944" status
```

### Sign

Ask the network to sign a given message.

#### Usage

```output
entropy-test-cli sign <SIGNATURE_VERIFYING_KEY> <MESSAGE> [AUXILARY_DATA]
```

#### Example

```output
entropy-test-cli sign 0x1ca639d1cae8ea4e4bd37f972999e0e140866614b621bc09950ceb469b987e27 "Good morning."
```

### Store program

Store a given program on-chain.

#### Usage

```output
entropy-test-cli store-program <MNEMONIC> [PROGRAM_FILE] [CONFIG_INTERFACE_FILE] [AUX_DATA_INTERFACE_FILE]
```

### Update programs

Update the program for a particular account.

#### Usage

```output
entropy-test-cli update-programs <SIGNATURE_VERIFYING_KEY> <MNEMONIC> [PROGRAMS]
```
