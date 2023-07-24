# Entrosplainer

### good words 50 words

- Credibly neutral
- Platform where anyone can launch their own fireblocks / coinbase custody

### Bad words

-

### Use Cases

- Decentralized 2FA
- Decentralized certificate authority

- Asset recovery
- Intents
- Arb Constraints
- access control

- tss as a service
- key management
- governance
- mixer as a service
- account abstraction
  A

Entropy is a decentralized custodial service.

This is a high level explanation of Entropy.

**Entropy** is a Chain-Agnostic Decentralized Asset Custodian. Entropy is constructed from Proof of Stake [application chain](https://www.figment.io/resources/smart-contracts-vs-application-specific-blockchains) deploying a [Threshold Signature Scheme](https://en.wikipedia.org/wiki/Threshold_cryptosystem) to secure secret key shares, built with [Substrate](https://substrate.io/).

There's a lot to unpack here. What's an Asset Custodian? Why would we need a chain, and how do we guarantee that it will be decentralized? How does this relate to a multisignature? What's the deal with the TSS? This post unpacks all that and more.

## 👉️👈️ Asset Custodian?

An asset custodian is a service that holds your funds, like a wallet. The "you" in this case could be just you, or it could be you and a whole organization. An asset custodian should be able to do a couple of things that most wallets can't:

- You may have funds across **multiple addresses**, and maybe across **multiple chains**. An asset custodian should be a **single interface** between you and all of these accounts. We call the capacity to interoperate with all chains being **chain agnostic**.
- An asset custodian should be able to represent **multi-user accounts**: accounts with shared access by multiple parties. The **permissions** for each of these parties may be different. Some transactions may require multi-user sign-off, as in a multisignature.
- A user should be able to specify **arbitrary constraints** on how funds move through the custodian. Features like **per-user time-bound spending limits**, **time-locked transactions**, and **how each user interacts with the custodian** should be able to be flexibly set by the user or organization.
- The custodian should be **well-secured**, while anticipating the need for emergency scenarios for **secure account recovery**.

We further believe that services should be **censorship resistant**, **credibly neutral**, and **transparent to users**. We believe that **decentralization** is the only effective way to guarantee these properties. Eliminating centralized intermediary service providers reduces the surface for services to become targets for manipulation and attack.

Smart contract applications achieve decentralization by delegating the execution of application logic to a set of decentralized service providers: miners or validators, or more generally, nodes.

Smart contracts are very powerful primitives for building decentralized applications. But smart contracts are **limited** to the set of operations exposed by the smart contract infrastructure. Smart contracts typically cannot:

- instruct nodes to construct calls outside the network (chain)
- hold private state
- cheaply perform computation-intensive operations that are often required by cryptography
- automate recurring or scheduled computation
- change or update rules for smart contract execution; upgradeable contracts solve this but create other problems
- change properties of the underlying network (block times, transaction subsidy rules, privacy features, etc.)

The construction of a Chain-Agnostic Decentralized Asset Custodian relies on these features. Entropy would be impossible to construct on a smart contract platform.

But building our own chain requires us to consider _how_ we will achieve decentralization. Decentralization is a complex topic, and some application chains have been accused of being very not-decentralized. Let's unpack that next.

## But is it Decentralized AF?\*\*

Smart contracts share security and decentralization properties with the underlying network. The most basic metric for decentralization is node count. At the time of writing (October 2022), there are about [13,500](https://www.nodewatch.io/) Ethereum nodes, and [13,000](https://bitnodes.io/nodes/) Bitcoin nodes. However, because each infrastructure provider is only minimally incentivized, the [Ethereum](https://www.statista.com/statistics/1334652/ethereum-eth-biggest-staking-pool-groups/) and [Bitcoin](https://blockchair.com/bitcoin/charts/hashrate-distribution) networks rely on pooled node operators. In recent events, [a particular smart contract](https://www.coindesk.com/layer2/2022/09/28/the-problem-tornado-cash-raises-about-base-layer-censorship-on-ethereum/) has been heavily censored on the Ethereum network, as pooled node operators refuse to include transactions involving the smart contract.

Application chains tend to have fewer nodes than general smart contract platforms. But there is an advantage in finding a middle ground: node operators actually run their own nodes. Decentralization is not a monolithic property; attempting to increase node count arbitrarily can ironically **decrease the decentralization** of a network. By finding a middle ground in node count, a network can avoid 3 node pools controlling over 50% of a network's resources.

The Entropy network will be run by about one hundred independent validators. Besides decentralization, there are other reasons we would intentionally choose to keep the node count in this middle ground.

Because Entropy's nodes hold onto shares of private user information (more on that in the next section), there are strong anti-incentives in allowing nodes to join and leave the network frequently. For these reasons, the number of nodes on the Entropy network needs to be high enough to guarantee decentralized service, but not so high as to misalign the incentives of Entropy validators against users.

We're going to shift attention now to how Entropy works.

## Hello, I would like one cryptography

The easiest way to explain a Threshold Signature Scheme (TSS) is to start with a multisignature.

A $t$-of-$n$ multisignature is a way for $t$ (**t**hreshold) participants out of $n$ possible participants to construct a valid signature.
Each participant signs a message with their private key. A trusted centralized coordinator verifies that the $t$ signatures are valid. In blockchain contexts, the central coordinator is typically spelled "smart contract."

![Signing Flow](/img/flow-diagram.png)

_2-of-3 Multisignature_.

Similarly, a $t$-of-$n$ TSS is a way for $t$ participants out of $n$ possible participants to construct a valid signature, but **without a centrally trusted coordinator.**

Participants in a TSS don't hold onto independent private keys. Before a signature can be constructed, a single private key is _split_ into $n$ secret key shares, either by a central dealer, or a Distributed Key Generation (DKG) step. DKGs have the advantage that every party contributes randomness to generate the private key, but _no party has knowledge of the shared private key_. A TSS scheme constructs valid signatures despite the fact that no party has knowledge of this shared private key.

Threshold Signatures eliminate the requirement for a trusted coordinator, and are a powerful and flexible cryptographic primitive.

![Threshold Signing Flow](/sequenceDiagrams/thresholdSigning.svg)

### _2-of-3 Threshold Signature Scheme_

In the Entropy scheme, most key shares are custodied by nodes on the Entropy Network, while the user holds onto one or more key shares.

Much like a multisignature, the Entropy network is a decentralized intermediary between users and their funds. But, unlike a multisignature, Entropy can represent and custody funds sitting on any other blockchain, without complicated cross-chain communication. Here's how.

## Entropy in 3️⃣0️⃣ seconds 🕐️

Alice, a user or organization, wants to construct a transaction for 20 cryptoBux on chain X, from her Entropy-custodied account.

- Alice uses the Entropy front end (or any other Entropy-integrated wallet) to sign a message containing the desired transaction with her Entropy private key, asking the Entropy network to validate the transaction and construct a signature.
- The message is validated by the next Entropy block producer. If the transaction is valid, it gets included in the next block, and a signing party is selected from the Entropy nodes, who hold onto shares of Alice's private key.
- Alice and the network execute a TSS, producing a valid signature.
  - If the signature fails, the signers are able to prove the identity of the malicious co-signer. This proof can be published in the next block as a slashing-attestation for that node, and a new signing party may be selected.
- The Entropy front end asks Alice to confirm before submitting the transaction to chain X, at which point it is submitted as a normal transaction on chain X.

The scope of the Entropy network is well-constrained: check validity, allow users to adjust the definition of validity, and construct signatures over valid messages.

Because Threshold Signature Schemes can be performed "off-chain" (from the perspective of the transaction endpoint), while still producing a valid signature, the final transaction is **much less expensive than a smart contract call**. The scheme is credibly **decentralized:** unlike centralized custody solutions, the Entropy Network distributes responsibility for operating the custodian. And elegantly, the network can represent accounts on **any other chain**, without relying on expensive cross-chain communication.

## Wrap up

So yeah. In this 'splainer we tried to unpack:

- What an asset custodian should be able to do, and how it relates to a wallet or a multisignature
- How application chains can achieve decentralization, despite smaller node pools
- How Threshold Signature Schemes differ from multisignatures
- How the Entropy Network will work, as a new kind of decentralized infrastructure for securing your funds

Keep an eye out for our upcoming testnet release!

And we're hiring {put link to hiring page here}
