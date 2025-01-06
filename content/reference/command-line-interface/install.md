---
title: "Install and Configure"
lead: "This guide covers everything you need to get up and running with the Entropy CLI. We'll walk you through installation, configuration, and even log management."
weight: 5
---

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
