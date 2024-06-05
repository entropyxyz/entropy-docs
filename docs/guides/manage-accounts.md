---
title: "Manage accounts"
---

This page details some of the ways you can create and maintain your Entropy accounts.

## CLI

The CLI has a built-in account manager. This is useful for running quick, one-time transactions. The CLI account manager can also be helpful for testing purposes.

### Prerequisites

You need to have the Entropy CLI installed. [Take a look at the CLI page for details on how to install the CLI](../reference/cli.md).

### Create an account

1. Start the CLI by running `yarn start` within your local copy of the `entropyxyz/cli` repository.
1. Select **Manage Accounts**.
1. Select **New**.
1. Type `n` and press `ENTER` when asked _Would you like to import a key?_:

    ```output
    ? Would you like to import a key? n
    ```

1. Enter the name of your new account. The CLI will output some information about it:

    ```output
    New account:
    {
            name: Ludleth
            address: 5HMnksPMRPqsDqyCj31VoQFgpiswsr12bk2YTyfMUEKCm2bv
            type: seed
    }
    ```

1. Type `Y` and press `ENTER` to go back to the main menu.

### Import an account

You can import an account by the `seed` for the account. Most Substrate-based wallets allow you to export your account information.

1. Start the CLI by running `yarn start` within your local copy of the `entropyxyz/cli` repository.
1. Select **Manage Accounts**.
1. Select **New**.
1. Type `y` and press `ENTER` when asked _Would you like to import a key?_:

    ```output
    ? Would you like to import a key? y
    ```

1. Enter your seed.
1. If you specified a `path` when originally creating the account you want to import, enter it when prompted:

    ```output
    path: ____
    ```

1. Enter a name for the account you want to import. The CLI will output some information about your new account:

    ```output
    New account:
    {
            name: Hawkwood
            address: 5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y
            type: seed
    }
    ```

1. Type `Y` and press `ENTER` to go back to the main menu.

## Subkey

Subkey is a command line utility created by [Parity Technologies](https://www.parity.io/) and allows generating and restoring keys for Substrate-based chains, such as Entropy. It provides a few sub-commands to generate keys, check keys, sign messages, verify messages,

### Install Subkey

The easiest way to start using Subkey is to use the Docker image supplied by Parity. This method requires that you have Docker installed.

```shell
docker run -it --pull=always docker.io/parity/subkey:latest
```

This should output something like:

```plaintext
latest: Pulling from parity/subkey
Digest: sha256:ad9097c83147efde6c79fc913266961d813c1ed451270b72284c0cf80c2092b6
Status: Image is up to date for parity/subkey:latest
WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested
Utility for generating and restoring with Substrate keys

Usage: subkey <COMMAND>

Commands:
  generate-node-key  Generate a random node key, write it to a file or stdout and write the corresponding peer-id to stderr
  generate           Generate a random account
  inspect            Gets a public key and a SS58 address from the provided Secret URI
  inspect-node-key   Load a node key from a file or stdin and print the corresponding peer-id
  sign               Sign a message, with a given (secret) key
  vanity             Generate a seed that provides a vanity address
  verify             Verify a signature for a message, provided on STDIN, with a given (public or secret) key
  help               Print this message or the help of the given subcommand(s)

Options:
  -h, --help     Print help
  -V, --version  Print version
```

You are now ready to use Subkey.

:::note Install with Cargo
If you'd prefer to install Subkey using Rust's Cargo framework, check out the [official Subkey documentation](https://paritytech.github.io/polkadot-sdk/master/subkey/index.html)
:::

### Create an account

You can use the `generate` command against Subkey to generate a new account. Assuming you have the latest Subkey Docker image ready, run the following:

```shell
docker run -it --pull=always docker.io/parity/subkey:latest generate
```

This should output something like:

```plaintext
Secret phrase `hotel forest jar hover kite book view eight stuff angle legend defense` is account:
  Secret seed:      0xa05c75731970cc7868a2fb7cb577353cd5b31f62dccced92c441acd8fee0c92d
  Public key (hex): 0xfec70cfbf1977c6965b5af10a4534a6a35d548eb14580594d0bc543286892515
  Account ID:       0xfec70cfbf1977c6965b5af10a4534a6a35d548eb14580594d0bc543286892515
  SS58 Address:     5Hpm9fq3W3dQgwWpAwDS2ZHKAdnk86QRCu7iX4GnmDxycrte
```

You can use these credentials to interact with the Entropy network.
