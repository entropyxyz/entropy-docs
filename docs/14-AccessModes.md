# Access Modes

<!-- TODO for Jake -->

![Access Modes](/img/public-private-permissioned-1-dark.svg#gh-dark-mode-only)&ensp;&ensp;
![Access Modes](/img/public-private-permissioned-1-light.svg#gh-light-mode-only)&ensp;&ensp;
![Access Modes](/img/public-private-permissioned-2-dark.svg#gh-dark-mode-only)&ensp;
![Access Modes](/img/public-private-permissioned-2-light.svg#gh-light-mode-only)&ensp;
![Access Modes](/img/public-private-permissioned-3-dark.svg#gh-dark-mode-only)
![Access Modes](/img/public-private-permissioned-3-light.svg#gh-light-mode-only)

_Access Modes_

Entropy accounts can have three distinct access modes.

The simplest 'vanilla' access mode is 'permissioned'. Only the who registered the account (and holds the private key for the signature request account) may request to sign a message. Signature requests from anyone else will be rejected by the TSS nodes. Only TSS nodes hold keyshares.

With 'Public' access mode, anyone can submit a request to sign a message. However, the account may be configured with a program which restricts who can sign messages, or have rules about what kinds of messages different users may sign, but requiring a signature from the user as auxiliary data to the program. For example, an organisation whose members change over time would use could use public access with signing rules defined in a program, and the program could be updated whenever the status of group members changes.

'Private' access mode is like permissioned mode, but the user themselves holds a keyshare where the user themselves holds a key-share and participates in the DKG and signing protocols. This is the most secure, as it is impossible for the TSS servers to collude against the user. But it requires that the user safeguards their keyshare, and it requires more complicated UX.

