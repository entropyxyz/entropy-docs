---
title: "Text-based UI"
lead: "Use the text-based user interface (TUI) to interact with the CLI tool."
aliases:
    - "cli"
weight: 20
---

```output
  @@@@@@@@@@ @@@@@@@@@@ @@@@@   @@@@@@@@@@@ @@@@@@@@@ @@@@@@@@@@ @@@@@ @@@@@
  @@@@@@@@@@ @@@@@@@@@@ @@@@@   @@@@@@@@@@@ @@@@@@@@@ @@@@@@@@@@ @@@@@ @@@@@
  @@@@@@@@@@ @@@@@@@@@@ @@@@@@@ @@@@@@@@@@@ @@@@@@@@@ @@@@@@@@@@ @@@@@ @@@@@
  @@@@@ @@@@ @@@@@ @@@@ @@@@@@@ @@@@@ @@@@@ @@@@ @@@@ @@@@@ @@@@ @@@@@ @@@@@
  @@@@@ @@@@ @@@@@ @@@@ @@@@@   @@@@@ @@@@@ @@@@ @@@@ @@@@@ @@@@ @@@@@ @@@@@
  @@@@@ @@@@ @@@@@ @@@@ @@@@@   @@@@@ @@@@@ @@@@ @@@@ @@@@@ @@@@ @@@@@ @@@@@
  @@@@@@@@@@ @@@@@ @@@@ @@@@@   @@@@@       @@@@ @@@@ @@@@@ @@@@ @@@@@ @@@@@
  @@@@@@@@@@ @@@@@ @@@@ @@@@@   @@@@@       @@@@ @@@@ @@@@@ @@@@ @@@@@ @@@@@
  @@@@@      @@@@@ @@@@ @@@@@   @@@@@       @@@@ @@@@ @@@@@ @@@@ @@@@@ @@@@@
  @@@@@ @@@@ @@@@@ @@@@ @@@@@   @@@@@       @@@@ @@@@ @@@@@ @@@@ @@@@@ @@@@@
  @@@@@ @@@@ @@@@@ @@@@ @@@@@   @@@@@       @@@@ @@@@ @@@@@ @@@@ @@@@@ @@@@@
  @@@@@ @@@@ @@@@@ @@@@ @@@@@   @@@@@       @@@@ @@@@ @@@@@ @@@@ @@@@@ @@@@@
  @@@@@@@@@@ @@@@@ @@@@ @@@@@@@ @@@@@       @@@@@@@@@ @@@@@@@@@@ @@@@@@@@@@@
  @@@@@@@@@@ @@@@@ @@@@ @@@@@@@ @@@@@       @@@@@@@@@ @@@@@@@@@@ @@@@@@@@@@@
                                                      @@@@@@            TEST
                                                      @@@@@@            *NET
                                                      @@@@@@     ENTROPY-CLI
                                                      @@@@@@     COREv0.3.0

? Select Action (Use arrow keys)
❯ Manage Accounts
  Entropy Faucet
  Balance
  Register
  Sign
  Transfer
  Deploy Program
  User Programs
  Exit
```

The following functions are available within the CLI using the text-based user interface (TUI). To start the TUI, simply enter `entropy tui` without any arguments into your terminal:

```shell
entropy tui
```

```output
? Select Action (Use arrow keys)

❯ Manage Accounts
  Balance
  Register
  Sign
  Transfer
  Deploy Program
  User Programs
  Exit
```

## Manage Accounts

Create, import, and list your accounts.

```output
❯ Create/Import Account
  Select Account
  List Accounts
  Exit to Main Menu
```

## Entropy Faucet

Get test funds to spend on the testnet.

```output
Account: 5F3xmKa3WRkoHR4o6XjFQaWF2EskhtSh4ST5wY5cfsD9JYbC has been successfully funded with 20,000,000,000 BITS
```

## Balance

Get the balance of an account. You can select any of the accounts stored locally or enter an Entropy address.

```output
? Select Action Balance
Address 5Dcps2RdXPQfiJBxxDnrF8iDzDHcnZC8rb5mcJ3xicqzhYbv has a balance of: 382000000000000 bits
? Return to main menu? (Y/n)
```

## Register

Register a locally stored account with the Entropy network.

```output
Attempting to register the address: 5Dcps2RdXPQfiJBxxDnrF8iDzDHcnZC8rb5mcJ3xicqzhYbv
Your address 5Dcps2RdXPQfiJBxxDnrF8iDzDHcnZC8rb5mcJ3xicqzhYbv has been successfully registered.
```

The selected account must have available funds. Each registration costs about `400000000` bits.

## Sign

Sign a message using a registered account.

```output
? Choose account: (Use arrow keys)
  aragon (5FTwtSAjnKFybzkAKvyEo7owikXcHXmwzN7MzjwDNKEbjkub)
> charlie (5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT)
  Other
```

## Transfer

Transfer funds from a locally stored account to any other valid Entropy address.

```output
? Select Action Transfer
? Input amount to transfer: 12345
? Input recipient's address: 5G92hBs4UfZpVFYtBmmN3UqPTzGgotq7PSA3XfBMALfvWDUb
Transferring Funds |++++___________________| 22%
```

The `amount to transfer` value is in whole units, not bits. So transferring `1` would equal `10000000000` bits.

## Deploy Program

Deploy a program from a locally stored account.

```output
? Select Action Deploy Program
? Select your action: (Use arrow keys)
> Deploy
  Get Program Pointers

  Exit
```

## User Programs

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
