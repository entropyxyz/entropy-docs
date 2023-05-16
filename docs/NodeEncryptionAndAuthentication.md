---
sidebar_position: 7
---

# Node Encryption and Authentication

- When talking to nodes on the Entropy network you need to both authenticate the location of messages and encrypt the messages to said node.
- The authentication is simple as each node has a substrate account stored on chain referred to as a TSS account (threshold server)
- Encryption requires using an X25519 public key which gets used in [ChaCha20Poly1305](https://en.wikipedia.org/wiki/ChaCha20-Poly1305) process for encryption

- The concept is simple:

  - Whenever you want to authenticate a party you use a substrate key that is tied to them (whether it is a user who made a transaction, or a node who has a TSS account).
  - Whenever you want to encrypt a message (only when talking to nodes) you use their X25519PublicKey in the ChaCha20Poly1305 scheme.
