
# Entropy Validator Nodes

[`entropy-core`](https://github.com/entropyxyz/entropy-core) is run by validator nodes in the Entropy network. It has two different binaries, both of which are run by each validator node:

- The Entropy blockchain, built with [Substrate](https://docs.substrate.io/).
- The [Threshold server](https://github.com/entropyxyz/entropy-core/tree/master/crypto/server) which has an HTTP API based on [Axum](https://docs.rs/axum)

If you are interested in how to interact with the Entropy network, rather than how it works on the back end, you might want to jump to the [SDK documentation](SDK).

![birdsEye](/img/birdsEye.png)

## The Entropy chain [src](https://github.com/entropyxyz/entropy-core) [API](https://docs-api-entropy-core.vercel.app/entropy)

The purpose of the Entropy blockchain is to have a 'single source of truth' for the information which needs to be public and which the threshold server nodes need to have consensus on. For example, we need to have agreement of which validators belong to which signing subgroups, and which subgroups will participate in signing a particular message.

### General functionality from Substrate / Polkadot:

- Uses the **[BABE consensus algorithm](https://research.web3.foundation/en/latest/polkadot/block-production/Babe.html)** (Blind Assignment for Blockchain Extension). A brief description of BABE:
  - Time is divided into 'epochs' which consist of a series of 'slots' for each block that will be published. 
  - The genesis block contains a random value which determines which nodes will produce blocks during the first two 'epochs'. After that, each epoch uses 'randomness' from two epochs ago in a kind of 'lottery', using a 'verifiable random function' to decide whether a given node may produce a block for a given slot.
  - Some slots have no block producer chosen - in which case a producer is chosen by another selection algorithm - 'round robin'.
  - Some slots have several block producers chosen - in which case all chosen nodes produce a block and there is a 'race' between forks, and the finalisation protocol determines which is kept. 
- Finality is determined by **[Grandpa](https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf)** (GHOST-based Recursive ANcestor Deriving Prefix Agreement). Finality is the process by which the network agrees that a block will never be reverted.
- The blockchain runtime compiles to WASM, which allows updates to be published on-chain and carried out automatically without requiring hard forking. 
- Nodes discover each other via [libp2p's kademlia DHT](https://github.com/libp2p/specs/blob/master/kad-dht/README.md).

### Custom functionality specific to Entropy:

- **Staking pallet** [src](https://github.com/entropyxyz/entropy-core/blob/master/pallets/staking/src/lib.rs) [API](https://docs-api-entropy-core.vercel.app/pallet_staking_extension/index.html) - staking is extended to assign Threshold server endpoints to accounts, and allow these to be modified.
- **Relayer pallet** [src](https://github.com/entropyxyz/entropy-core/blob/master/pallets/relayer/src/lib.rs) [API](https://docs-api-entropy-core.vercel.app/pallet_relayer/index.html) - allows the user to tell the chain they are  registering or signing, and the threshold server to confirm when the signing protocol is completed.  This uses substrate [events](https://docs.substrate.io/build/events-and-errors). 
- **Slashing pallet** [src](https://github.com/entropyxyz/entropy-core/tree/master/pallets/slashing) [API](https://docs-api-entropy-core.vercel.app/pallet_slashing/index.html) - used to penalise nodes if they 'misbehave' during the signing protocol. (Not yet implemented)
- **Free transactions pallet** [src](https://github.com/entropyxyz/entropy-core/tree/master/pallets/free-tx) [API](https://docs-api-entropy-core.vercel.app/pallet_free_tx/index.html) - free transactions are also known as 'zaps'. 


## The Threshold Server [src](https://github.com/entropyxyz/entropy-core/tree/master/crypto/server) [API](https://docs-api-entropy-core.vercel.app/server/index.html) 

This is the part which carries out the threshold signing protocol, together with other instances of the threshold server. It has an encrypted key-value store used for private information where consensus is not required. Since the threshold server deals with private data which must never be exposed publicly on-chain, it is distributed as a separate binary.

It has the following features: 

- The **signing client** [src](https://github.com/entropyxyz/entropy-core/tree/master/crypto/server/src/signing_client) [API](https://docs-api-entropy-core.vercel.app/server/signing_client/index.html) which performs the threshold signing protocol.
- An **encrypted key-value store** [src](https://github.com/entropyxyz/entropy-core/tree/master/crypto/kvdb) [API](https://docs-api-entropy-core.vercel.app/kvdb/index.html) for key shares, which are submitted by the user. Built with [sled](https://docs.rs/sled/latest/sled).
- Executes [programs](Programs) - upon which a decision is made as to whether to participate in signing a given message.
- An **HTTP API** for communication with users, with the entropy chain node, and with other threshold servers. 
- An account for submitting transactions to the Entropy chain. 

### Usage

`server` is a member of the `entropy-core` workspace. When you run `server`, you will be asked for a password
used to encrypt the key-value store.

Be aware there is no way to recover this password if you loose it.

The database is stored in the `.entropy` directory, which is created in the current working directory where the binary is run. You can remove this directory if you need to 'start fresh' during development.

If `server` is compiled with the `unsafe` feature enabled, some extra HTTP routes will be made available. These are for testing and development purposes only, and allow direct access to the key-value store.

If you need these, build with:

`cargo build --release --features unsafe`
