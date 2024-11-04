---
title: "Registering"
lead: "This section explains the technical steps involved in registering a user account on the Entropy network, including the selection of programs and configurations, and the generation of a verifying key."
---

The SDK method for registering is [`Entropy.register`](https://github.com/entropyxyz/sdk/blob/main/README.md#register).

## The registering process

```mermaid
sequenceDiagram
    actor User
    participant Chain

    User ->> Chain: Informs chain of registration. And selects programs and configs associated with account
    Chain ->> User: Selects user's derivation path and returns verifying key associated with that user
```

1. The user registers with the Entropy chain by submitting a transaction from any account containing the 'Account Key', and initial 'ProgramsData'. 
    * ```ProgramsData``` - Is multiple Programs Instances. Which contain the ```program_pointer``` (the hash of the program you want to use) and the ```program_config``` for that program. On the evaluation of a signature request a threshold server will run all the programs and pass through the program config for that program.

1. The chain selects a derivation path based on a running count and stores said user information in a mapping with the veryfying key for that user as the key in the mapping. The veryfying key will be the account that the edcsa signatures resolve to. 
