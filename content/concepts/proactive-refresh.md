---
title: "Proactive refresh"
---

The concept here is that as validators enter and exit the network, their key shares should become invalid. Every session (2400 blocks, which is 4 hours), the chain will inform the TSS servers that a proactive refresh is happening. The network (registered keys) will be partitioned so as not to refresh the whole network and cause undue strain on the validators. One TSS server from each subgroup is selected deterministically using the current block number modulo the number of TSS servers in that subgroup, similar to the selection process for DKG when registering. The selected TSS servers (one in each subgroup) will connect to each other and run the proactive refresh protocol, producing a new set of key shares. The protocol is similar to the distributed key generation protocol used during registration. The selected TSS servers send the new key shares to the other members of their subgroup, and on receiving a key share, they replace their existing key share in their key-value store with the new one. All old key shares will now be incompatible with the refreshed key shares. However, the public validating key of the distributed signing keypair never changes. The private access mode, an individual trigger will exist where it is initiated by the user (not yet implemented).

![Proactive Refresh Flow New](./images/proactiveRefresh.svg)
