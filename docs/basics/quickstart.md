---
title: "Quickstart"
slug: /
lead: "This is some lead text."
---

By the end of this guide, you will have deployed a program onto the Entropy blockchain and be able to interact with it to produce signatures. These terms (deploy, program, blockchain, signature) may be a bit foreign to you right now, and that's ok! You don't need to understand everything in order to play around with Entropy.

:::info Rather skip the code?
If you'd prefer to dive into the core concepts of Entropy instead of running through this quickstart, head over to the [Entrosplainer to learn how the project works](./entrosplainer.md)!
:::

## What is Entropy

The Entropy network provides threshold signing as a service. That means that multiple users can collectively sign a message to perform _some_ function on any blockchain network. Entropy can also be used to perform non-blockchain tasks like encrypting and decrypting chunks of data. That's all we're going to cover at this time, but you'll learn more about Entropy as a concept in other parts of this docs website.

## 1. Install CLI

The command-line interface (CLI) is the most straightforward way to interact with Entropy from your device.

1. Ensure you have Yarn version 1.22.22 installed:

    ```plaintext
    yarn --version
    ```

    ```output
    # 1.22.22
    ```

1. Clone the Entropy CLI repository and move into the new `cli` directory:

    ```shell
    git clone https://github.com/entropyxyz/cli
    cd cli
    ```

1. Use Yarn to install the dependencies and build the project.

    ```shell
    yarn
    ```

    This pulls in the necessary packages and builds the CLI locally.

1. Run the CLI using `yarn`:

    ```shell
    yarn start
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
      Exit
    ```

:::tip Closing the CLI tool
You can close the CLI tool at any time by pressing `CTRL` + `c`. This will halt the CLI process and bring you back to your normal terminal window.
:::

Next, you'll create an Entropy wallet.

## 2. Create an account

You need funds to interact with the Entropy network. Your funds are stored in an account. You can have multiple accounts.

1. Select **Manage Accounts**.
1. Select **New**.
1. Type `n` and press `ENTER` when asked _Would you like to import a key?_:

    ```output
    ? Would you like to import a key? n
    ```

1. Enter the name of your new account. The CLI will output some information about your new account:

    ```output
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

You need funds to interact with the Entropy blockchain network. To get these testing funds, you will need a GitHub account.

1. Log into your GitHub account and go to [github.com/entropyxyz/community](https://github.com/entropyxyz/community).
1. Navigate to the **Discussions** tab and select **New discussion**.
1. Next to **Get Test Funds** click **Get started**:

    ![](./images/quickstart-create-test-funds-discussion.png)

1. In the **Title** field, enter the `address` you copied from the previous section.
1. If you need more than 10,000 test funds, enter the amount of funds you need and a reason why into the **Description** box. Otherwise, leave is blank.
1. Click **Start discussion**.

At this point, someone from Entropy will send you some test funds. This should happen within a couple of hours, but may be longer. Once they've sent the funds to the address you provided they'll let you know, and close the issue.

:::note
We're currently publically testing some of the Entropy tooling. As such, some of the workflows like getting test funds are a bit rough. We're building an automated faucet to hand out test funds, and we'll update this page when it's ready.
:::

Once you have been sent some funds, you can check your balance in the CLI.

6. Open the CLI text-based user interface using `yarn start`.
1. Select **Balance** from the menu.
1. You should see your account in the list. Use the arrow keys to highlight it and press `ENTER`.
1. The CLI should show your balance:

    ```plaintext

    ```

## 4. Register your account

Registering an account is a feature unique to Entropy. Without going into too much detail, it advertises to the network that you own _this_ account and that you're ready to start signing things.

1. Open the CLI text-based user interface using `yarn start`.
1. Select **Register**.
1. Select your account from the list.
1. The CLI should register your account after a few seconds.

## Next steps

There's much more to come from Entropy! Next, you should check out the [Entrosplainer](./entrosplainer.md) -- and end-to-end explanation of what Entropy is, why it's necessary, and how it works!

