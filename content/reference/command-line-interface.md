---
title: "Command-line interface"
lead: "The command-line interface (CLI) is a straightforward way to experiment with the Entropy network and explore common workflows."
aliases:
    - "cli"
---

{{< cards cols=2 >}}

    {{< card 
        link="#programmatic-cli" 
        title="Programmatic CLI" 
        image="/images/entropy-cli-terminal.png"
        subtitle="Pass arguments directly to the CLI as single-line terminal commands." 
    >}}

    {{< card 
        link="#interactive-cli" 
        title="Interactive CLI" 
        image="/images/entropy-tui-terminal.png"
        subtitle="Use the text-based user interface (TUI) to interact with the CLI tool." 
    >}}

{{< /cards >}}

## Install

Follow these steps to install Entropy globally using NPM:

1. The CLI requires Node version 20 or higher to run:

    ```shell
    node --version
    ```

    ```output
    v23.1.0
    ```

    {{< callout type="info" >}}
    Consider using [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) to keep your Node installation organized. NVM also makes it trivial to switch between Node versions when necessary.
    {{< /callout >}}

1. Install the Entropy CLI globally using NPM:

    ```shell
    npm install --global @entropyxyz/cli
    ```

1. You can now run the CLI from anywhere using `entropy`:

    ```shell
    entropy
    ```

    ```output
    Usage: entropy [options] [command]

    CLI interface for interacting with entropy.xyz. Running without commands starts an interactive ui

    Options:
      -e, --endpoint <endpoint>                           Runs entropy with the given endpoint and ignores
                                                          network endpoints in config. Can also be given a
                                                          stored endpoint name from config eg: `entropy

                                                          --endpoint test-net`. (default:
                                                          "ws://testnet.entropy.xyz:9944/", env: ENDPOINT)
      -h, --help                                          display help for command

    Commands:
      list|ls                                             List all accounts. Output is JSON of form [{ name,
                                                          address, data }]

      balance [options] <address>                         Get the balance of an Entropy account. Output is a

                                                          number
      transfer [options] <source> <destination> <amount>  Transfer funds between two Entropy accounts.
      sign [options] <address> <message>                  Sign a message using the Entropy network. Output is
                                                          a signature (string)
    ```


1. You can also interact with the CLI through the TUI by adding `tui`:

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

## Programmatic CLI

You can interact with Entropy quickly by giving single-line commands to the `entropy` executable.

```shell
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

### `tui`

```shell
Usage: entropy tui [options]

Text-based User Interface (interactive)

Options:
  -a, --account <name|address>  Sets the account for the session. Defaults to the last set account (or the first account if one has not been set before). (default: "", env: ENTROPY_ACCOUNT)
  -e, --endpoint <url>          Runs entropy with the given endpoint and ignores network endpoints in config. Can also be given a stored endpoint name from config eg: `entropy --endpoint test-net`. (default: "wss://testnet.entropy.xyz/", env: ENTROPY_ENDPOINT)
  -h, --help                    display help for command
```

### `account`

```shell
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

#### `create`

```shell
Usage: entropy account create|new [options] <name>

Create a new entropy account from scratch. Output is JSON of form {name, address}

Arguments:
  name        A user friendly name for your new account.

Options:
  --path      Derivation path
  -h, --help  display help for command
```

#### `import`

```shell
Usage: entropy account import [options] <name> <seed>

Import an existing entropy account from seed. Output is JSON of form {name, address}

Arguments:
  name        A user friendly name for your new account.
  seed        The seed for the account you are importing

Options:
  --path      Derivation path
  -h, --help  display help for command
```

#### `list`

```shell
Usage: entropy account list|ls [options]

List all accounts. Output is JSON of form [{ name, address, verifyingKeys }]

Options:
  -h, --help  display help for command
```

#### `register`

```shell
Usage: entropy account register [options]

Register an entropy account with a program

Options:
  -a, --account <name|address>  Sets the account for the session. Defaults to the last set account (or the first account if one has not been set before). (default: "", env: ENTROPY_ACCOUNT)
  -e, --endpoint <url>          Runs entropy with the given endpoint and ignores network endpoints in config. Can also be given a stored endpoint name from config eg: `entropy --endpoint test-net`. (default: "wss://testnet.entropy.xyz/", env: ENTROPY_ENDPOINT)
  -h, --help                    display help for command
```

### `sign`

```shell
Usage: entropy sign [options] <msg>

Sign a message using the Entropy network. Output is a JSON { verifyingKey, signature }

Arguments:
  msg                           Message you would like to sign (string)

Options:
  -a, --account <name|address>  Sets the account for the session. Defaults to the last set account (or the first account if one has not been set before). (default: "", env: ENTROPY_ACCOUNT)
  -e, --endpoint <url>          Runs entropy with the given endpoint and ignores network endpoints in config. Can also be given a stored endpoint name from config eg: `entropy --endpoint test-net`. (default: "wss://testnet.entropy.xyz/", env: ENTROPY_ENDPOINT)
  -h, --help                    display help for command
```

### `balance`

```shell
Usage: entropy balance [options] <account>

Command to retrieive the balance of an account on the Entropy Network

Arguments:
  account               The address an account address whose balance you want to query. Can also be the human-readable name of one of your accounts

Options:
  -e, --endpoint <url>  Runs entropy with the given endpoint and ignores network endpoints in config. Can also be given a stored endpoint name from config eg: `entropy --endpoint test-net`. (default: "wss://testnet.entropy.xyz/", env: ENTROPY_ENDPOINT)
  -h, --help            display help for command
```

### `transfer`

```shell
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

### `program`

```shell
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

#### `deploy`

```shell
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

#### `get`

```shell
Usage: entropy program get [options] <programPointer>

Get a program interface by it's pointer.

Arguments:
  programPointer                The pointer for the program interface.

Options:
  -a, --account <name|address>  Sets the account for the session. Defaults to the last set account (or the first account if one has not been set before). (default: "", env: ENTROPY_ACCOUNT)
  -e, --endpoint <url>          Runs entropy with the given endpoint and ignores network endpoints in config. Can also be given a stored endpoint name from config eg: `entropy --endpoint test-net`. (default: "wss://testnet.entropy.xyz/", env: ENTROPY_ENDPOINT)
  -h, --help                    display help for command
```

#### `listDeployed`

```shell
Usage: entropy program listDeployed [options]

Get a list of all programs the current account has deployed

Options:
  -a, --account <name|address>  Sets the account for the session. Defaults to the last set account (or the first account if one has not been set before). (default: "", env: ENTROPY_ACCOUNT)
  -e, --endpoint <url>          Runs entropy with the given endpoint and ignores network endpoints in config. Can also be given a stored endpoint name from config eg: `entropy --endpoint test-net`. (default: "wss://testnet.entropy.xyz/", env: ENTROPY_ENDPOINT)
  -h, --help                    display help for command
```

#### `add`

```shell
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

#### `remove`

```shell
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

#### `list`

```shell
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

## Text-based user interface

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

### Manage Accounts

Create, import, and list your accounts.

```output
❯ Create/Import Account
  Select Account
  List Accounts
  Exit to Main Menu
```

### Entropy Faucet

Get test funds to spend on the testnet.

```output
Account: 5F3xmKa3WRkoHR4o6XjFQaWF2EskhtSh4ST5wY5cfsD9JYbC has been successfully funded with 20,000,000,000 BITS
```

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

### Sign

Sign a message using a registered account.

```output
? Choose account: (Use arrow keys)
  aragon (5FTwtSAjnKFybzkAKvyEo7owikXcHXmwzN7MzjwDNKEbjkub)
> charlie (5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT)
  Other
```

### Transfer

Transfer funds from a locally stored account to any other valid Entropy address.

```output
? Select Action Transfer
? Input amount to transfer: 12345
? Input recipient's address: 5G92hBs4UfZpVFYtBmmN3UqPTzGgotq7PSA3XfBMALfvWDUb
Transferring Funds |++++___________________| 22%
```

The `amount to transfer` value is in whole units, not bits. So transferring `1` would equal `10000000000` bits.

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

## Configuration

The CLI uses a configuration file to set and store basic information. This CLI uses [env-paths](https://www.npmjs.com/package/env-paths) to determine where configurations files should be stored:

- **Arch**: `~/.config/entropy-cryptography/entropy-cli.json`
- **MacOS**: `/Library/Preferences/entropy-cryptography/entropy-cli.json`
- **Ubuntu**: `~/.config/entropy-cryptography/entropy-cli.json`
- **Windows**: `C:\Users\<USERNAME>\AppData\Roaming\entropy-cryptography\Config\entropy-cli.json`

### Config file contents

This configuration file contains:

| Description | Name in configuration file |
| ----------- | -------------------------- |
| Account information | `accounts: [...]` |
| Which account is currently selected | `selectAccount` |
| Endpoints that you are connected to | `endpoints: {...}` |
| Configuration version | `migration-version` |

{{< callout type="danger" >}}
The config file contains your unencrypted private key.
{{< /callout >}}

### Deleting your config

The config file gets generated the first time that you start the CLI. If you somehow _break_ your config, you can delete your existing config and start the CLI -- it will generate a new base config.

## Logs

Similar to the configuration file, log files for this CLI can be found in the default [env-paths](https://www.npmjs.com/package/env-paths) locations:

- **Arch**: `~/.local/state/entropy-cryptography/`
- **MacOS**: `/Library/Logs/entropy-cryptography/`
- **Ubuntu**: `~/.local/state/entropy-cryptography/`
- **Windows**: `C:\Users\<USERNAME>\AppData\Local\entropy-cryptography\Log`

### Log file contents

There are three types of log file:

- **Debug**: Contains detailed technical information useful for troubleshooting during software development and maintenance.
- **Error**: Records specific software failures, including the time, severity, and context of each error.
- **Info**: Tracks general system events, providing a high-level overview of the application's behaviour.

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

This likely means that you don't have enough funds in the selected account to complete that function. Double-check that you've selected the correct account and that the account has enough funds in it. If you need more test funds, [head over to the faucet for more]({{< relref "../guides/get-funds.md" >}}).

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

#### How do I enter the text-based user interface?

[Install]({{< relref "#install" >}}) the `entropy` executable and enter `entropy` from the command line without any arguments.
