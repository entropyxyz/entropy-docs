
# Threshold Signature Scheme

- The TSS Implementation used by Entropy is **Synedrion** [src](https://github.com/entropyxyz/synedrion) [API](https://docs.rs/synedrion)

The threshold signature scheme used is the 2021 Canetti-Gennaro-Goldfeder-Makriyannis-Peled scheme from the paper ['UC Non-Interactive, Proactive, Threshold ECDSA with Identifiable Aborts'](https://eprint.iacr.org/2021/060).

For a high level introduction to threshold signature schemes, see [this section of the 'Entrosplainer'](Intro#hello-i-would-like-one-cryptography) - to summarize, they enable a group of parties to collectively compute a signature without any single party knowing the private key, and requiring very little centralized coordination.

Doing threshold signing with ECDSA is more complicated than with Schnorr-based signature schemes such as EdDSA, or with RSA. It has taken quite some years of research to come up with a scheme which has good security features whilst not requiring too many communication rounds between parties.
<!-- because $s$ computation is linear with Schnorr (explain) -->

<!-- Sigsk(M ) -->
<!-- Sample k ← Zq -->
<!-- R ← k · G = (rx, ry ) -->
<!-- r ← rx mod q -->
<!-- s ← k−1 (H(M ) + r · sk) mod q -->
<!-- return (r, s) -->

Threshold schemes are commonly referred to as $t$ of $n$, meaning $t$ parties must participate in the protocol in order to sign a message. Entropy currently uses $n$-of-$n$, meaning rather than choosing a threshold, **all** parties are needed to sign a message. However, this isn't as dangerous as it might sound, since Entropy has 'signing subgroups' of nodes, of which all members hold identical keyshares. So even if a portion of Entropy nodes were to go offline, it would still be possible to sign messages.

## Features of CGGMP21

### Identifiable aborts

'Identifiable aborts' refers to being able to reveal which party has misbehaved when the signing protocol fails. So if a party gives faulty or intentionally malicious responses during the signing process, the others can determine who is responsible for the failed signature. In Entropy, the misbehaving party can be made public using the Entropy's blockchain, and a new signing committee selected for another attempt.

### Non-interactive

Only the final round of the signing protocol requires knowledge of the message. The other rounds are known as the 'pre-signing' phase. This is what the paper refers to as being 'non-interactive', as it enables having a party generate its 'signature share' for a given message without interacting with the other parties. The use-case for this is 'cold wallets' which function in isolation. Note however in order to create a 'signature share' from a message, you do need the data from the pre-signing stage.

### Few communication rounds

The paper proposes two different versions of the protocol with a different trade-off between number of communication rounds needed and the amount of computation require. Either 5 or 8 communication rounds are needed to sign a message, with the 8 round version requiring less computation. However, it is worth noting that the 5 round version's extra computation overhead is only in the case that signing fails. Entropy uses 5 rounds.

### Proactive security

The paper includes a [Universally Composable security](https://eprint.iacr.org/2000/067.pdf) analysis. The authors claim that 'proactive security' against an adaptive attacker is achieved. More specifically, an attacker who is able to completely control up to $t - 1$ nodes between two consecutive key-refresh phases is unable to compromise the scheme.

### Distributed key generation

Distributed key generation means parties can compute their key shares without central coordination and without any party having knowledge of the secret key.

### Key refreshing

In order to allow nodes to join or leave the network, as well as to provide proactive security, key-shares can be periodically 'refreshed'. Without changing the secret key, new key shares are generated which are incompatible with the old ones. This can be achieved in 3 communication rounds.

### Paillier encryption as a commitment scheme

The protocol uses Paillier encryption, which is a type of additive homomorphic encryption. Homomorphic encryption refers to encryption schemes which allow computation to be performed on encrypted data, which give an encrypted result without revealing the data or knowing the encryption key. Paillier is 'additive', so given two encrypted numbers and the public key used to encrypt them, we can compute the encryption of their sum, without knowing what the numbers were. Also, given an encrypted number, we can compute the encryption of the multiplication of that number by a known number. 

Using these primitives, it is possible for two parties, each of which have a secret number, to compute shares of the multiplication of the two secret numbers, without learning the other party's secret number. This is referred to in the paper as 'pairwise multiplication'.

So each party has a Paillier keypair and knows the public keys of each other party. Using this pairwise multiplication technique all parties are able to make a contribution or 'commitment' to the random nonce ($k$ value) used in ECDSA signing as well as to the signature itself using their private key shares.

## Links to talks

- [Presentation on the CGGMP21 scheme from Nikolaos Makriyannis](https://www.fireblocks.com/blog/ccs-threshold-ecdsa)

- [Presentation of GG20 (CGGMP21's predecessor) from Steven Goldfelder](https://youtu.be/wtxH3PuMAgQ)
