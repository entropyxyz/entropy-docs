---
title: "Register an address"
---

Registering an account is a feature unique to Entropy. Without going into too much detail, it advertises to the network that you own _this_ account and that you're ready to start signing things.

## CLI

1. Start the CLI by running `entropy`.
1. At the main menu within the CLI, select **Register**:

   ```output
   ? Select Action
     Manage Accounts
     Balance
   > Register
     Sign
     Transfer
     Deploy Program
     User Programs
     Exit
   ```

1. The CLI will send your selected account information to the network. As long as you have enough funds in your account, the network will register your account.

   ```output
   Attempting to register the address: 5Dcps2RdXPQfiJBxxDnrF8iDzDHcnZC8rb5mcJ3xicqzhYbv
   Your address 5Dcps2RdXPQfiJBxxDnrF8iDzDHcnZC8rb5mcJ3xicqzhYbv has been successfully registered.
   ```

1. Press `Y` to go back to the main menu.

## SDK

The feature is not currently available in the SDK.
