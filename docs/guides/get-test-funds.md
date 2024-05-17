---
title: "Get test funds"
---

You need funds to interact with the Entropy blockchain network, including the testnet. To get these testing funds, you will need a GitHub account.

1. Log into your GitHub account and go to [github.com/entropyxyz/faucet](https://github.com/entropyxyz/faucet).
1. Navigate to the **Issue** tab and select **New issue**.
1. In the **Title** field, enter the `address` you copied from the previous section.
1. You can leave the **Description** box empty.
1. Click **Submit new issue**.

At this point, someone from Entropy will send you some test funds. This should happen within a couple of hours, but may be longer. Once they've sent the funds to the address you provided they'll let you know, and close the issue.

:::note
We're in the very early stages of the testnet. We're building an automated faucet to hand out test funds, and we'll update this page when it's ready.
:::

Once you have been sent some funds, you can check your balance in the CLI.

6. Open the CLI text-based user interface using `yarn start`.
1. Select **Balance** from the menu.
1. You should see your account in the list. Use the arrow keys to highlight it and press `ENTER`.

    If you do not see you account listed, you need to [import your account](../guides/manage-accounts.md) into the CLI.

1. Enter the password for your account.
1. The CLI should show your balance.
