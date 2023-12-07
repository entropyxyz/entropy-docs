
# Proactive Refresh

- The concept here is that as validators enter and exit the network their key shares should become invalid
- Every [session](https://wiki.polkadot.network/docs/glossary#session) (2400 blocks, which is 4 hours) the chain will inform the TSS servers that a proactive refresh is happening.
- The network (registered keys) will be partitioned as to not refresh the whole network and cause undo strain on the validators. 
- One TSS server from each subgroup is selected deterministically using the current block number modulo the number of TSS servers in that subgroup, similar to the selection process for DKG when registering.
- The selected TSS servers (one in each subgroup) will refresh the partition of the network and send the new keyshares off to the other members of their subgroup.
- All old keyshares will now be incompatible with the refreshed keyshares. But the public validating key of the distributed signing keypair never changes.
- The private access mode, an individual trigger will exist where it is initiated by the user (not yet implemented).

![Proactive Refresh Flow New](/sequenceDiagrams/proactiveRefresh.svg)

## Proactive Refresh but I asked ChatGPT3 to make it sound like a Doctor Seuss book.

In the land of networks and validators so grand,
A concept arose, quite grand and well planned.
As validators entered and left the scene,
Their key shares would change, like a magical sheen.

Each session, the chain would loudly declare,
To TSS servers, a message quite rare.
A proactive refresh, a dance in the air,
Ensuring the keys stayed beyond compare.

The network, you see, with keys so dear,
Was partitioned wisely, with nothing to fear.
No need to refresh the whole wide expanse,
Lest the validators suffer under the chance.

Selected validators, with pride and with glee,
In each subgroup, refreshed the network, you see.
Sending key shares like birds on the wing,
To the rest of their subgroups, a harmonious fling.

Old keys, once so mighty, now lost in the mist,
Invalid and gone, in the refresh they exist.
An individual trigger, a secret to unfold,
For private accounts, a story yet to be told.

A keyshare held tight by the user's own hand,
A forceful refresh, like a magical wand.
Not built just yet, in the code it will be,
A tale of networks and keys, as you can see.
