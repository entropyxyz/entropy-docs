---
title: "Programmatic CLI"
lead: "Pass arguments directly to the CLI as single-line terminal commands."
aliases:
    - "cli"
weight: 10
---

You can interact with Entropy quickly by giving single-line commands to the `entropy` executable.

```output
Usage: entropy [options] [command]

CLI interface for interacting with entropy.xyz.

Options:
  -v, --version                              Displays the current running version of Entropy CLI.
  -cv, --core-version                        Displays the current running version of the Entropy Protocol
  -h, --help                                 display help for command

Commands:
  tui [options]                              Text-based User Interface (interactive)
  account                                    Commands to work with accounts on the Entropy Network
  sign [options] <msg>                       Sign a message using the Entropy network. Output is a JSON { verifyingKey, signature }
  balance [options] <account>                Command to retrieive the balance of an account on the Entropy Network
  transfer [options] <destination> <amount>  Transfer funds between two Entropy accounts.
  program                                    Commands for working with programs deployed to the Entropy Network
```

## `tui`

```output
Usage: entropy tui [options]

Text-based User Interface (interactive)

Options:
  -a, --account <name|address>  Sets the account for the session. Defaults to the last set account (or the first account if one has not been set before). (default: "", env: ENTROPY_ACCOUNT)
  -e, --endpoint <url>          Runs entropy with the given endpoint and ignores network endpoints in config. Can also be given a stored endpoint name from config eg: `entropy --endpoint test-net`. (default: "wss://testnet.entropy.xyz/", env: ENTROPY_ENDPOINT)
  -h, --help                    display help for command
```

## `account`

```output
Usage: entropy account [options] [command]

Commands to work with accounts on the Entropy Network

Options:
  -h, --help                      display help for command

Commands:
  create|new [options] <name>     Create a new entropy account from scratch. Output is JSON of form {name, address}
  import [options] <name> <seed>  Import an existing entropy account from seed. Output is JSON of form {name, address}
  list|ls                         List all accounts. Output is JSON of form [{ name, address, verifyingKeys }]
  register [options]              Register an entropy account with a program
  help [command]                  display help for command
```

### `create`

```output
Usage: entropy account create|new [options] <name>

Create a new entropy account from scratch. Output is JSON of form {name, address}

Arguments:
  name        A user friendly name for your new account.

Options:
  --path      Derivation path
  -h, --help  display help for command
```

### `import`

```output
Usage: entropy account import [options] <name> <seed>

Import an existing entropy account from seed. Output is JSON of form {name, address}

Arguments:
  name        A user friendly name for your new account.
  seed        The seed for the account you are importing

Options:
  --path      Derivation path
  -h, --help  display help for command
```

### `list`

```output
Usage: entropy account list|ls [options]

List all accounts. Output is JSON of form [{ name, address, verifyingKeys }]

Options:
  -h, --help  display help for command
```

### `register`

```output
Usage: entropy account register [options]

Register an entropy account with a program

Options:
  -a, --account <name|address>  Sets the account for the session. Defaults to the last set account (or the first account if one has not been set before). (default: "", env: ENTROPY_ACCOUNT)
  -e, --endpoint <url>          Runs entropy with the given endpoint and ignores network endpoints in config. Can also be given a stored endpoint name from config eg: `entropy --endpoint test-net`. (default: "wss://testnet.entropy.xyz/", env: ENTROPY_ENDPOINT)
  -h, --help                    display help for command
```

## `sign`

```output
Usage: entropy sign [options] <msg>

Sign a message using the Entropy network. Output is a JSON { verifyingKey, signature }

Arguments:
  msg                           Message you would like to sign (string)

Options:
  -a, --account <name|address>  Sets the account for the session. Defaults to the last set account (or the first account if one has not been set before). (default: "", env: ENTROPY_ACCOUNT)
  -e, --endpoint <url>          Runs entropy with the given endpoint and ignores network endpoints in config. Can also be given a stored endpoint name from config eg: `entropy --endpoint test-net`. (default: "wss://testnet.entropy.xyz/", env: ENTROPY_ENDPOINT)
  -h, --help                    display help for command
```

## `balance`

```output
Usage: entropy balance [options] <account>

Command to retrieive the balance of an account on the Entropy Network

Arguments:
  account               The address an account address whose balance you want to query. Can also be the human-readable name of one of your accounts

Options:
  -e, --endpoint <url>  Runs entropy with the given endpoint and ignores network endpoints in config. Can also be given a stored endpoint name from config eg: `entropy --endpoint test-net`. (default: "wss://testnet.entropy.xyz/", env: ENTROPY_ENDPOINT)
  -h, --help            display help for command
```

## `transfer`

```output
Usage: entropy transfer [options] <destination> <amount>

Transfer funds between two Entropy accounts.

Arguments:
  destination                   Account address funds will be sent to
  amount                        Amount of funds to be moved (in "tokens")

Options:
  -a, --account <name|address>  Sets the account for the session. Defaults to the last set account (or the first account if one has not been set before). (default: "", env: ENTROPY_ACCOUNT)
  -e, --endpoint <url>          Runs entropy with the given endpoint and ignores network endpoints in config. Can also be given a stored endpoint name from config eg: `entropy --endpoint test-net`. (default: "wss://testnet.entropy.xyz/", env: ENTROPY_ENDPOINT)
  -h, --help                    display help for command
```

## `program`

```output
Usage: entropy program [options] [command]

Commands for working with programs deployed to the Entropy Network

Options:
  -h, --help                                                               display help for command

Commands:
  deploy [options] <bytecode> <configurationSchema> <auxillaryDataSchema>  Deploys a program to the Entropy network, returning a program pointer. Requires funds.
  get [options] <programPointer>                                           Get a program interface by it's pointer.
  listDeployed [options]                                                   Get a list of all programs the current account has deployed
  add [options] <programPointer> [programConfigPath]                       Add a program to the current account
  remove|rm [options] <programPointer>                                     Remove a program from an account (specified by a verifyingKey)
  list|ls [options] <verifyingKey>                                         List all the programs (an associated config) added to a particular verifyingKey.
  help [command]                                                           display help for command
```

### `deploy`

```output
Usage: entropy program deploy [options] <bytecode> <configurationSchema> <auxillaryDataSchema>

Deploys a program to the Entropy network, returning a program pointer. Requires
funds.

Arguments:
  bytecode                      The path to your program bytecode. Must be a .wasm file.
  configurationSchema           The path to the JSON Schema for validating configurations passed in by users installing this program. Must be a .json file.
  auxillaryDataSchema           The path to the JSON Schema for validating auxillary data passed to the program on calls to "sign". Must be a .json file.

Options:
  -a, --account <name|address>  Sets the account for the session. Defaults to the last set account (or the first account if one has not been set before). (default: "", env: ENTROPY_ACCOUNT)
  -e, --endpoint <url>          Runs entropy with the given endpoint and ignores network endpoints in config. Can also be given a stored endpoint name from config eg: `entropy --endpoint test-net`. (default: "wss://testnet.entropy.xyz/", env: ENTROPY_ENDPOINT)
  -h, --help                    display help for command
```

### `get`

```output
Usage: entropy program get [options] <programPointer>

Get a program interface by it's pointer.

Arguments:
  programPointer                The pointer for the program interface.

Options:
  -a, --account <name|address>  Sets the account for the session. Defaults to the last set account (or the first account if one has not been set before). (default: "", env: ENTROPY_ACCOUNT)
  -e, --endpoint <url>          Runs entropy with the given endpoint and ignores network endpoints in config. Can also be given a stored endpoint name from config eg: `entropy --endpoint test-net`. (default: "wss://testnet.entropy.xyz/", env: ENTROPY_ENDPOINT)
  -h, --help                    display help for command
```

### `listDeployed`

```output
Usage: entropy program listDeployed [options]

Get a list of all programs the current account has deployed

Options:
  -a, --account <name|address>  Sets the account for the session. Defaults to the last set account (or the first account if one has not been set before). (default: "", env: ENTROPY_ACCOUNT)
  -e, --endpoint <url>          Runs entropy with the given endpoint and ignores network endpoints in config. Can also be given a stored endpoint name from config eg: `entropy --endpoint test-net`. (default: "wss://testnet.entropy.xyz/", env: ENTROPY_ENDPOINT)
  -h, --help                    display help for command
```

### `add`

```output
Usage: entropy program add [options] <programPointer> [programConfigPath]

Add a program to the current account

Arguments:
  programPointer                The pointer for the program interface.
  programConfigPath             The path to the config to apply to the program.
                                Must be a .json file

Options:
  -a, --account <name|address>  Sets the account for the session. Defaults to the last set account (or the first account if one has not been set before). (default: "", env: ENTROPY_ACCOUNT)
  -e, --endpoint <url>          Runs entropy with the given endpoint and ignores network endpoints in config. Can also be given a stored endpoint name from config eg: `entropy --endpoint test-net`. (default: "wss://testnet.entropy.xyz/", env: ENTROPY_ENDPOINT)
  -k, --verifying-key <key>     The verifying key to perform this function
                                with.
  -h, --help                    display help for command
```

### `remove`

```output
Usage: entropy program remove|rm [options] <programPointer>

Remove a program from an account (specified by a verifyingKey)

Arguments:
  programPointer                The pointer for the program you want to remove.

Options:
  -a, --account <name|address>  Sets the account for the session. Defaults to the last set account (or the first account if one has not been set before). (default: "", env: ENTROPY_ACCOUNT)
  -e, --endpoint <url>          Runs entropy with the given endpoint and ignores network endpoints in config. Can also be given a stored endpoint name from config eg: `entropy --endpoint test-net`. (default: "wss://testnet.entropy.xyz/", env: ENTROPY_ENDPOINT)
  -k, --verifying-key <key>     The verifying key to perform this function
                                with.
  -p, --program-mod-key <key>   The programModKey to perform this function
                                with.
  -h, --help                    display help for command
```

### `list`

```output
Usage: entropy program list|ls [options] <verifyingKey>

List all the programs (an associated config) added to a particular
verifyingKey.

Arguments:
  verifyingKey                  The verifyingKey being queried.

Options:
  -a, --account <name|address>  Sets the account for the session. Defaults to the last set account (or the first account if one has not been set before). (default: "", env: ENTROPY_ACCOUNT)
  -e, --endpoint <url>          Runs entropy with the given endpoint and ignores network endpoints in config. Can also be given a stored endpoint name from config eg: `entropy --endpoint test-net`. (default: "wss://testnet.entropy.xyz/", env: ENTROPY_ENDPOINT)
  -h, --help                    display help for command
```
