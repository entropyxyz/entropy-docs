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

## Application chain

A blockchain that is exclusively designed for a single application, unlike a public blockchain designed for multiple apps. Also called an _application-specific blockchain_, or _appchain_.

## Autonomous agent

A program designed to act independently, capable of executing tasks and making decisions based on predefined rules or algorithms. Autonomous agents are seen as key players in the evolution towards digital environments where AI and blockchains intersect, often called _autonomous worlds_.

Autonomous agents are sometimes also called [intelligent programs](#intelligent-program).

## Consumer key

A synonym for a [device key or deploy key](#device-key).

## Device key

A key that can request signatures from Entropy Programs. By default, device keys cannot install Programs or modify the settings of Programs. However, Programs can be given admin-key privileges. A device key does not need to hold funds in order to perform actions.

## Entropy chain

An application-specific layer 1 blockchain with the purpose of coordinating distributed signing.

## Entropy network

The set of Entropy validators.

## Intelligent program

A synonym for an [autonomous agent](#autonomous-agent).

## Partition

Also called a _signing subgroup_. A set of threshold signing servers that all hold identical keyshares. To sign a message, one member of each subgroup must participate. The Entropy chain is responsible for assigning new threshold signing servers to a subgroup.

## Program

The logic defining what conditions a threshold signing server (TSS) should participate in signing a particular transaction or message. Programs are compiled into WebAssembly blobs that are uploaded to the blockchain, and can be updated by subsequent authenticated, valid transactions.

Programs run when a [device key](#device-key) requests a signature from the Program. Each Program returns `true` or `false`. If the Program returns `true`, the Entropy Network executes signing, and a signature is returned to the requesting device key.

## Program developer

Refers to the human or humans using the Entropy Network to build and deploy programs.

## Program dev key

An authorization key that permits its holder to deploy Programs for installation onto the Entropy blockchain by admin keys. Program dev keys do not need to be registered.

## Registration

The process of establishing an Entropy account. Registered accounts can be initialized with Programs and modify those Programs later.

## Signature request account

The account on the Entropy chain that is used to initiate signature requests.

## Signing committee

A set of threshold signing servers that have been selected to participate in signing a particular message. This is composed of validators from different [signing subgroups](#signing-subgroup).

## Signing subgroup

A set of threshold signing servers that all hold identical keyshares. To sign a message, one member of each subgroup must participate. The Entropy chain is responsible for assigning new threshold servers to a subgroup.

A signing subgroup is also called a _partition_.

## SS58

The default Substrate address format. The SS58 encoded address format is based on the Bitcoin Base-58-check format but with a few modifications specifically designed to suit Substrate-based chains.

## TSS account

A _threshold signature server account_ is the identifier for an Entropy chain account belonging to a given threshold signing server. These servers are sometimes referred to as threshold _signing_ servers.

## Threshold signing

A cryptographic technique that allows a group of participants to collectively produce a digital signature on a message without any single participant having access to the complete private signing key. The private signing key is divided into multiple shares, with each participant holding one share. To produce a valid signature, a predetermined threshold number of shares (e.g., 3 out of 5) must be combined. This way, no single entity possesses the entire private key.

## Threshold server

An instance of the Entropy [threshold signature server](../concepts/threshold-signature-scheme.md).

## Transaction

A transaction is a discrete request submitted for inclusion on the Entropy blockchain containing a Program or account registration, modification, or other arbitrary data that a user such as a program developer or autonomous agent wants to have signed and validated by the Entropy Network.

## User

Refers to whoever is using the Entropy network to sign transactions or messages. This may be an individual, an organisation, or some other entity.

## Validator

A device running both an _Entropy chain node_, and a _threshold signing server_.
