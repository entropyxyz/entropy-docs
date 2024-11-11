---
title: "Register an address"
lead: "Registering an account is a feature unique to Entropy. Without going into too much detail, it advertises to the network that you own _this_ account and that you're ready to start signing things."
---

## Interactive CLI

Here is the process for registering an address using the Entropy CLI's interactive text-based user interface (TUI).

1. Start the CLI by running `entropy tui`.
1. Select **Register**:

    ```output
    ? Select Action (Use arrow keys)
     Manage Accounts
     Entropy Faucet
     Balance
    ❯ Register
     Sign
     Transfer
     Deploy Program
     User Programs
     Exit
    ```

1. The CLI will send your selected account information to the network. As long as you have enough funds, the network will register your account.

    ```output
    Attempting to register the address: 5EFDfxft4oZYvjj35TWttFkkKZSHUDVnBRmp3eMQQcpt9zku
    Your address 5EFDfxft4oZYvjj35TWttFkkKZSHUDVnBRmp3eMQQcpt9zku has been successfully registered.
    ```

1. Press `Y` to go back to the main menu.

You can check that your account is registered by navigating to **Manage Accounts** and selecting **List Accounts**. Accounts that have been registered will have `verifyingKeys`:

```output
{
  "name": "Andre",
  "address": "5F3xmKa3WRkoHR4o6XjFQaWF2EskhtSh4ST5wY5cfsD9JYbC",
  "verifyingKeys": []
}
{
  "name": "Yoel",
  "address": "5EFDfxft4oZYvjj35TWttFkkKZSHUDVnBRmp3eMQQcpt9zku",
  "verifyingKeys": [
    "0x03aee03ad9862e9f31d06f7d1b4b388ad1c66152ad17f919fc16fcc75929b08db3",
    "0x029d00ff44b70613228963e45a05fe743ea92beb8ece19d48fb6c60d66386fe03b"
  ]
}
```

In the above example, the `Yoel` key has been registered, while the `Andre` key has not.

## Programmatic CLI

You can use the `account register` commands to register an account. You must have created an account _before_ attempting to register it. The account must also have enough funds to request registration from the network. After a successful registration, the CLI will output the verifying key of the account:

```shell
entropy account register --account 'Yoel'
```

```output
0x029d00ff44b70613228963e45a05fe743ea92beb8ece19d48fb6c60d66386fe03b
```

See the [Command-line interface reference]({{<relref "command-line-interface">}}) section for more details on the `account register` commands.
