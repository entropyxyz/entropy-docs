---
sidebar_position: 2
---

# Registering

- Assuming a [centralized key generation](https://entropy-api-docs.vercel.app/entropy-core/centralized_keygen/index.html) has been done we now have to get the user's keys to all the proper validators in each subgroup and inform the chain this is done

![Register Flow](/sequenceDiagrams/register.svg)

1. A user registers with the Entropy chain by submitting a transaction with the 'constraint modification account' and initial constraints. SDK method [`Entropy.register`](https://entropy-api-docs.vercel.app/entropy-js/classes/core.default.html#register)
1. The user retrieves the details of all threshold servers from all relevant 'signing subgroups' from the chain (their public encryption keys and IPs).
1. The user generates a set of shares from their private key. Each signing subgroup is assigned a share, and copies of that share are encrypted for each member of the subgroup them using the public key that member. Since the user generates the shares on one device locally, this is known as a centralized key generation. The threshold signature scheme used can also do distributed key generation - but this is not currently used. 
1. The user send the encrypted shares to each Threshold Server by including them in a POST request to `/user/new` [src](https://github.com/entropyxyz/entropy-core/blob/master/crypto/server/src/user/api.rs) [API](https://entropy-api-docs.vercel.app/entropy-core/server/user/api/fn.new_user.html).
1. On receiving a share, the Threshold Server checks the user info published on chain before storing it in it's [encrypted key-value store](https://entropy-api-docs.vercel.app/entropy-core/kvdb/index.html).  

<!-- - The user sends all members of each subgroup a keyshare. -->
<!-- - Each subgroup member contacts all other members of the subgroup to confirm they all have the same share. // JA Less interactive then this, one member of a subgroup sends a message to chain (may need a redisgn) -->
<!-- - To test that the shares actually work - a test signature is created. //JA nahhhh cool idea tho -->
<!--   - If the test signature is valid a transaction is submitted to the entropy chain that the registration was successful. // JA same -->
<!--   - If the test signature is invalid but no misbehaving party was identified, the registration fails - the user is at fault. // JA same -->
<!--   - If the test signature fails with an identified misbehaving party - proceed as with the usual signing proceedure: the misbehaving member is 'slashed' and another try is made with a new member of that signing subgroup. // JA same -->
