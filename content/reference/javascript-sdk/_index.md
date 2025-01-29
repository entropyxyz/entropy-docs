---
title: "JavaScript SDK"
lead: "The SDK is the fastest way to start integrating the Entropy network into your project. This section covers concepts specific to the JS SDK, a basic _hello world_ tutorial to help you get started, and links to in-depth reference documentation."
aliases:
    - "sdk"
---

{{< callout type="warning" >}}
The Entropy SDK is currently in alpha. While we're excited about its capabilities, keep in mind that breaking changes may occur, APIs might be unstable, and features and functionality may change. Do not use this SDK in a production environment.
{{< /callout >}}

## Overview

The Entropy SDK enables developers to integrate decentralized threshold signatures into their projects. Unlike traditional signature solutions that rely on single keys or centralized services, Entropy distributes the signing process across a decentralized network while maintaining the simplicity of a regular API. The SDK also features robust account management and Entropy Program deployment functions.

Built on Substrate, Entropy provides a robust foundation for blockchain applications that require secure, distributed signing capabilities. The SDK abstracts away the complexity of threshold cryptography, allowing developers to focus on building their applications.

## Core features

{{< cards cols="2" >}}
  {{< card link="../callout" title="Program deployment" icon="tag" subtitle="Deploy and manage programs that define your signing logic. Each program acts as a customizable rule set for how signatures should be generated and validated." >}}
  {{< card link="../callout" title="Signature creation and verification" icon="tag" subtitle="Create and verify signatures through a straightforward API that handles all the underlying cryptographic operations." >}}
  {{< card link="../callout" title="Account management" icon="tag" subtitle="Manage user accounts and keys securely with the SDKs built-in account functions." >}}
  {{< card link="../callout" title="General utilities" icon="tag" subtitle="Easily incorporate basic utilite functions built right into the SDK.">}}
{{< /cards >}}

## Getting Started

Start building with the Entropy SDK quickly by grabbing the appropriate package, setting up a development environment, and creating a basic startup script.

### Installation

Install the SDK using NPM or Yarn:

{{< tabs items="NPM, Yarn" >}}

    {{< tab >}}
    ```shell
    npm install @entropyxyz/sdk
    ```
    {{< /tab >}}

    {{< tab >}}
    ```shell
    yarn add @entropyxyz/sdk
    ```
    {{< /tab >}}

{{< /tabs >}}

### Basic Setup

Initialize the SDK to create your first signature:

```javascript
import { Keyring } from '@entropyxyz/sdk/keys';
import { wasmGlobalsReady, Entropy } from '@entropyxyz/sdk';

async function quickStart() {
    await wasmGlobalsReady();
    const keyring = new Keyring({ seed: yourSeed });
    const entropy = new Entropy({
        endpoint: 'ws://127.0.0.1:9944',
        keyring
    });
    await entropy.ready;
    // Your code here
}
```

### Local Development

For development and testing, we recommend [setting up a local devnet](https://docs.entropy.xyz/guides/spin-up-a-devnet/). A devnet provides a controlled environment to freely experiment with different programs and configurations.

### Move to the testnet

Once your application works locally, move to testnet testing by using the testnet endpoint: `wss://testnet.entropy.xyz`. Remember that programs can only be deployed once per account on testnet. Use the [Entropy CLI](https://github.com/entropyxyz/cli) for additional testing and management capabilities

## Next steps
