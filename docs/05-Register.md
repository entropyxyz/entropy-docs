# Registering

A user needs to register in order to be able to use the Entropy network to sign messages.

The SDK method for registering is [`Entropy.register`](https://entropy-api-docs.vercel.app/entropy-js/classes/core.default.html#register).

## The registering process

![Register Flow](/sequenceDiagrams/register.svg)

1. The user registers with the Entropy chain by submitting a transaction from the 'signature request account' containing the 'Account Key', initial 'ProgramsData', and chosen key visibility mode. 
    * ```ProgramsData``` - Is multiple Programs Instances. Which contain the ```program_pointer``` (the hash of the program you want to use) and the ```program_config``` for that program. On the evaluation of a signature request a threshold server will run all the programs and pass through the program config for that program.

1. The chain selects which nodes should perform a [distributed key generation (DKG)](https://docs.rs/synedrion/latest/synedrion/sessions/fn.make_key_gen_session.html) based on the current block number.
1. As each block is finalized, an off-chain worker makes an HTTP POST request to each selected threshold server with the signature request accounts of all users who have registered, as well as details of the other validator nodes in the signing subgroup. Specifically, the `/user/new` ([src](https://github.com/entropyxyz/entropy-core/blob/master/crypto/server/src/user/api.rs) [API](https://docs-api-entropy-core.vercel.app/server/user/api/fn.new_user.html)) endpoint is called with a [`OcwMessage`](https://docs-api-entropy-core.vercel.app/entropy_shared/types/struct.OcwMessage.html).
1. All selected threshold servers:
    1. Connect to each other over websocket and make a [noise handshake](https://noiseprotocol.org/noise.html) to establish an encrypted channel for protocol messages.
    1. Perform a [DKG](https://docs-api-synedrion.vercel.app/synedrion/sessions/fn.make_keygen_and_aux_session.html) and store their [key-share](https://docs-api-synedrion.vercel.app/synedrion/struct.KeyShare.html) in their [encrypted key-value store](https://docs-api-entropy-core.vercel.app/kvdb/index.html).
    1. Send the generated share to other members of their signing subgroup by POSTing to `/user/receive_key` ([src](https://github.com/entropyxyz/entropy-core/blob/master/crates/threshold-signature-server/src/user/api.rs) [API](https://docs-api-entropy-core.vercel.app/server/user/api/fn.receive_key.html)).
    1. They submit a transaction to the entropy chain to confirm the user has successfully registered.
1. On receiving a key-share via `receive_key`, the threshold server will check with the chain that the sender is in the correct subgroup, and if so store the key-share in their key-value store.
1. On receiving a confirmation transaction from all selected threshold server, the chain sets the user to a 'registered' state, making it possible to sign messages. 
