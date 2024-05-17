---
title: "Quickstart"
slug: /
---

By the end of this guide you will have deployed a program onto the Entropy blockchain, and be able to interact with it to produce signatures. These terms (deploy, program, blockchain, signature) may be a bit foreign to you right now; and that's ok! You don't need to understand everything in order to play around with Entropy.

## What is Entropy

The Entropy network provides threshold signing as a service. That means that multiple users can collectivly sign a message to perform _some_ function on any blockchain network. Entropy can also be used to perform non-blockchain tasks like encrypting and decrypting chunks of data. That's all we're going to cover at this time, but you'll learn more about Entropy as a concept in other parts of this docs website.

## 1. Install CLI

The command-line interface (CLI) is the most straightforward way to interact with Entropy from your device.

1. Install the Entropy CLI using NPM:

    ```shell
    npm install --global entropy
    ```

    This installs the `entropy` binary so that you can access it anywhere on your computer.

1. Check that `entropy` is installed properly by getting the version number:

    ```shell
    entropy --version
    ```

Next, you'll create an Entropy wallet.

## 2. Create a wallet

You need funds to interact with the Entropy network. A wallet is where you can store those funds.

1. Start the CLI by running `entropy` in your terminal:

    ```
    entropy
    ```

    This will start the CLI's text-based user interface:

    ```plaintext
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
                                                        @@@@@@     COREv0.0.10
    ? Select Action (Use arrow keys)
    ❯ Balance
      Deploy Program
      User Programs
      Register
      Construct an Ethereum Tx
      Sign
      Transfer
      Give Zaps
      Wallet
      Exit
    ```

1. Select **Wallet**.
1. Select **New**.
1. Type `N` and press `ENTER` when asked _Would you like to import a key?_:

    ```plaintext
    ? Would you like to import a key? n
    ```

1. Enter a name for you wallet.
1. Type `Y` and press `ENTER` when asked _Would you like to password protect this key?_:

    ```
    ? Would you like to password protect this key? y
    ```

    This password is used to locally encrypt your key. This helps keep your funds safe.

1. Once you've entered your password the CLI will output some information about your new wallet:

    ```plaintext
    New account:
    {
            name: MyFirstKey
            address: 5HMnksPMRPqsDqyCj31VoQFgpiswsr12bk2YTyfMUEKCm2bv
            type: seed
    }
    ```

    Make a note of the `address` field. You'll need that in the next step.

1. Type `Y` and press `ENTER` to go back to the main menu.

Next up, you'll request some funds to play around with.

## 3. Get testing funds

You need funds to interact with the Entropy blockchain network. To get these testing funds you will need a GitHub account.

1. Log into your GitHub account and go to [github.com/entropyxyz/faucet](https://github.com/entropyxyz/faucet).
1. Navigate to the **Issue** tab and select **New issue**.
1. In the **Title** field, enter your `address` you copied from the previous section.
1. You can leave the **Description** box empty.
1. Click **Submit new issue**.

At this point, someone from Entropy will send you some test funds. This should happen within a couple of hours, by may be longer. Once they've sent the funds to your account, they'll let you know in the issue you created, and close the issue.

Once you have been sent some funds, you can check your balance in the CLI.

1. Open the CLI text-based user interface:

    ```shell
    entropy
    ```

1. Select **Balance** from the menu.
1. You should see your address from earlier listed. Use the arrow keys to highlight it and press `ENTER`.
1. Enter the password for your account.
1. The CLI should now show your balance.

:::note
We're in the very early stages of the testnet. We're building an automated faucet to hand out test funds, and we'll update this page when it's ready.
:::

## 4. Register your address

Registering an account is a feature unique to Entropy. Without going into too much detail, it advertises to the network that you own _this_ address, and that you're ready to start signing _things_.

1. Start the CLI by running `entropy` in your terminal:

    ```
    entropy
    ```

1. Select **Register**.
1. Select your account from the list.
1. The CLI should register your account after a few seconds.

<!--## 5. Deploy a program-->
<!---->
<!--On the Entropy network, Programs (with a capital P) are small applications that run a particular ruleset. They're similar to _smart-contracts_ on other blockchain networks, but with some key differences. We won't go into too much detail here, however. All you need to know for now is that these Programs control _who_ can sign _what_.-->
<!---->
<!--For this quickstart, we're going to deploy an example program from the Entropy Programs GitHub repository.-->
<!---->
<!--1. -->
<!---->
<!--## 6. Interact with the program.-->
<!---->
<!--1. Do _whatever_ we can do to interact with the program. This is likely just getting a `TRUE` or `FALSE` bool back from the chain.-->

## Next steps

There's much more to come from Entropy! Next, you should checkout the [Entrosplainer](./entrosplainer.md) -- and end-to-end explanation of what Entropy is, why it's necessary, and how it works!
