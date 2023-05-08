---
sidebar_position: 1
---

# Intro

[`entropy-core`](https://github.com/entropyxyz/entropy-core) has two different binaries that run:

- The Entropy blockchain, built with [Substrate](https://docs.substrate.io/)
- The [Threshold server](https://github.com/entropyxyz/entropy-core/tree/master/crypto/server)
  - Has an HTTP API based on [Rocket](https://rocket.rs/)

![birdsEye](/img/birdsEye.png)

## The Entropy chain

General functionality from Substrate / Polkadot:
- Uses the [BABE](https://research.web3.foundation/en/latest/polkadot/block-production/Babe.html) consensus (Blind Assignment for Blockchain Extension). A brief description of BABE:
  - Time is divided into 'epochs' which consist of a series of 'slots' for each block that will be published. 
  - The genesis block contains a random value which determines which nodes will produce blocks during the first two 'epochs'. After that, each epoch uses 'randomness' from two epochs ago in a kind of 'lottery', using a 'verifiable random function' to decide whether a given node may produce a block for a given slot.
  - Some slots have no block producer chosen - in which case a producer is chosen by another selection algorithm - 'round robin'.
  - Some slots have several block producers chosen - in which case all chosen nodes produce a block and there is a 'race' between forks, and the finalisation protocol determines which is kept. 
- Finality is determined by [Grandpa](https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf) (GHOST-based Recursive ANcestor Deriving Prefix Agreement). Finality is the process by which the network agrees that a block will never be reverted.
- The blockchain runtime compiles to WASM, which allows updates to be published on-chain and carried out automatically without requiring hard forking. 
- Nodes discover each other via [libp2p's kademlia DHT](https://github.com/libp2p/specs/blob/master/kad-dht/README.md).

Custom functionality specific to Entropy:
- [Staking pallet](https://github.com/entropyxyz/entropy-core/blob/master/pallets/staking/src/lib.rs) - staking is extended to assign Threshold server endpoints to accounts, and allow these to be modified.
- [Propagation pallet](https://github.com/entropyxyz/entropy-core/blob/master/pallets/propagation/src/lib.rs) - whenever a block is finalised, an offchain worker sends all signature requests in that block to the threshold server via an HTTP request. These messages include details of the signing committee.
- [Relayer pallet](https://github.com/entropyxyz/entropy-core/blob/master/pallets/relayer/src/lib.rs) - allows the user to tell the chain they are  registering or signing, and the threshold server to confirm when the signing protocol is completed (not yet implemented AFAIK).  This uses substrate [events](https://docs.substrate.io/build/events-and-errors). 
- Slashing - used to penalise nodes if they 'misbehave' during the signing protocol. (Not yet implemented)
- Free transactions or 'zaps' 

<!-- [discussion on terminology around zaps](https://github.com/entropyxyz/entropy-core/issues/202) -->
<!-- [discussion on free tx distribution methods](https://github.com/entropyxyz/entropy-core/issues/203) -->

## The Threshold Server 

This is the part which carries out the threshold signing protocol, together with other instances of the threshold server.

It has the following features: 
- The 'signing client' which performs the threshold signing protocol.
- An encrypted key-value store for key shares, which are submitted by the user.
- The constraint-checking logic - upon which a decision is made as to whether to participate in signing a given message.
- An HTTP API for communication with users, with the entropy chain node, and with other threshold servers. 
- An account for submitting transactions to the Entropy chain. 
