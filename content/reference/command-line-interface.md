---
title: "Command-line interface"
lead: "The command-line interface (CLI) is a straightforward way to experiment with the Entropy network and explore common workflows."
aliases:
    - "url"
---

{{< cards cols=2 >}}

    {{< card 
        link="#interactive-mode" 
        title="Interactive mode" 
        image="/images/entropy-tui-terminal.png"
        subtitle="Use the text-based user interface (TUI) to interact with the CLI tool." 
    >}}

    {{< card 
        link="#programmatic-mode" 
        title="Programmatic mode" 
        image="/images/entropy-cli-terminal.png"
        subtitle="Pass arguments directly to the CLI as single-line terminal commands." 
    >}}

{{< /cards >}}

After installing, running `entropy` without any arguments will take you to the text-based user interface. If you pass any arguments, however, the CLI will assume you want to run the CLI as a single command.

## Install

Follow these steps to install Entropy globally using NPM:

1. Ensure you have Node.js version 20.9.0 or above:

    ```shell
    node --version
    ```

    ```output
    v22.2.0
    ```

1. Install the Entropy CLI globally using NPM:

    ```shell
    npm install --global @entropyxyz/cli
    ```

1. You can now run the CLI anywhere using `entropy`:

    ```shell
    entropy
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

1. You can also interact with the CLI through one-line commands by adding any of the arguments listed in the help section:

    ```shell
    entropy --help
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

## Interactive mode

The following functions are available within the CLI using the text-based user interface (TUI). To start the TUI, simply enter `entropy` without any arguments into your terminal:

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

## Programmatic mode

You can interact with Entropy quickly by giving single-line commands to the `entropy` executable.

### Options

#### Endpoint

You can specify a specific endpoint when passing commands to the CLI. This is done with the `-e` or `--endpoint` argument.

**Examples**:

Supply a custom endpoint using the `--endpoint` option:

```shell
entropy balance '5DSUAf2DwxW2ebZq15Pm6Z3SJ69Ur8fGd8ytWvgxvNjYtr7c' --endpoint 'wss://custom-endpoint.example.com'
```

Specify the custom endpoint prior to calling the `entropy` executable:

```shell
ENDPOINT='wss://custom-endpoint.example.com'
entropy balance '5DSUAf2DwxW2ebZq15Pm6Z3SJ69Ur8fGd8ytWvgxvNjYtr7c'
```

### Commands

You can enter the following commands directly from the command line.

#### Help

Displays basic help information.

**Arguments**:

None.

**Example**:

```shell
entropy --help
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

#### List

Lists all the locally stored accounts. Output data in a standard JSON format.

**Arguments**:

None.

**Example**:

```shell
entropy list
```

```output
[
  {
    "name": "Eygon",
    "address": "5DSUAf2DwxW2ebZq15Pm6Z3SJ69Ur8fGd8ytWvgxvNjYtr7c",
    "verifyingKeys": []
  },
  {

    "name": "Yoel",
    "address": "5CRnXJRaGZnA8UfhZ7AUyYjkYLvocFSPVzf1odPJfudKxtjY",
    "verifyingKeys": []
  }
]
```

#### Balance

Display the balance of an Entropy account. Outputs the number of bits held by the given account as an integer.

**Arguments**:

- `address`: the public address of the account that you want to get the balance of. This account does not have to be stored locally by the CLI and can be any valid Entropy address.

**Example**:

```shell
entropy balance '5DSUAf2DwxW2ebZq15Pm6Z3SJ69Ur8fGd8ytWvgxvNjYtr7c'
```

```output
1392000839928 BITS
```

#### Transfer

Transfer funds from one Entropy account to another. You must control the _source_ account to be able to send funds from it.

**Arguments**:

- `source`: the public address of the account from which you want to send funds.
- `destination`: the public address of the account to which you want to send funds. This account does not have to be stored locally by the CLI and can be any valid Entropy address.
- `amount`: the number of bits you want to send to the `destination` account.

**Example**:

```shell
entropy transfer '5DSUAf2DwxW2ebZq15Pm6Z3SJ69Ur8fGd8ytWvgxvNjYtr7c' '5CRnXJRaGZnA8UfhZ7AUyYjkYLvocFSPVzf1odPJfudKxtjY' 100000
```

#### Sign

Sign a message using the Entropy network. Output is a signature as a string.

**Arguments**:

- `address`: the public address of the account with which you want to sign the message.
- `message`: the message that you want to sign. It must be submitted as a string. Line breaks are not currently supported.

**Example**:

```shell
entropy sign '5DSUAf2DwxW2ebZq15Pm6Z3SJ69Ur8fGd8ytWvgxvNjYtr7c' 'Pickle Pee, Pump-a-Rum!'
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
