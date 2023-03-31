---
sidebar_position: 9
---

# Node Encryption and Authentication

- When talking to nodes you need to both authenticate the location of messages and encrypt the messages to said node
- The authentication is simple as each node has a substrate account stored on chain referred to as a tss account (threshold server)
- Encryption required using an X25519PublicKey which gets used in Cha Cha Poly25519 process for encryption

- The concept is simple,

  - whenever you want to authenticate a user you use a substrate key that is tide to them (wether a user who made a tx or a node who has a tss account)
  - Whenever you want to Encrypt a message (only when talking to nodes) you use their X25519PublicKey in the ChaChaPoly25119 scheme
