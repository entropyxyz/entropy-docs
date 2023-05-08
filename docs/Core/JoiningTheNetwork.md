---
sidebar_position: 4
---

# Joining The Network

- For a step by step guide on joining as a validator (see here)
- Validators need to join the network
- They need to be placed into a signing subgroup by the chain
- They then need a copy of all the relevant key shares

## Information needed from a Validator to join the network

- Endpoint: The address of the threshold server
- X25519PublicKey: For encrypting message to and from validators
- Threshold Server Account: Account for sending info to the chain

![Joining The Network Flow](/sequenceDiagrams/joiningTheNetwork.svg)

From pegs notes
- A new validator runs both an Entropy chain node and threshold server.
- New validator registers with the chain (how?), and the chain is assigns it to a signing 'subgroup' // JA a mix of substrate stuff then the extra stuff below see https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-polkadot#:~:text=You%20can%20go%20to%20the,will%20become%20an%20active%20validator.
- Once a new validator knows which subgroup it has joined, it asks current validators in that group for the key shares.
- Once all shares have been received, informs the chain that it has successfully synced. 
