# Access Modes

![Access Modes](/img/public-private-permissioned-dark.svg#gh-dark-mode-only)&ensp;&ensp;
![Access Modes](/img/public-private-permissioned-light.svg#gh-light-mode-only)&ensp;&ensp;

Entropy accounts can have two distinct access modes.

With 'public' access mode anyone can submit a request to sign a message. However, the account may be configured with a program which restricts who can sign messages, or has rules about what kinds of messages different users may sign. Data, such as a signature from the user, may be passed in as auxiliary data to the program. As an example, an organisation whose members change over time would use could use public access with signing rules defined in a program, and the program could be updated whenever the status of group members changes. It is important to note that adding these constrains to an account is available in every access mode.

With 'Private' access mode, the user themselves holds a keyshare and participates in the distributed key generation and signing protocols. This is the most secure, as it is impossible for the TSS servers to collude against the user. But it requires that the user safeguards their keyshare, and it requires more complicated UX.
