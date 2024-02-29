# Access Modes

![Access Modes](/img/public-private-permissioned-1-dark.svg#gh-dark-mode-only)&ensp;&ensp;
![Access Modes](/img/public-private-permissioned-1-light.svg#gh-light-mode-only)&ensp;&ensp;
![Access Modes](/img/public-private-permissioned-2-dark.svg#gh-dark-mode-only)&ensp;
![Access Modes](/img/public-private-permissioned-2-light.svg#gh-light-mode-only)&ensp;
![Access Modes](/img/public-private-permissioned-3-dark.svg#gh-dark-mode-only)
![Access Modes](/img/public-private-permissioned-3-light.svg#gh-light-mode-only)

Entropy accounts can have three distinct access modes.

The default access mode is 'permissioned'. In this mode only the who registered the account (and holds the private key for the signature request account) may make a request to sign a message. Signature requests from anyone else will be rejected by the TSS servers. In this mode the TSS servers hold all keyshares.

With 'public' access mode anyone can submit a request to sign a message. However, the account may be configured with a program which restricts who can sign messages, or has rules about what kinds of messages different users may sign. Data, such as a signature from the user, may be passed in as auxiliary data to the program. As an example, an organisation whose members change over time would use could use public access with signing rules defined in a program, and the program could be updated whenever the status of group members changes.

'Private' access mode is like permissioned mode, but the user themselves holds a keyshare and participates in the distributed key generation and signing protocols. This is the most secure, as it is impossible for the TSS servers to collude against the user. But it requires that the user safeguards their keyshare, and it requires more complicated UX.
