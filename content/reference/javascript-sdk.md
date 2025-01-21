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

## Write the script

Instead of throwing a giant block of code at your, let's break down the implementation into smaller parts. 

### Basic imports

1. Create a new file called `entropy-demo.mjs` and add the following lines:

    ```javascript
    import { Keyring } from '@entropyxyz/sdk/keys';
    import { wasmGlobalsReady, Entropy } from '@entropyxyz/sdk';
    import { Buffer } from 'buffer';
    ```

2. Save the file and move onto the next section.

{{< callout type="info" >}}
These imports set up the fundamental building blocks needed to manage your cryptographic keys (`Keyring`), connect to and interact with the Entropy network (`Entropy`), ensure the cryptographic operations are ready (`wasmGlobalsReady`), and handle the necessary data conversions (`Buffer`).
{{< /callout >}}

### Core setup

1. Read through and add this block of code below the existing code in your `entropy-demo.mjs` file: 

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

1. On line 8, enter the seed of your account.
1. Save the file and move onto the next section.

{{< callout type="info" >}}
This codeblock is setting up the core infrastructure needed to connect to the Entropy network. Here's what's happening step by step:

- The function starts by initializing WebAssembly (WASM). It waits for `wasmGlobalsReady()` to complete before proceeding.
- It defines a `seed` - similar to a private key in other networks. In a real application, you wouldn't hardcode the seed like this.
- The seed is used to create a `keyStore` object. Think of this as a secure container for your seed.
- A `Keyring` instance is created using the `keyStore`. The `Keyring` manages all the cryptographic operations you'll need to perform with your `seed`.
- Connection options (`opts`) are set up:

    - `endpoint`: Points to the Entropy testnet.
    - `keyring`: Includes the Keyring instance we just created.

Finally, this function creates an `Entropy` instance with these options and waits for the connection to be ready. This is your main interface to interact with the Entropy network. Everything is wrapped in a try-catch block to handle any errors that might occur during this setup process, and returns the configured Entropy instance for use in other parts of the application.
{{< /callout >}}

### Creating and verifying signatures

1. Finally, read through and add this function to the file:

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

1. Save the file and move onto the next section.

{{< callout type="info" >}}
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
{{< /callout >}}

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

1. You should receive output similar to this:

    ```shell
    Initializing WASM...
    WASM initialized successfully
    Keystore initialized
    Keyring created successfully
    Connecting to Entropy network...
    Successfully connected to Entropy network
    Creating signature for message: Hello world: signature from entropy!
    Registering with network...
    Registration successful. Verifying key: 0x0352a439ec6eec3f7401bcb2c4d10e60d1e40b06bbbc5ef346e59a3675ed44ff8e
    Creating signature...
    Signature created: {
      signature: '0x2050d22bc54e5ef57b5ca3c81bf873e2bc324d866c30259b0fcc3b99602c454d471cb8db6b40bebd422345ccfc98eafed38a4f74b5e6827ba43b97095dcfabc601',
      hashType: 'keccak',
      verifyingKey: '0x0352a439ec6eec3f7401bcb2c4d10e60d1e40b06bbbc5ef346e59a3675ed44ff8e',
      message: '0x7b226d7367223a22343836353663366336663230373736663732366336343361323037333639363736653631373437353732363532303636373236663664323036353665373437323666373037393231227d'
    }
    Verifying signature...
    Signature verified successfully!
    Complete signature data: {
      signature: '0x2050d22bc54e5ef57b5ca3c81bf873e2bc324d866c30259b0fcc3b99602c454d471cb8db6b40bebd422345ccfc98eafed38a4f74b5e6827ba43b97095dcfabc601',
      hashType: 'keccak',
      verifyingKey: '0x0352a439ec6eec3f7401bcb2c4d10e60d1e40b06bbbc5ef346e59a3675ed44ff8e',
      message: '0x7b226d7367223a22343836353663366336663230373736663732366336343361323037333639363736653631373437353732363532303636373236663664323036353665373437323666373037393231227d'
    }
    ```

## Troubleshooting

**Invalid Transaction: Inability to pay some fees**

You may encounter the following error when running the script:

```shell
2025-01-21 11:51:27        RPC-CORE: submitAndWatchExtrinsic(extrinsic: Extrinsic): ExtrinsicStatus:: 1010: Invalid Transaction: Inability to pay some fees , e.g. account balance too low
2025-01-21 11:51:27        RPC-CORE: submitAndWatchExtrinsic(extrinsic: Extrinsic): ExtrinsicStatus:: 1010: Invalid Transaction: Inability to pay some fees , e.g. account balance too low
Error in signature creation/verification: Error: 1010: Invalid Transaction: Inability to pay some fees , e.g. account balance too low
    at file:///home/johnny/Code/entropy/testing-the-sdk/node_modules/@entropyxyz/sdk/dist/index.js:59:16
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
Main execution error: Error: 1010: Invalid Transaction: Inability to pay some fees , e.g. account balance too low
    at file:///home/johnny/Code/entropy/testing-the-sdk/node_modules/@entropyxyz/sdk/dist/index.js:59:16
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
```

The main thing to look out for here is the line `2025-01-21 11:51:27        RPC-CORE: submitAndWatchExtrinsic(extrinsic: Extrinsic): ExtrinsicStatus:: 1010: Invalid Transaction: Inability to pay some fees , e.g. account balance too low`. This error happens because the network has determined that the seed you have used to create your account in the script doesn't have enough funds to contrinue the registering and signing process. Take a look at the [Getting Funds]({{< relref "get-funds" >}}) guide to find out how to deal with this error.

<!--Commenting out this issue while SDK team figures out what the problem is.-->
<!--**Undefined is not iterable at verifyAndPick**-->
<!---->
<!--You may encounter this error when running the script:-->
<!---->
<!--```shell-->
<!--Creating signature...-->
<!--Error in signature creation/verification: TypeError: undefined is not iterable (can-->
<!--not read property Symbol(Symbol.iterator))-->
<!--    at #verifyAndPick (file:///home/johnny/Code/entropy/testing-the-sdk/node_modules/@entropyxyz/sdk/dist/index.js:440:26)-->
<!--    at SignatureRequestManager.sign (file:///home/johnny/Code/entropy/testing-the-sdk/node_modules/@entropyxyz/sdk/dist/index.js:330:48)-->
<!--    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)-->
<!---->
<!--[...]-->
<!--```-->
<!---->
<!--This is likely because the account you are using within the script has already been registered with the signing program we're using here. Try creating a new account, getting some test funds, and adding the seed of the new account into the script.-->
