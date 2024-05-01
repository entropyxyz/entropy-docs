---
sidebar_position: 20
---

# Glossary

Here is a list of some words and phrases found throughout the Entropy documentation that you might not be familar with.

<!-- ## Autonomous Agents -->

<!-- ## Intelligent Programs -->

<!-- ## Threshold Signing -->

## Deploy key

Key used to deploy or remove a program.

## Entropy chain

An application blockchain with the purpose of coordinating distributed signing.

## Entropy network

The set of Entropy validators.

## Partition

Also called a _signing subgroup_. A set of threshold servers which all hold identical keyshares. To sign a message, one member of each subgroup must participate. The Entropy chain is responsible for assigning new threshold servers to a subgroup.

## Programs

The logic defining under what conditions a threshold Server should participate in signing a particular transaction or message. Programs are compiled into WebAssembly blobs that are uploaded to the blockchain. Programs can be updated.

## Program developer

Refers to whoever is using the Entropy network to build and deploy programs.

## Program modifiction account

The account on the Entropy chain which may update the programs a particular user employs.

## Signature request account

The account on the Entropy chain that is used to initiate signature requests.

## Signing committee

A set of threshold servers who have been selected to participate in signing a particular message. This is composed of validators from different subgroups.

## Signing subgroup

Also called a _partition_. A set of Threshold servers which all hold identical keyshares. To sign a message, one member of each subgroup must participate. The Entropy chain is responsible for assigning new threshold servers to a subgroup.

## TSS account

Also called a _Threshold signature server account_. The Entropy chain account IDs for the threshold servers.

## Threshold signature server Account

Also called a _TSS account_. The Entropy chain account IDs for the threshold servers.

## User

Refers to whoever is using the Entropy network to sign transactions or messages. This may be an individual, an organisation, or some other entity.

## Threshold server

An instance of the Entropy [threshold signature server](https://github.com/entropyxyz/entropy-core/tree/master/crates/threshold-signature-server). This consists of:

- the _signing client_ which performs the threshold signing protocol
- an encrypted key-value store for key shares
- the execution of 'programs'
- an HTTP API which is used for communication with users within the Entropy chain, and with other threshold servers. 

The threshold server also has an account for submitting transactions to the Entropy chain, refered to as the _TSS account_.

## Transactions

Refers to: 

- transactions submitted to the Entropy chain.
- transactions intended for signing by the Entropy network.

## Validator

A user running an _Entropy chain node_, and a _threshold server_.
