---
sidebar_position: 1
---

# Intro

core has two different binaries that run

- The Entropy blockchain, built with [Substrate](https://docs.substrate.io/)
- Threshold server
  - Based on [Rocket](https://rocket.rs/)

![birdsEye](/img/birdsEye.png)

## The Entropy chain

General functionality from Substrate / Polkadot:
- [BABE](https://research.web3.foundation/en/latest/polkadot/block-production/Babe.html) consensus (Blind Assignment for Blockchain Extension)
  - 'Epochs' consist of a set of 'slots' for each block. 
  - Genesis block contains a random value which determines which nodes produce blocks during the first two 'epochs'. Then each epoch uses 'randomness' from two epochs ago in a 'lottery' - 'verifiable random function' to decide whether a given node may produce a block for a given slot.
  - Some slots have no block producer chosen - in which case a producer is chosen by another selection algorithm - 'round robin'.
  - Some slots have several block producers chosen - in which case all chosen nodes produce a block and there is a 'race' between forks, and the finalisation protocol determines which is kept. 
- [Grandpa](https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf) for finality (GHOST-based Recursive ANcestor Deriving Prefix Agreement).
  - Finality is the process by which the network agrees that a block will never be reverted.
- Chain runtime compiles to WASM allowing updates to be published on-chain and carried out automatically without requiring hard forking. 
- Nodes discover each other via libp2p's kademlia DHT.

Custom functionality specific to Entropy:
- [Staking pallet](https://github.com/entropyxyz/entropy-core/blob/master/pallets/staking/src/lib.rs) - staking is extended to assign Threshold server endpoints to accounts, and allow these to be modified.
- [Propagation pallet](https://github.com/entropyxyz/entropy-core/blob/master/pallets/propagation/src/lib.rs) - whenever a block is finalised, an offchain worker sends all signature requests in that block to the threshold server via an HTTP request. These messages include details of the signing committee.
- [Relayer pallet](https://github.com/entropyxyz/entropy-core/blob/master/pallets/relayer/src/lib.rs) - allows the user to tell the chain they are  registering or signing, and the threshold server to confirm when the signing protocol is completed (not yet implemented AFAIK).  This uses substrate [events](https://docs.substrate.io/build/events-and-errors). 
- Slashing - used to penalise nodes if they 'misbehave' during the signing protocol.
- Free transactions or 'zaps' [discussion on terminology](https://github.com/entropyxyz/entropy-core/issues/202) [discussion on free tx distribution methods](https://github.com/entropyxyz/entropy-core/issues/203)
