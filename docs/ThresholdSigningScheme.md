---
sidebar_position: 10
---

# Threshold Signature Scheme

- TSS Implementation used by Entropy: [src](https://github.com/entropyxyz/cggmp21) [API](https://entropy-api-docs.vercel.app/cggmp21/cggmp21/index.html)

The threshold signature scheme used is the 2021 Canetti-Gennaro-Goldfeder-Makriyannis-Peled scheme from the paper ['UC Non-Interactive, Proactive, Threshold ECDSA with Identifiable Aborts'](https://eprint.iacr.org/2021/060).

For a high level introduction to threshold signature schemes, see [this section of the introsplainer](Intro#hello-i-would-like-one-cryptography) - to summarize, they enable a group of parties to collectively compute a signature without any single party knowing the private key, and without requiring centralized coordination.

Doing threshold signing with ECDSA is more complicated than with Schnorr-based signature schemes such as EdDSA, or with RSA. It has taken quite some years of research to come up with a scheme which has good security features whilst not requiring too many communication rounds between parties.
<!-- because $s$ computation is linear with Schnorr (explain) -->

<!-- Sigsk(M ) -->
<!-- Sample k ← Zq -->
<!-- R ← k · G = (rx, ry ) -->
<!-- r ← rx mod q -->
<!-- s ← k−1 (H(M ) + r · sk) mod q -->
<!-- return (r, s) -->

Threshold schemes are commonly referred to as t of n, meaning t + 1 parties must participate in the protocol in order to sign a message. Entropy currently uses t-of-t, meaning rather than choosing a threshold, **all** parties are needed to sign a message. However, this isn't as dangerous as it might sound, since Entropy has 'signing subgroups' of nodes, of which all members hold identical keyshares. So even if a portion of Entropy nodes were to go offline, it would still be possible to sign messages.

## Features of CGGMP21

'Identifiable aborts' refers to being able to reveal which party has misbehaved when the signing protocol fails. So if a party gives faulty or intentionally malicious responses during the signing process, the others can determine who is responsible for the failed signature. In Entropy, the misbehaving party can be made public using the Entropy's blockchain, and a new signing committee selected for another attempt.

Only the final round of the signing protocol requires knowledge of the message. The other rounds are known as the 'pre-signing' phase. This is what the paper refers to as being 'non-interactive', as it enables having a party generate its 'signature share' for a given message without interacting with the other parties. The use-case for this is 'cold wallets' which function in isolation.

The paper proposes two different versions of the protocol with a different trade-off between number of communication rounds needed and the amount of computation require. Either 4 or 7 communication rounds are needed to sign a message, with the 7 round version requiring less computation. Entropy uses 4 rounds.

The protocol uses Paillier encryption, which is a type of additive homomorphic encryption. Homomorphic encryption refers to encryption schemes which allow computation to be performed on encrypted data, which give an encrypted result without revealing the data or knowing the encryption key. Paillier is 'additive', so given two encrypted numbers and the public key used to encrypt them, we can compute the encryption of their sum, without knowing what the numbers were.

Each party has a Paillier keypair and knows the public keys of each other party. They are able to all make a contribution or 'commitment' to, for example, the random nonce ($k$ value) used in ECDSA signing, and can check that they have consensus on the value used. 

The protocol includes distributed key generation, meaning parties can compute their key shares without central coordination and without any party having knowledge of the secret key. However Entropy currently uses a centralized key generation, performed by the user. The user computes a set of shares on their own device and then sends those shares to Entropy threshold servers. This allows them to use existing key management techniques (such as backups using mnemonic codes, or hierarchical deterministic wallets) and essentially the user maintains ultimate control. However in the future we may switch to a distributed key generation in which the user participates.

## Links to talks

- [Presentation on the CGGMP21 scheme from Nikolaos Makriyannis](https://www.nist.gov/video/mpts-2020-talk-3a3-uc-non-interactive-proactive-threshold-ecdsa-identifiable-aborts)

- [Presentation of GG20 (CGGMP21's predecessor) from Steven Goldfelder](https://youtu.be/wtxH3PuMAgQ)
