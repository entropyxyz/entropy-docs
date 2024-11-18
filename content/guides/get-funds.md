---
title: "Get funds"
lead: "This page covers how to get your hands on test funds and experience the Entropy testnet directly."
---

## Mainnet

The Entropy main network (mainnet) has yet to be released; as such, mainnet funds are unavailable.

## Testnet

Funds for testing are available from the CLI faucet. You need to have the [Entropy CLI]({{<relref "reference/command-line-interface">}}) installed to receive test funds.

1. Start the CLI's text-based user interface (TUI):

    ```shell
    entropy tui
    ```

1. Navigate to **Manage Accounts** and then **Select Account**.
1. Select the account you want to receive test funds.
1. Return to the main TUI menu and select **Entropy Faucet**.

The CLI will request `2` test `bits` from the Entropy network and forward them to your selected account. This equates to `20,000,000,000` bits, enough to perform transactions like registering an account and deploying a program.
