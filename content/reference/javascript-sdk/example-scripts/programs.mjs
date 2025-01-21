import { wasmGlobalsReady, Entropy } from '@entropyxyz/sdk';
import { Keyring } from '@entropyxyz/sdk/keys';
import { readFileSync } from 'fs';

// Initialize Entropy connection.
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

// Deploy a new program.
async function deployProgram(entropy, programPath) {
    console.log('Deploying program...');
    const programBytes = readFileSync(programPath);
    const programPointer = await entropy.programs.dev.deploy(programBytes);
    console.log('Program deployed with pointer:', programPointer);
    return programPointer;
}

// Register a program with your account.
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

// Main demo function showing usage.
async function runProgramsDemo() {
    let entropy;
    try {
        // [ACTION] Replace with your seed.
        const seed = '0x786ad0e2df456fe43dd1f91ebca22e235bc162e0bb8d53c633e8c85b2af68b7a';
        
        // Initialize Entropy.
        entropy = await initializeEntropy(seed);

        // Deploy program.
        const programPointer = await deployProgram(entropy, './path/to/your/program.wasm');

        // Register program.
        const verifyingKey = await registerProgram(entropy, programPointer, {
            // Add optional initial config here, if you wanna.
            initialSetting: 'value'
        });

        // Get all programs.
        const programs = await getPrograms(entropy, verifyingKey);

        // Add another instance with different config.
        await addProgramInstance(entropy, programPointer, verifyingKey, {
            differentSetting: 'newValue'
        });

        // Get updated program list
        const updatedPrograms = await getPrograms(entropy, verifyingKey);

        // Remove program
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

// Example usage with error handling
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

