---
title: "Glossary"
---

Here is a list of some words and phrases found throughout the Entropy documentation that you might not be familar with.

## Account

All of the information associated with a specific program for a particular user or entity. An account is established with an [admin key](#admin-key). An admin key can assign capabilities to [device keys](#device-keys).

## Admin key

A key that allows you to deploy programs and modify the settings of those programs. Admin keys cannot request signatures. This key must be funded in order to perform some actions.

## Adapter

Plugins that provide support for different chains and program configurations. For example, an adapter can be used to define a specific hashing function to use when signing. Different chains have different signing algorithms; this allows us to support them all.

## Autonomous Agents

A program designed to act independently, capable of executing tasks and making decisions based on predefined rules or algorithms. Autonomous agents are seen as key players in the evolution towards digital environments where AI and blockchains intersect, often call _autonomous worlds_. Sometimes called an [intelligent program](#intelligent-program).

## Consumer key

A synonym for [deploy key](#device-key).

## Device keys

A key that can request signatures from programs. By default, device keys cannot install programs or modify the settings of programs -- however programs can be given admin-key privalages. This key does not need to hold funds in order to perform actions.

## Entropy chain

An application blockchain with the purpose of coordinating distributed signing.

## Entropy network

The set of Entropy validators.

## Intelligent program

A synonym for an [autonomous agent](#autonomous-agent).

## Partition

Also called a _signing subgroup_. A set of threshold servers which all hold identical keyshares. To sign a message, one member of each subgroup must participate. The Entropy chain is responsible for assigning new threshold servers to a subgroup.

## Program

The logic defining what conditions a threshold Server should participate in signing a particular transaction or message. Programs are compiled into WebAssembly blobs that are uploaded to the blockchain. Programs can be updated.

Programs run when a [device key](#device-key) requests a signature from the program. Each program returns `true` or `false`. If the program returns `true`, the Entropy network executes signing, and a signature is returned to the requesting device key.

A program has three inputs:

- **Config**:
- **Auxilary data**:
- **Oracle data**: not used at this time, but will eventually take in data from an external oracle.

## Program developer

Refers to whoever is using the Entropy network to build and deploy programs.

## Program dev key

Can deploy programs to be installed by admin keys. Program dev keys do not need to be registered.

## Programs



## Registration

The process of establishing an account. Registered accounts can be initialized with programs and modify those programs later.

## Signature request account

The account on the Entropy chain that is used to initiate signature requests.

## Signing committee

A set of threshold servers that have been selected to participate in signing a particular message. This is composed of validators from different subgroups.

## Signing subgroup

Also called a _partition_. A set of Threshold servers that all hold identical keyshares. To sign a message, one member of each subgroup must participate. The Entropy chain is responsible for assigning new threshold servers to a subgroup.

## SS58

The default Substrate address format. The SS58 encoded address format is based on the Bitcoin Base-58-check format but with a few modifications specifically designed to suit Substrate-based chains.

## TSS account

Also called a _Threshold signature server account_. The Entropy chain account IDs for the threshold servers.

## Threshold Signing

A cryptographic technique that allows a group of participants to collectively produce a digital signature on a message without any single participant having access to the complete private signing key. The private signing key is divided into multiple shares, with each participant holding one share. To produce a valid signature, a predetermined threshold number of shares (e.g., 3 out of 5) must be combined. This way, no single entity possesses the entire private key.

## Threshold server

An instance of the Entropy [threshold signature server](https://github.com/entropyxyz/entropy-core/tree/master/crates/threshold-signature-server).

## Threshold signature server Account

Also called a _TSS account_. The Entropy chain account IDs for the threshold servers.

## Transactions

A transaction submitted to the Entropy chain or a transaction intended to be signed by the Entropy network.

## User

Refers to whoever is using the Entropy network to sign transactions or messages. This may be an individual, an organisation, or some other entity.

## Validator

A device running an _Entropy chain node_, and a _threshold server_.
