# Command-line interface

The command-line interface (CLI) is a straightforward way to experiment with the Entropy network and explore common workflows. 

In its current state, the CLI acts more like a text-based user interface (TUI). In the future, all functions will be callable directly from your terminal prompt using arguments and modifiers. For the time being, you can use this CLI to experiment and play around with the Entropy network.

## Install

Follow these steps to manually install the CLI.

:::tip One-line install
Already know what you're doing and just want to get the CLI going? Run this one-liner to install the CLI's dependencies, clone the repository, build the project, and run the interface:

```plaintext
# Debian/Ubuntu
sudo apt update -y && sudo apt install nodejs npm -y && npm install -g yarn && git clone https://github.com/entropyxyz/cli && cd cli && yarn && yarn
```

```plaintext
# MacOS
brew update && brew install node && source ~/.zshrc && npm install -g yarn && git clone https://github.com/entropyxyz/cli && cd cli && yarn && yarn
```

If you're new to the CLI or just want to see what each command outputs, follow the rest of this guide.
:::

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

```output
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

### Manage Accounts

Create a new Entropy account to store locally. List all Entropy accounts stored locally. Import an account into the CLI using a seed.

```output
> Create/Import Account
  Select Account
  List Accounts
```

#### Create or Import Account

Create a new Entropy account or import an existing account using a seed.

#### Select Account

Select an account to use within other functions. This is relevant if you have multiple accounts.

For example, assume you have three accounts, and you want to check the balance of `account 2`. You would:

1. Start the CLI.
1. Navigate to **Manage Accounts**.
1. Navigate to **Select Account**.
1. Choose the account that you would like to select and use within other functions:

    ```output
    ? Choose account: (Use arrow keys)
    > Gael (5CrFp9txcb5UECpNKsD6DTBsG4cj1z58DA43YikSVeeJqXJR)
      Argo (5Dcps2RdXPQfiJBxxDnrF8iDzDHcnZC8rb5mcJ3xicqzhYbv)
      Lapp (5G92hBs4UfZpVFYtBmmN3UqPTzGgotq7PSA3XfBMALfvWDUb)
    ```

1. The account you select is what the CLI will use when running other functions.

#### List Accounts

Show all the locally stored accounts. This function shows secret details such as `seed` in plaintext.

### Balance

Get the balance of an account. You can select any of the accounts stored locally or enter an Entropy address.

```output
? Select Action Balance
Address 5Dcps2RdXPQfiJBxxDnrF8iDzDHcnZC8rb5mcJ3xicqzhYbv has a balance of: 382000000000000 bits
? Return to main menu? (Y/n)
```

### Register

Register a locally stored account with the Entropy network.

```output
Attempting to register the address: 5Dcps2RdXPQfiJBxxDnrF8iDzDHcnZC8rb5mcJ3xicqzhYbv
Your address 5Dcps2RdXPQfiJBxxDnrF8iDzDHcnZC8rb5mcJ3xicqzhYbv has been successfully registered.
```

The selected account must have available funds. Each registration costs about `400000000` bits.

### Transfer

Transfer funds from a locally stored account to any other valid Entropy address.

```output
? Select Action Transfer
? Input amount to transfer: 12345
? Input recipient's address: 5G92hBs4UfZpVFYtBmmN3UqPTzGgotq7PSA3XfBMALfvWDUb
Transferring Funds |++++___________________| 22%
```

The `amount to transfer` value is in whole units, not bits. So transferring `1` would equal `10000000000` bits.

### Sign

Sign a message using a registered account.

```output
? Choose account: (Use arrow keys)

  aragon (5FTwtSAjnKFybzkAKvyEo7owikXcHXmwzN7MzjwDNKEbjkub)
> charlie (5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT)
  Other
```

## In Development

The following functions are currently in development and may not currently work as intended.

### Deploy Program

Deploy a program from a locally stored account.

```output
? Select Action Deploy Program
? Select your action: (Use arrow keys)
> Deploy
  Get Program Pointers

  Exit
```

### User Programs

View all programs deployed to the network from locally stored accounts.

```output
? Select Action User Programs
? What would you like to do? (Use arrow keys)
> View My Programs
  Add a Program to My List
  Remove a Program from My List
  Check if Program Exists
  Exit to Main Menu
```

## Troubleshooting

Here are some common problems you could encounter and how to get around them.

#### How do I quit the CLI?

Press `CTRL` + `c` at any point to exit the CLI program, even if you're within a function:

```output
? Select Action Transfer
? Input amount to transfer: 1000
? Input recipient's address:        <----- Pressed `CTRL` + `c` here.
error Command failed with exit code 130.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
user@computer: $
```

#### ERR::: RpcError: 1010: Invalid Transaction: Inability to pay some fees , e.g. account balance too low

This likely means that you don't have enough funds in the selected account to complete that function. Double-check that you've selected the correct account and that the account has enough funds in it. If you need more test funds, [head over to the faucet for more](../guides/get-funds.md).

#### CLI crashes when registering

You may encounter the following error when registering:

```output
2024-06-05 00:11:42        REGISTRY: Unknown signed extensions ValidateConfirmRegistered found, treating them as no-effect
2024-06-05 00:11:42        API/INIT: RPC methods not decorated: chainSpec_v1_chainName, chainSpec_v1_genesisHash, chainSpec_v1_properties
Attempting to register the address: 5Dcps2RdXPQfiJBxxDnrF8iDzDHcnZC8rb5mcJ3xicqzhYbv
/root/cli/src/config/index.ts:21
  return JSON.parse(configBuffer.toString())
              ^
SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at Object.get (/root/cli/src/config/index.ts:21:15)

    at async EventEmitter.<anonymous> (/root/cli/src/common/initializeEntropy.ts:102:23)
```

This is a bug that the Entropy team are aware of, and are working on a fix. In the meantime, restart the CLI and try to register that account again. If it keep failing, please raise an issue in the [Entropy CLI repository](https://github.com/entropyxyz/cli/issues).
