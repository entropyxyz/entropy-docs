---
title: "Transfer funds"
---

This page covers how to transfer funds between two addresses. There are several ways to complete a transfer; pick the process that best fits your situation. If you're unsure which process to follow, the [Substrate Explorer](#substrate-explorer) workflow is the easiest.

## Polkadot Substrate Explorer

### Prerequisites

To transfer funds, you must have the following:

- Access to at least 2 [Entropy accounts](./manage-accounts), one of which must have funds.
- Access to the [Polkadot.js explorer](./use-the-explorer).
- A Polkadot.js compatible browser wallet. This guide uses the [Polkadot\{.js\} Browser Extension](https://polkadot.js.org/extension/) as an example.

### Steps

1. Import the addresses into the wallet. In the Polkadot\{.js\} Browser Extension, this can be done by selecting the plus **+** icon and clicking **Import account from pre-existing seed**:

    ![](./images/transfer-funds-import-accounts.png)

1. Start the Polkadot explorer and connect to the `testnet.entropy.xyz:9944` network.
1. Select the **Accounts** dropdown and click **Accounts**.

    ![](./images/transfer-funds-accounts-dropdown.png)

1. A popup should display asking if you want to grant the Polkadot Explorer access to your wallet. Click **Yes, allow this application access**.

    ![](./images/transfer-funds-authorize-application.png)

1. Click **Send** on the account that you want to send funds _from_.
1. Select the account you want to send funds _to_ in the **send to address** dropdown.

    ![](./images/transfer-funds-select-to-address.png)

1. Enter the number of tokens you want to send. The minimum number you can send is `10000`.
1. Click **Make Transfer**.
1. Review the details on this confirmation page and click **Sign and Submit**.

    ![](./images/transfer-funds-authorize-transaction.png)

1. Enter your password if prompted, and click **Sign the transaction**.

That's it! The transaction will take up to 6 seconds to transfer funds from one account to another.

## Entropy CLI

The feature is not currently available in the CLI. See [issue #80 in the Entropy Docs repository](https://github.com/entropyxyz/entropy-docs/issues/80) to track the progress of this guide.

## Entropy SDK

The feature is not currently available in the SDK. To track the progress of this upcoming guide, see [issue #81 in the Entropy Docs repository](https://github.com/entropyxyz/entropy-docs/issues/81).
