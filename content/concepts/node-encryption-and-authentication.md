---
title: "Node encryption and authentication"
---

When sending messages to threshold signature servers on the Entropy network, you must authenticate and encrypt the messages. 

The authentication process is simple: each node has a substrate account stored on the chain, referred to as a TSS account.

Messages are signed using SR25519. This encryption requires using an X25519 public key which gets used in [Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180.html), using the [`hpke-rs`](https://docs.rs/hpke-rs) crate.

By combining the two, we can generate an [`EncryptedSignedMessage`](https://github.com/entropyxyz/entropy-core/blob/master/crates/protocol/src/sign_and_encrypt/mod.rs). JavaScript bindings for creating these are available in the [`entropy-protocol-nodejs`](https://www.npmjs.com/package/@entropyxyz/entropy-protocol-nodejs#Hpke) and [`entropy-protocol-web`](https://www.npmjs.com/package/@entropyxyz/entropy-protocol-web#Hpke) modules.

The concept is simple:
- Whenever you need to authenticate a party, you use a substrate key that is associated with them, whether it's a user submitting an extrinsic or a node with a TSS account.
- When encrypting a message (only when communicating with nodes), you use their public key to create an encrypted message using HPKE.
