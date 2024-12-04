---
title: "Troubleshooting"
lead: "This page covers some common problems you could encounter while using the Entropy CLI and how to get around them."
weight: 100
---

## How do I quit the CLI?

Press `CTRL` + `c` at any point to exit the CLI program, even if you're within a function:

```output
? Select Action Transfer
? Input amount to transfer: 1000
? Input recipient's address:        <----- Pressed `CTRL` + `c` here.
error Command failed with exit code 130.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
user@computer: $
```

## ERR::: RpcError: 1010: Invalid Transaction: Inability to pay some fees , e.g. account balance too low

This likely means that you don't have enough funds in the selected account to complete that function. Double-check that you've selected the correct account and that the account has enough funds in it. If you need more test funds, [head over to the faucet for more]({{< relref "get-funds.md" >}}).

## CLI crashes when registering

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

## How do I enter the text-based user interface?

[Install]({{< relref "#install" >}}) the `entropy` executable and enter `entropy` from the command line without any arguments.
