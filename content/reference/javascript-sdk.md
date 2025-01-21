---
title: "Basic SDK Example"
lead: ""
---

## Prerequisites

Before starting this tutorial, make sure you have Node v20.0.0 or above installed

## Setting up your project

1. First, create a new directory and initialize a Node project:

    ```shell
    mkdir entropy-sdk-demo
    cd entropy-sdk-demo
    npm init -y
    ```

1. Install the required dependencies:

    ```shell
    npm install @entropyxyz/sdk
    ```

## Creating your Entropy account

Before we can use the code, you'll need to create an account.

<!--TODO: explain process to create an account here.-->

## Time to write some code 

Let's break down the implementation into smaller parts. 

### Basic imports

Create a new file called `entropy-demo.mjs` and add the following lines.

```javascript
import { Keyring } from '@entropyxyz/sdk/keys';
import { wasmGlobalsReady, Entropy } from '@entropyxyz/sdk';
import { Buffer } from 'buffer';
```

These imports set up the fundamental building blocks needed to manage your cryptographic keys (`Keyring`), connect to and interact with the Entropy network (`Entropy`), ensure the cryptographic operations are ready (`wasmGlobalsReady`), and handle the necessary data conversions (`Buffer`).

### Core setup

Read through and add this block of code below the existing code in your `entropy-demo.mjs` file: 

```javascript
async function runEntropyDemo() {
    try {
        // Wait for WASM to be ready.
        console.log('Initializing WASM...');
        await wasmGlobalsReady();
        console.log('WASM initialized successfully');

        // Replace this with your actual seed from the Entropy platform.
        const seed = '0x786ad0e2df456fe43dd1f91ebca22e235bc162e0bb8d53c633e8c85b2af68b7a';
        
        // Initialize the keystore with your seed.
        const keyStore = { seed };
        console.log('Keystore initialized');

        // Create a new keyring instance.
        const keyring = new Keyring(keyStore);
        console.log('Keyring created successfully');

        // Configure the Entropy connection.
        const opts = {
            endpoint: 'wss://testnet.entropy.xyz',
            keyring
        };

        // Initialize Entropy.
        console.log('Connecting to Entropy network...');
        const entropy = new Entropy(opts);
        await entropy.ready;
        console.log('Successfully connected to Entropy network');

        return entropy;
    } catch (error) {
        console.error('Error in setup:', error);
        throw error;
    }
}
```

This codeblock is setting up the core infrastructure needed to connect to the Entropy network. Here's what's happening step by step:

- The function starts by initializing WebAssembly (WASM). It waits for `wasmGlobalsReady()` to complete before proceeding.
- It defines a `seed` - similar to a private key in other networks. In a real application, you wouldn't hardcode the seed like this.
- The seed is used to create a `keyStore` object. Think of this as a secure container for your seed.
- A `Keyring` instance is created using the `keyStore`. The `Keyring` manages all the cryptographic operations you'll need to perform with your `seed`.
- Connection options (`opts`) are set up:

    - `endpoint`: Points to the Entropy testnet.
    - `keyring`: Includes the Keyring instance we just created.

Finally, this function creates an `Entropy` instance with these options and waits for the connection to be ready. This is your main interface to interact with the Entropy network. Everything is wrapped in a try-catch block to handle any errors that might occur during this setup process, and returns the configured Entropy instance for use in other parts of the application.

### Creating and verifying signatures

Finally, read through and add this function to the file:

```javascript
async function createAndVerifySignature(entropy) {
    try {
        // Create a message to sign. Feel free to change this if you want.
        const message = 'Hello world: signature from entropy!';
        console.log(`Creating signature for message: ${message}`);
        
        const msgObject = {
            msg: Buffer.from(message).toString('hex')
        };

        // Register with the network.
        console.log('Registering with network...');
        const verifyingKey = await entropy.register();
        console.log('Registration successful. Verifying key:', verifyingKey);

        // Create signature.
        console.log('Creating signature...');
        const signatureData = await entropy.signWithAdaptersInOrder({
            msg: msgObject,
            order: ['deviceKeyProxy']
        });
        console.log('Signature created:', signatureData);

        // Verify the signature.
        console.log('Verifying signature...');
        const isValid = await entropy.verify(signatureData);
        
        if (!isValid) {
            throw new Error('Signature verification failed');
        }
        
        console.log('Signature verified successfully!');
        return signatureData;

    } catch (error) {
        console.error('Error in signature creation/verification:', error);
        throw error;
    }
}
```

This code handles the actual signature creation and verification process. Here's what's happening step by step:

- First, it creates a test message `"Hello world: signature from entropy!"` and converts it to hex:

    ```javascript
    const msgObject = {
        msg: Buffer.from(message).toString('hex')
    };
    ```

- It registers your account with the Entropy network and the basic signing program using `entropy.register()`. 
- Next, the code creates a signature for your message using `signWithAdaptersInOrder()` which takes your message object as input and uses the `deviceKeyProxy` program to create the signature.
- The code then verifies the signature using `entropy.verify(signatureData)`. This checks if the signature is valid and throws an error if verification fails.
- If everything succeeds, it returns the `signatureData` object, which contains the actual signature, the verifying key, the original message, and other metadata about the signature.

Like before, the entire process is wrapped in a try-catch block to handle any errors that might occur during signing or verification.

## Running the code

1. Save all the code.
1. Update your `package.json` to include:

    ```json
    {
      "type": "module"
    }
    ```

1. Run the script:

    ```shell
    node entropy-demo.js
    ```
