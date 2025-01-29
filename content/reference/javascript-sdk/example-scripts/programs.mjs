// This script is a bit of a mess, so bare with me. It's
// intended to demonstrates the main capabilities of the
// Programs API in the Entropy SDK. To use this script:
//
// 1. Replace the seed with your actual seed from the Entropy platform.
// 2. Replace the path to the WASM program with your actual program path.
// 3. Modify the program configurations as needed for your use case.
//
// Happy hunting!

import { wasmGlobalsReady, Entropy } from '@entropyxyz/sdk';
import { Keyring } from '@entropyxyz/sdk/keys';
import { readFileSync } from 'fs';

// Handles WASM initialization and connection setup.
async function initializeEntropy(seed) {
    console.log('Initializing WASM...');
    await wasmGlobalsReady();

    console.log('Generating keyring...');
    const keyring = new Keyring({ seed, debug: true });

    const entropy = new Entropy({
        endpoint: 'wss://testnet.entropy.xyz',
        keyring
    });

    await entropy.ready;
    console.log('Connected to Entropy network');
    
    return entropy;
}

// Deploy a new program  and manages all that stuff.
async function deployProgram(entropy, programPath) {
    console.log('Deploying program...');
    const programBytes = readFileSync(programPath);
    const programPointer = await entropy.programs.dev.deploy(programBytes);
    console.log('Program deployed with pointer:', programPointer);
    return programPointer;
}

// Manages program registration.
async function registerProgram(entropy, programPointer, config = {}) {
    console.log('Registering program...');
    const registerOpts = {
        programData: [{
            program_pointer: programPointer,
            program_config: config
        }]
    };

    const verifyingKey = await entropy.register(registerOpts);
    console.log('Program registered with verifying key:', verifyingKey);
    return verifyingKey;
}

// Get all programs for an account.
async function getPrograms(entropy, verifyingKey) {
    console.log('Fetching programs...');
    const programs = await entropy.programs.get(verifyingKey);
    console.log('Programs found:', programs);
    return programs;
}

// Add a new program instance.
async function addProgramInstance(entropy, programPointer, verifyingKey, config = {}) {
    console.log('Adding new program instance...');
    const newProgram = {
        program_pointer: programPointer,
        program_config: config
    };
    await entropy.programs.add(newProgram, verifyingKey);
    console.log('New program instance added');
}

// Remove a program.
async function removeProgram(entropy, programPointer) {
    console.log('Removing program...');
    await entropy.programs.remove(programPointer);
    console.log('Program removed');
}

// Show how to use all the above functions together.
async function runProgramsDemo() {
    let entropy;
    try {
        // [NOTE] Some of the variables in here get created, but
        // not used. Don't worry about that right now though.

        // [ACTION] Replace with your seed.
        const seed = '0x786ad0e2df456fe43dd1f91ebca22e235bc162e0bb8d53c633e8c85b2af68b7a';
        
        entropy = await initializeEntropy(seed);
        const programPointer = await deployProgram(entropy, './path/to/your/program.wasm');

        const verifyingKey = await registerProgram(entropy, programPointer, {
            // Add config here, if you wanna.
            initialSetting: 'value'
        });

        const programs = await getPrograms(entropy, verifyingKey);

        await addProgramInstance(entropy, programPointer, verifyingKey, {
            differentSetting: 'newValue'
        });

        const updatedPrograms = await getPrograms(entropy, verifyingKey);
        await removeProgram(entropy, programPointer);

    } catch (error) {
        console.error('Error in programs demo:', error);
        throw error;
    } finally {
        if (entropy) {
            await entropy.close();
            console.log('Connection closed');
        }
    }
}

// Example usage. With error handling. Because we're fancy like that.
async function main() {
    try {
        await runProgramsDemo();
    } catch (error) {
        console.error('Main execution error:', error);
        process.exit(1);
    }
}

// Run the demo
main();

