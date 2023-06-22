
# Joining The Network

This describes the process by which a new validator node can join the network.

![Joining The Network Flow](/sequenceDiagrams/joiningTheNetwork.svg)

1. The new validator runs both an Entropy chain node and threshold server.
1. New validator registers with the chain, and the chain is assigns it to a signing 'subgroup'.
<!-- // JA a mix of substrate stuff then the extra stuff below see https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-polkadot#:~:text=You%20can%20go%20to%20the,will%20become%20an%20active%20validator. -->
1. Once a new validator knows which subgroup it has joined, it asks current validators in that group for a copy of the key shares which that group holds, by calling POST `validator/sync_kvdb` with database keys of the shares it needs.
1. Once all shares have been received, informs the chain that it has successfully synced. 

## Information needed from a Validator to join the network

- `Endpoint` -  The IP address of it's threshold server
- `X25519PublicKey` - Its public encryption key for encrypting messages to and from other validators
- Threshold Server Account: Account for the threshold server to submit transactions to the Entropy chain
