
# Node Encryption and Authentication

- When talking to Threshold Signature Servers on the Entropy network you need to both authenticate and encrypt the messages to said node.
- The authentication is simple as each node has a substrate account stored on chain referred to as a TSS account (threshold server). Messages are signed using sr25519.
- Encryption requires using an X25519 public key which gets used in [Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180.html), using the [`hpke-rs`](https://docs.rs/hpke-rs) crate.
- Putting the two together we have a [`EncryptedSignedMessage`](https://github.com/entropyxyz/entropy-core/blob/master/crates/protocol/src/sign_and_encrypt/mod.rs). JS bindings for creating these are provided in the [`entropy-protocol-nodejs`](https://www.npmjs.com/package/@entropyxyz/entropy-protocol-nodejs#Hpke) and [`entropy-protocol-web`](https://www.npmjs.com/package/@entropyxyz/entropy-protocol-web#Hpke) modules.
- The concept is simple:
  - Whenever you want to authenticate a party you use a substrate key that is tied to them (whether it is a user submits an extrinsic, or a node who has a TSS account).
  - To encrypt a message (only when talking to nodes) you use their X25519PublicKey to create an encrypted message using HPKE.
