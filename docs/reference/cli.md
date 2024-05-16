# Command-line interface

The command-line interface (CLI) is a straight-forward way to experiment with the Entropy network and explore common workflows. 

## Beta

In it's current state, the CLI acts more like a text-based user interface (TUI). In the future, all functions will be callable directly from your terminal prompt using arguments and modifiers. For the timebeing, you can use this CLI to experiment and play around with the Entropy network.

## Install

1. Make sure you've got Yarn 1.22.X installed:

    ```
    # MacOS
    brew install yarn
    ```

    ```shell
    # Debian/Ubuntu
    sudo apt install yarn -y
    ```

    ```shell
    # Arch
    sudo pacman -S yarn
    ```

1. Clone the Entropy CLI repository and move into the new directory:

    ```shell
    git clone https://github.com/entropyxyz/cli && cd cli
    ```

1. Build the CLI with Yarn:

    ```shell
    yarn
    ```

1. Start the CLI:

    ```shell
    yarn start
    ```

You should now see the main menu:

```plaintext
? Select Action (Use arrow keys)

> Balance
  Deploy Program
  User Programs
  Register
  Construct an Ethereum Tx
  Sign
  Transfer
  Give Zaps
  Wallet
  Exit
```

## Functions

The following functions are available in the CLI.

### Balance

Get the balance of an account. You can select any of the accounts stored locally, or enter an Entropy address.

```plaintext
? Choose account: (Use arrow keys)

  aragon (5FTwtSAjnKFybzkAKvyEo7owikXcHXmwzN7MzjwDNKEbjkub)
> charlie (5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT)
  Other
```

### Deploy Program

Deploy a program from a locally stored account.

```plaintext
? Choose account: (Use arrow keys)

> aragon (5FTwtSAjnKFybzkAKvyEo7owikXcHXmwzN7MzjwDNKEbjkub)
  charlie (5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT)
  Other
```

### User Programs

View all programs deployed to the network from locally stored accounts.

### Register

Register a locally stored account.

### Construct an Ethereum Tx

Create a transaction to run on an Ethereum network. This function does not publish the transaction.

### Sign

Sign a message using a registered account.

### Transfer

Transfer funds from a locally stored account to any other valid Entropy address.

### Wallet

Create a new Entropy address to store locally. List all Entropy addresses stored locally.

## Troubleshooting

Here are some common problems you could encounter, and how to get around them.