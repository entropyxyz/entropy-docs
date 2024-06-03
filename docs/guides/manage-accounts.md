---
title: "Manage accounts"
draft: true
---

By the end of this guide you will have created a new account on Entropy using the CLI.

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

1. Enter a name for your account.
1. Type `y` and press `ENTER` when asked _Would you like to password protect this key?_:

    ```output
    ? Would you like to password protect this key? y
    ```

    This password is used to encrypt your account locally. If you forget this password, you won't be able to access this account.

1. Once you've entered your password, the CLI will output some information about your new account:

    ```output
    New account:
    {
            name: MyFirstKey
            address: 5HMnksPMRPqsDqyCj31VoQFgpiswsr12bk2YTyfMUEKCm2bv
            type: seed
    }
    ```

1. Type `Y` and press `ENTER` to go back to the main menu.

## Import an account

You can import an account by using either the `seed` for the account, or it's `mnemonic`.

1. Start the CLI by running `yarn start` within your local copy of the `entropyxyz/cli` repository.
1. Select **Manage Accounts**.
1. Select **New**.
1. Type `y` and press `ENTER` when asked _Would you like to import a key?_:

    ```output
    ? Would you like to import a key? y
    ```

1. Enter your seed.
1. If you specificed a `path` when originally created the account you want to import, enter it when prompted:

    ```output
    path: ____
    ```

1. Enter a name for the account you want to import.
1. Type `y` and press `ENTER` when asked _Would you like to password protect this key?_:

    ```output
    ? Would you like to password protect this key? y
    ```

    This password is used to encrypt your account locally. If you forget this password, you won't be able to access this account.

1. Once you've entered your password, the CLI will output some information about your new account:

    ```output
    New account:
    {
            name: MyImportedKey
            address: 5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y
            type: seed
    }
    ```

1. Type `Y` and press `ENTER` to go back to the main menu.
