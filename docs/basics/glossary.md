---
sidebar_position: 20
---

# Glossary

Here is a list of some words and phrases found throughout the Entropy documentation that you might not be familar with.

## Autonomous Agents

A program designed to act independently, capable of executing tasks and making decisions based on predefined rules or algorithms. Autonomous agents are seen as key players in the evolution towards digital environments where AI and blockchains intersect, often call _autonomous worlds_.

## Deploy key

Key used to deploy or remove a program.

## Entropy chain

An application blockchain with the purpose of coordinating distributed signing.

## Entropy network

The set of Entropy validators.

## Intelligent Programs

A synonym for an autonomous agent (a program designed to act independently, capable of executing tasks and making decisions based on predefined rules).

## Partition

Also called a _signing subgroup_. A set of threshold servers which all hold identical keyshares. To sign a message, one member of each subgroup must participate. The Entropy chain is responsible for assigning new threshold servers to a subgroup.

## Program developer

Refers to whoever is using the Entropy network to build and deploy programs.

## Program modifiction account

The account on the Entropy chain which may update the programs a particular user employs.

## Programs

The logic defining under what conditions a threshold Server should participate in signing a particular transaction or message. Programs are compiled into WebAssembly blobs that are uploaded to the blockchain. Programs can be updated.

## Signature request account

The account on the Entropy chain that is used to initiate signature requests.

## Signing committee

A set of threshold servers who have been selected to participate in signing a particular message. This is composed of validators from different subgroups.

## Signing subgroup

Also called a _partition_. A set of Threshold servers which all hold identical keyshares. To sign a message, one member of each subgroup must participate. The Entropy chain is responsible for assigning new threshold servers to a subgroup.

## SS58

The default Substrate address format. The SS58 encoded address format is based on the Bitcoin Base-58-check format, but with a few modification specifically designed to suite Substrate-based chains.

## TSS account

Also called a _Threshold signature server account_. The Entropy chain account IDs for the threshold servers.

## Threshold Signing

A cryptographic technique that allows a group of participants to collectively produce a digital signature on a message, without any single participant having access to the complete private signing key. The private signing key is divided into multiple shares, with each participant holding one share. To produce a valid signature, a predetermined threshold number of shares (e.g., 3 out of 5) must be combined. This way, no single entity possesses the entire private key.

## Threshold server

An instance of the Entropy [threshold signature server](https://github.com/entropyxyz/entropy-core/tree/master/crates/threshold-signature-server).

## Threshold signature server Account

Also called a _TSS account_. The Entropy chain account IDs for the threshold servers.

## Transactions

a transaction submitted to the Entropy chain, or a transaction intended to be signed by the Entropy network.

## User

Refers to whoever is using the Entropy network to sign transactions or messages. This may be an individual, an organisation, or some other entity.

## Validator

A user running an _Entropy chain node_, and a _threshold server_.
