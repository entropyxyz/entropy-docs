---
title: "Manage accounts"
---

This guide covers how to create a new Entropy account or import an existing account in the Entropy CLI.

## Prerequisites

You need to have the Entropy CLI installed. [Take a look at the CLI page for details on how to install the CLI](../reference/cli.md).

## Create an account

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

## Import an account

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
