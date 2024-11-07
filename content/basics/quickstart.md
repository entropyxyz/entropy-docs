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

1. Run the CLI using `entropy tui`:

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
                                                        @@@@@@     
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

{{< callout type="info" >}}
**Closing the CLI**: You can close the CLI tool anytime by pressing `CTRL` + `c`. This will halt the CLI process and return you to your normal terminal window.
{{< /callout >}}

Next, you'll create an Entropy account.

## 2. Create an account

You need funds to interact with the Entropy network. Your funds are stored in an account. You can have multiple accounts.

1. Select **Manage Accounts**.
1. Select **Create/Import Account**.
1. Type `n` and press `ENTER` when asked _Would you like to import a key?_:

    ```output
    ? Would you like to import a key? n
    ```

1. Enter the name of your new account. The CLI will output some information about it:

    ```output
    New account:
    {
            name: MyFirstAccount
            address: 5HMnksPMRPqsDqyCj31VoQFgpiswsr12bk2YTyfMUEKCm2bv
    }
    ```

    Make a note of the `address` field. You'll need that in the next step.

1. Type `Y` and press `ENTER` to return to the main menu.

Next up, you'll request some funds to play around with.

## 3. Get testing funds

Funds for testing are available from the CLI's built-in faucet.

1. Navigate to **Manage Accounts** and then **Select Account**.
1. Select the account you want to receive test funds.
1. Go back the main TUI menu and select **Entropy Faucet**.

The CLI will request `2` test tokens from the Entropy network and forward them to your selected account. This equates to `20,000,000,000` bits, which is enough to perform transactions like registering an account and deploying a program.

Once you have been sent some funds, you can check your balance in the CLI.

1. Return to the main menue and select **Balance**.
1. The CLI should show your balance:

    ```output
    ? Select Action Balance
    Entropy Account [Andre] (5F3xmKa3WRkoHR4o6XjFQaWF2EskhtSh4ST5wY5cfsD9JYbC) has a balance of: 20,000,000,000 BITS
    ```

Next, you'll register your account on the Entropy network.

## 4. Register your account

Registering an account is a feature unique to Entropy. Without going into too much detail, it advertises to the network that you own _this_ account and that you're ready to start signing things.

1. Back at the main menu within the CLI, select **Register**:

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
    Attempting to register the address: 5Dcps2RdXPQfiJBxxDnrF8iDzDHcnZC8rb5mcJ3xicqzhYbv
    Your address 5Dcps2RdXPQfiJBxxDnrF8iDzDHcnZC8rb5mcJ3xicqzhYbv has been successfully registered.
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

1. Select **Sign With Adapter**.
1. Select **Text Input**.
1. The CLI will prompt you to enter a message in the default terminal-based text editor on your system:

    ```output
    ? Enter the message you wish to sign (this will open your default editor): Press <enter> to launch your preferred editor.
    ```

1. Press `ENTER` to open a text editor.
1. Within your text editor, enter a message. It doesn't matter what the message is at this point.
1. Once you have finished entering your message into the text editor, save and quit the text editor.
1. The CLI will output a `base64` encoded string:

    ```output
    signature: 0x4dc30d4b250900148b1facd054fdc611bd1c4103bf20409bf57fa04db5ba8fd00515ef9c497223e174ebad2bf69830997256c4081868b9f7f4b1f729eb8662ad00
    ```

Congratulations! You just received a signature from the Entropy network using the CLI!

So, what was all that about? While this quickstart guide didn't go into much detail regarding the theory of what you just did and why, you should now have a solid understanding of the steps available to you using Entropy.

## Next steps

There's much more to come from Entropy! Next, you should check out the [Entrosplainer]({{< relref "./entrosplainer.md" >}}), an end-to-end explanation of what Entropy is, why it's necessary, and how it works!

