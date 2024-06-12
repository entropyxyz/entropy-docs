---
title: "Threshold Signature Scheme"
---

- The TSS Implementation used by Entropy is **Synedrion** [src](https://github.com/entropyxyz/synedrion) [API](https://docs.rs/synedrion)

The threshold signature scheme used is the 2021 Canetti-Gennaro-Goldfeder-Makriyannis-Peled scheme from the paper ['UC Non-Interactive, Proactive, Threshold ECDSA with Identifiable Aborts'](https://eprint.iacr.org/2021/060).

For a high-level introduction to threshold signature schemes, see [this section of the 'Entrosplainer'](../basics/entrosplainer). To summarize, they enable a group of parties to collectively compute a signature without any single party knowing the private key and requiring very little centralized coordination.

Threshold signing with ECDSA is more complicated than with Schnorr-based signature schemes such as EdDSA or BIP-340. It has taken quite some years of research to develop a scheme that has good security features while not requiring too many communication rounds between parties.

Threshold schemes are commonly referred to as $t$ of $n$, meaning $t$ parties must participate in the protocol to sign a message. Entropy currently uses $n$-of-$n$, meaning rather than choosing a threshold, **all** parties are needed to sign a message. However, this isn't as dangerous as it might sound, since Entropy has 'signing subgroups' of nodes, of which all members hold identical keyshares. So, even if a portion of Entropy nodes were to go offline, signing messages would still be possible.

## Features of CGGMP21

### Identifiable aborts

'Identifiable aborts' refers to revealing which party has misbehaved when the signing protocol fails. So, if a party gives faulty or intentionally malicious responses during the signing process, the others can determine who is responsible for the failed signature. In Entropy, the misbehaving party can be made public using Entropy's blockchain, and a new signing committee can be selected for another attempt.

### Non-interactive

Only the final round of the signing protocol requires knowledge of the message. The other rounds are known as the 'pre-signing' phase. The paper refers to this as 'non-interactive', as it enables a party to generate its 'signature share' for a given message without interacting with the other parties. The use-case for this is 'cold wallets', which function in isolation. However, to create a 'signature share' from a message, you need the data from the pre-signing stage.

### Few communication rounds

The paper proposes two different versions of the protocol, each with a different trade-off between the number of communication rounds needed and the amount of computation required. Either 5 or 8 communication rounds are needed to sign a message, with the 8-round version requiring less computation. However, it is worth noting that the 5-round version's extra computation overhead is only in the case that signing fails. Entropy uses five rounds.

### Proactive security

The paper includes a [Universally Composable security](https://eprint.iacr.org/2000/067.pdf) analysis. The authors claim that 'proactive security' against an adaptive attacker is achieved. An attacker who can control up to $t - 1$ nodes between two consecutive key-refresh phases cannot compromise the scheme.

### Distributed key generation

Distributed key generation means parties can compute their key shares without central coordination or the secret key being known to any party.

### Key refreshing

Key shares can be periodically' refreshed' to allow nodes to join or leave the network and provide proactive security. Without changing the secret key, new key shares are generated that are incompatible with the old ones. This can be achieved in three communication rounds.

### Paillier encryption as a commitment scheme

The protocol uses Paillier encryption, a type of additive homomorphic encryption. Homomorphic encryption refers to encryption schemes that allow computation on encrypted data, which gives an encrypted result without revealing the data or knowing the encryption key. Paillier is 'additive', so given two encrypted numbers and the public key used to encrypt them, we can compute the encryption of their sum without knowing what the numbers were. Also, given an encrypted number, we can compute the encryption of the multiplication of that number by a known number. 

Using these primitives, it is possible for two parties, each of which has a secret number, to compute shares of the multiplication of the two secret numbers without learning the other party's secret number. This is referred to in the paper as 'pairwise multiplication'.

So, each party has a Paillier keypair and knows the public keys of the other party. Using this pairwise multiplication technique, all parties are able to contribute or' commit' to the random nonce ($k$ value) used in ECDSA signing and to the signature itself using their private key shares.

## Links to talks

- [Presentation on the CGGMP21 scheme from Nikolaos Makriyannis](https://www.fireblocks.com/blog/ccs-threshold-ecdsa)
- [Presentation of GG20 (CGGMP21's predecessor) from Steven Goldfelder](https://youtu.be/wtxH3PuMAgQ)
