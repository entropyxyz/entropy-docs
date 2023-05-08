---
sidebar_position: 2
---

# Registering

- Assuming a centralized key generation has been done we now have to get the user's keys to all the proper validators in each subgroup and inform the chain this is done

![Register Flow](/sequenceDiagrams/register.svg)

- A user registers with the Entropy chain by submitting a transaction with the 'constraint modification account' and initial constraints.
- The user retrieves the details of threshold servers from the chain (their public encryption keys and IPs).
- Currently a centralised key generation - the user generates all shares from a private key (and has ultimate control), then encrypt them using the public key of each Threshold server, for that node to store encrypted. Gg20 also has a distributed key generation requiring 4 rounds of communication - but this is not currently used.
- On receiving a share, the Threshold Server checks the user info published on chain before storing it.  

### Additional registration steps from [the spec](https://github.com/entropyxyz/entropy-core/tree/master/crypto#new_user---create-a-new-user-todo) 

AFAIK this is not yet implemented: //JA It is implemented
- The user gets details of all members of each relevant 'signing subgroup' / 'partition'
- The user sends all members of each subgroup a keyshare.
- Each subgroup member contacts all other members of the subgroup to confirm they all have the same share. // JA Less interactive then this, one member of a subgroup sends a message to chain (may need a redisgn)
- To test that the shares actually work - a test signature is created. //JA nahhhh cool idea tho
  - If the test signature is valid a transaction is submitted to the entropy chain that the registration was successful. // JA same
  - If the test signature is invalid but no misbehaving party was identified, the registration fails - the user is at fault. // JA same
  - If the test signature fails with an identified misbehaving party - proceed as with the usual signing proceedure: the misbehaving member is 'slashed' and another try is made with a new member of that signing subgroup. // JA same
