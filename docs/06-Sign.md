
# Signing

The signing process can only take place when a user is already registered on Entropy. The Process involves
having the user and a committee of validators collectively perform the signing.

The committee requires one Validator from each signing group as well as the user. The current version of the program will be executed here to determine whether or not to proceed with the signing protocol.

- The SDK method which does this is [`Entropy.sign`](https://entropy-api-docs.vercel.app/entropy-js/classes/core.default.html#sign).

For details on how signatures are actually created, see [Threshold Signature Scheme](ThresholdSigningScheme).

## Original signing process

The signing process has been recently updated and there are currently two versions implemented. The newer version allows the user to more directly interact with the threshold servers and is faster. 

![Signing Flow](/sequenceDiagrams/signing.svg)

1. A user submits an Entropy transaction to the application chain containing their 'substrate address' (derived from their account), and the hash of the message/transaction they want to sign (the actual message is never revealed to the Entropy chain).
1. The 'block proposer' selects a signing committee - and the IP addresses of all members of the committee are published in the next block. The signing committee generally consists of one validator from each 'signing group', plus the user. <!-- [Discussion on how signing committee is selected](https://github.com/entropyxyz/entropy-core/issues/211). -->
1. When a block is created, an off-chain worker notifies the threshold server of all signature requests in that block, by making a POST to [`/signer/new_party`](https://github.com/entropyxyz/entropy-core/blob/b3c86ed1d0986f1815c13e15aae55de236498c9b/crypto/server/src/signing_client/api.rs#L27). The threshold server checks it to see if they are part of the signing committee of each signature request. 
1. The user submits their full transaction (or message to be signed) to each member of the signing committee by making a POST request to [`/user/tx`](https://github.com/entropyxyz/entropy-core/blob/b3c86ed1d0986f1815c13e15aae55de236498c9b/crypto/server/src/user/api.rs#L62).
1. The Threshold server retrieves the latest version of the associated program from the entropy chain, and executes it with the message to be signed as input. Only on getting successful program output do they continue to the next step.
1. The Threshold server subscribes to receive threshold signing protocol messages from the rest of the committee, by calling POST [`signer/subscribe_to_me`](https://github.com/entropyxyz/entropy-core/blob/b3c86ed1d0986f1815c13e15aae55de236498c9b/crypto/server/src/signing_client/api.rs#L62) with the party id. Protocol messages can be either 'broadcast' to all of the committee or 'p2p' to a specific member. They are sent using server-sent events.
1. Once all members of the signing committee have subscribed, nodes participate in the signing protocol to produce a signature, using the key-shares retrieved from their key-value store.
1. If the signing process fails, nodes broadcast who the malicious/faulty signer was, which is included in the next block. Following that, the next block contains details of a new signing committee. The misbehaving signer will be 'slashed' (not yet implemented).
1. If the process is successful, the signature is returned to the user. Currently this requires the user to repeatedly poll POST `signer/signature` with the signature hash, until it successfully retrieves a signature.

## New signing process

![Signing Flow New](/sequenceDiagrams/signing-new.svg)

1. The user contacts all threshold servers in each signing group and makes a POST to `/user/sign_tx` with the message to be signed (encrypted for that node). The details of the signing groups were published on chain when the user [registered](Register).
2. On receiving a message, each node determines whether it is a member of the 'signing committee' for that message. The signing committee is chosen deterministically from the message hash. So for a given message, all nodes can figure out who the signing committee is without communicating with each other. 
3. The Threshold server checks whether the submitted transaction meets the configured constraints. If it does not, they do not continue to the next step.
4. The Threshold server subscribes to receive threshold signing protocol messages from the rest of the committee, by calling POST [`signer/subscribe_to_me`](https://github.com/entropyxyz/entropy-core/blob/b3c86ed1d0986f1815c13e15aae55de236498c9b/crypto/server/src/signing_client/api.rs#L62) with the party id. Protocol messages can be either 'broadcast' to all of the committee or 'p2p' to a specific member. They are sent using server-sent events.
5. Once all members of the signing committee have subscribed, nodes participate in the signing protocol to produce a signature, using the key-shares retrieved from their key-value store.
6. If the signing process fails, nodes broadcast who the malicious/faulty signer was, which is included in the next block. Following that, the next block contains details of a new signing committee. The misbehaving signer will be 'slashed' (not yet implemented).
7. If the process is successful, the signature is returned to the user. Currently this requires the user to repeatedly poll POST `signer/signature` with the signature hash, until it successfully retrieves a signature.
