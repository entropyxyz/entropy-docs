import { Keyring } from '@entropyxyz/sdk/keys';
import { wasmGlobalsReady, Entropy } from '@entropyxyz/sdk';
import { Buffer } from 'buffer';

async function runEntropyDemo() {
    try {
        // Wait for WASM to be ready
        console.log('Initializing WASM...');
        await wasmGlobalsReady();
        console.log('WASM initialized successfully');

        // Replace this with your actual seed from the Entropy platform
        const seed = '0x2d4be88e8c759f4e614bb6f95bde9f625fed38c4b343fa72bf4de98a2f1c8fdf';
        
        // Initialize the keystore with your seed
        const keyStore = { seed };
        console.log('Keystore initialized');

        // Create a new keyring instance
        const keyring = new Keyring(keyStore);
        console.log('Keyring created successfully');

        // Configure the Entropy connection
        const opts = {
            endpoint: 'wss://testnet.entropy.xyz', // Use testnet endpoint
            keyring
        };

        // Initialize Entropy
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

async function createAndVerifySignature(entropy) {
    try {
        // Create a message to sign
        const message = 'Hello world: signature from entropy!';
        console.log(`Creating signature for message: ${message}`);
        
        const msgObject = {
            msg: Buffer.from(message).toString('hex')
        };

        // Register with the network
        console.log('Registering with network...');
        const verifyingKey = await entropy.register();
        console.log('Registration successful. Verifying key:', verifyingKey);

        // Create signature
        console.log('Creating signature...');
        const signatureData = await entropy.signWithAdaptersInOrder({
            msg: msgObject,
            order: ['deviceKeyProxy']
        });
        console.log('Signature created:', signatureData);

        // Verify the signature
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
    } finally {
        // Clean up by closing the connection
        await entropy.close();
    }
}

// Main execution
async function main() {
    try {
        const entropy = await runEntropyDemo();
        const signatureData = await createAndVerifySignature(entropy);
        console.log('Complete signature data:', signatureData);
    } catch (error) {
        console.error('Main execution error:', error);
    }
}

// Run the demo
main();
