---
title: "SDK"
lead: "This source development kit (SDK) is a collection of TypeScript packages that allow you to interact with the Entropy network. This project is currently in alpha, so use with caution." 
---

## Installation

You can install the SDK using any Node-based package manager:

{{< tabs items="NPM, PNPM, Yarn" >}}

    {{< tab >}}
    ```shell
    npm install @entropyxyz/sdk --save
    ```
    {{< /tab >}}

    {{< tab >}}
    ```shell
    pnpm install @entropyxyz/sdk --save
    ```
    {{< /tab >}}

    {{< tab >}}
    ```shell
    yarn add @entropyxyz/sdk
    ```
    {{< /tab >}}

{{< /tabs >}}

### Basic example

Below is an example that instantiates Entropy, deploys a program, registers using the deployed program, and signs a transaction. The code demonstrates how to use the Entropy SDK to create and manage a keyring across two sessions. It sets up event listeners to keep the stored account information updated and creates Entropy instances for both scenarios. The main difference between the two parts is that the second part loads previously stored account information instead of creating a new seed.

1. First session: 

    ```javascript
    // Import necessary modules from the Entropy SDK.
    import { Keyring } from '@entropyxyz/sdk/keys'
    import { wasmGlobalsReady, Entropy } from '@entropyxyz/sdk'

    // Wait for WebAssembly globals to be ready.
    await wasmGlobalsReady()

    // Initialize a new seed or mnemonic.
    const newSeed = {seed || mnemonic}

    // Create and store a new Keyring instance with the given account.
    const keyring = new Keyring(account)
    let persistMe = keyring.accounts.toJson()

    // Update the stored state and listen for updates.
    const saveToStorage = (state) => persistMe = state
    keyring.accounts.on('account-update', (fullAccount) => { saveToStorage(fullAccount) })

    // Create a new Entropy instance with the keyring and endpoint.
    let entropy = New Entropy({keyring, endpoint})
    ```

2. Second session:

    ```javascript
    // Load the previously stored account information and create a new Keyring instance with it.
    const loadedFromStorage = persistMe
    const newKeyring = new Keyring(loadFromStorage)

    // Set up an event listener for account updates (same as before).
    keyring.accounts.on('account-update', (fullAccountAsJSON) => { saveToStorage(fullAccountAsJSON) })

    // Create a new Entropy instance with the new keyring and endpoint.
    entropy = new Entropy({keyring: newKeyring, endpoint})
    ```

# ## Constructors
#
# ### Entropy
#
# Initializes an instance of the Entropy class.
#
# **Parameters**:
#
# | Name | Type | Description |
# | ---- | ---- | ----------- |
# | `opts` | `EntropyOpt` | The configuration options for the Entropy instance. |
#
# **Example**:
#
# ```javascript
# new Entropy({ account: entropyAccount })
# await entropy.ready
# ```
#
# **Returns**:
#
# `default`
#
# **Defined in**:
#
# [index.ts:83](https://github.com/entropyxyz/sdk/blob/1c426d7/src/index.ts#L83)
