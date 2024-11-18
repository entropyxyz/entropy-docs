---
title: "Quickstart"
description: "Start experimenting with the Entropy network quickly."
lead: "By the end of this guide, you will have deployed a program onto the Entropy blockchain and be able to interact with it to produce signatures. These terms (deploy, program, blockchain, signature) may be a bit foreign to you right now, and that's ok! You don't need to understand everything in order to play around with Entropy."
weight: 1
---

{{< callout type="info" >}}
If you'd prefer to dive into the core concepts of Entropy instead of running through this quickstart, head over to the [Entrosplainer to learn how the project works]({{< relref "./entrosplainer.md" >}})!
{{< /callout >}}

## What is Entropy

The Entropy network provides threshold signing as a service. That means multiple users can collectively sign a message to perform _some_ function on any blockchain network. Entropy can also be used to perform non-blockchain tasks like encrypting and decrypting chunks of data. That's all we will cover now, but you'll learn more about Entropy in other parts of this docs website.

## 1. Install CLI

The command-line interface (CLI) is the most straightforward way to interact with Entropy from your device.

1. Ensure you have Node.js version `20.x.x` or above:

    ```shell
    node --version
    ```

    ```output
    v23.1.0
    ```

1. Install the Entropy CLI globally using NPM:

    ```shell
    npm install --global @entropyxyz/cli
    ```

1. Test that the CLI is installed by requesting the CLI version:


    ```shell
    entropy --version
    ```

    ```output
    v0.1.0
    ```

Next, you'll create an Entropy account.

## 2. Create an account

You need funds to interact with the Entropy network. Your funds are stored in an account. You can have multiple accounts.

1. Open the Entropy CLI text-based user interface (TUI):

    ```shell
    entropy tui
    ```

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

1. Select **Manage Accounts**.
1. Select **Create/Import Account**.
1. Type `n` and press `ENTER` when asked _Would you like to import your own seed?_:

    ```output
    ? Would you like to import your own seed? (y/N) n
    ```

1. Enter the name of your new account.
1. Type `Y` and press `ENTER` to return to the main menu.

Next up, you'll request some funds to play around with.

## 3. Get testing funds

Funds for testing are available from the CLI's built-in faucet.

1. Select **Entropy Faucet** from the main menu.

    The CLI will request `2` test `bits` from the Entropy network and send them to your selected account. This equates to 20,000,000,000 `nanobits`, which is enough to perform actions like registering an account, transferring funds, and deploying a program.

    ```output
    ⠧ Funding account…
    ```

1. Once you have been sent some funds, the CLI will output a success message:

    ```output
    Account: 5EFDfxft4oZYvjj35TWttFkkKZSHUDVnBRmp3eMQQcpt9zku has been successfully funded with 20,000,000,000 BITS
    ```

Next, you'll register your account on the Entropy network.

## 4. Register your account

Registering an account is a feature unique to Entropy. Without going into too much detail, it advertises to the network that you own _this_ account and that you're ready to start signing things.

1. Back at the main menu, select **Register**:

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

1. The CLI will send your selected account information to the network. The network will then register your account as long as you have enough funds.

    ```output
    Attempting to register the address: 5EFDfxft4oZYvjj35TWttFkkKZSHUDVnBRmp3eMQQcpt9zku
    Your address 5EFDfxft4oZYvjj35TWttFkkKZSHUDVnBRmp3eMQQcpt9zku has been successfully registered.
    ```

1. Press `Y` to go back to the main menu.

Next up, we'll attempt to get a signature from the network!

## 5. Get a signature

1. Back at the main menu within the CLI, select **Sign**:

    ```output
    ? Select Action
      Manage Accounts
      Balance
      Register
    > Sign
      Transfer
      Deploy Program
      User Programs
      Exit
    ```

1. The CLI will prompt you to enter a message in the default terminal-based text editor on your system:

    ```output
    ? Enter the message you wish to sign (this will open your default editor): Press <enter> to launch your preferred editor.
    ```

    {{< callout "info" >}}
    You can set your terminal's preferred editor by changing the `EDITOR` environment variable:

    ```shell
    # Set default text-editor to Neovim.
    export EDITOR='nvim'
    ```
    {{< /callout >}}

1. Press `ENTER` to open a text editor.
1. Within your text editor, enter a message. It doesn't matter what the message is at this point.
1. Once you have finished entering your message into the text editor, save and quit the text editor.
1. The CLI will output the verifying key used to sign the message and the signature of the message itself:

    ```output
    verifying key: 0x03aee03ad9862e9f31d06f7d1b4b388ad1c66152ad17f919fc16fcc75929b08db3
    signature: 0xe78fce90707f824530677ba91ef90d3be4418da3eb10b3233709553b4355f1973b21e88d285e04ba323c8fe0d079a4f027c840a23cc57590371d57c95ed9eaa901
    ```

Congratulations! You just received a signature from the Entropy network using the CLI!

So, what was all that about? While this quickstart guide didn't go into much detail regarding the theory of what you just did and why, you should now have a solid understanding of the steps available to you using Entropy.

## Next steps

There's much more to come from Entropy! Next, you should check out the [Entrosplainer]({{< relref "./entrosplainer.md" >}}), an end-to-end explanation of what Entropy is, why it's necessary, and how it works!
