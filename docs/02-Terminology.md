# Terminology

- 'Entropy network' - the set of entropy 'validators'. 
- ['Entropy chain'](Validators#the-entropy-chain-src-api) - an application blockchain built with [Substrate](https://substrate.io), with the purpose of coordinating distributed signing.
- Every ['validator'](Validators) runs both a 'Entropy Chain Node' and 'Threshold Server'.
- ['Threshold server'](Validators#the-threshold-server-src-api) - an instance of the entropy [threshold signing server](https://github.com/entropyxyz/entropy-core/tree/master/crypto/server). This consists of the 'signing client' which performs the threshold signing protocol, an encrypted key-value store for key shares, the constraint-checking logic, and an HTTP api for communication with users, with the entropy chain node, and with other threshold servers. The threshold server also has an account for submitting transactions to the Entropy chain. 
- 'Signing committee' - a set of Threshold Servers who have been selected to participate in signing.
- ['Constraints'](Constraints) - rules defining under what conditions a Threshold Server should participate in signing a particular transaction or message. Currently only allow and block lists are implemented, but arbitrary constraints may be defined.
- 'Constraint modification account' - the account on the Entropy chain which may update the constraints for a particular user / organisation / entity.
- ['Signing subgroup' or 'Partition'](SigningGroupSelection) - a set of Threshold servers which all hold identical keyshares. The Entropy chain is responsible for assigning new Threshold Servers to a subgroup.
- 'User' - here refers whoever is using the entropy network to sign transactions or messages. This may be an individual, organisation or some other entity.
- 'Stash keys' - the Entropy chain account IDs for the threshold servers.
- Be aware that the term 'transaction' can refer to both transactions submitted to the Entropy chain and transactions intended for signing by the Entropy network.
