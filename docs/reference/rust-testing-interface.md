---
title: "Rust Testing Inteface"
---

The Rust testing interface (RTI) is a simple way to perform some actions on the Entropy network directly from the command-line. The RTI is intended for testing [Entropy Core](https://github.com/entropyxyz/entropy-core) functionality, and wasn't designed for end-user or production use.

The RTI has no secure private key storage and is only intended for use with test networks. If you're looking for a fully featured interface, [use the CLI](./cli.md).

## Prerequisites

To run the RTI you will need the following packages installed:

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
| `ENTROPY-MNEMONIC` | The mnemonic of the account that you'd like to use when interacting with the RTI. | `ENTROPY_MNEMONIC='choice square dance because into glance hazard return cram host snap deer'` |
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

```output
Verifying key:                                                   Visibility:  Programs:
02253a6308e78bd657ff575753214e68365cd30193319929acaece162ccb46ed54 Public       ["0x1bb4…df10"]
033abd94b1fd9d91afa32a1549d139ebb7893941b170ec8c668449e97dc68058ed Public       ["0x0000…0000"]
02f23fca0eb0e898462ea677199feafa7c3669a3b805095433d9feba8bb196f19c Public       ["0xffb6…d66c"]
03e1dc804f87a35aacae761cf603b395d588193054e7f91d6ae5de1293196311ec Public       ["0x0000…0000"]
0280595beab23c3cb640674416e1ede5a77101d5c850b7ac6a52ace8189f4abcc3 Public       ["0x0000…0000"]

There are 3 stored programs

Hash        Stored by:                                       Times used: Size in bytes: Configurable? Has auxiliary?
0x1bb4…df10 5HZ151yLivMZWzNSkn5TeSrCHXnmxTFRKW11yudkuLPGdNvr           1          20971 false         false
0xffb6…d66c 5CtViLgvdHoLDvdsSsfEPxczsF6D7FtQ59h6B4Gey5EXE47t           1         769174 false         false
0x0000…0000 5GELKrs47yAx2RFihHKbaFUTLKhSdMR3yXGFdBCRHWuZaoJr          13         300498 true          true
Success: Got status
That took 1.161501375s
```

### Sign

Ask the network to sign a given message.

#### Usage

```output
entropy-test-cli sign <SIGNATURE_VERIFYING_KEY> <MESSAGE> [AUXILARY_DATA]
```

### Store program

Store a given program on chain.

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
