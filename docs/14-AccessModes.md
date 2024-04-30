# Access Modes

![Access Modes](/img/public-private-permissioned-dark.svg#gh-dark-mode-only)&ensp;&ensp;
![Access Modes](/img/public-private-permissioned-light.svg#gh-light-mode-only)&ensp;&ensp;

Entropy accounts can have two distinct access modes.

When using -public-access mode_ anyone can submit a request to sign a message. However, accounts can be configured with a program to restrict who can sign messages. The program can also contain rules defining what _kinds_ of messages different users may sign. Data, such as a signature from the user, may be passed in as auxiliary data to the program. 

For example, an organization whose members change over time would use _public-access mode_ with signing rules defined in a program. This program could be updated whenever the status of group members changes. It is important to note that adding these constraints to an account is available in every access mode.

With _private-access mode_, the user themselves holds a keyshare and participates in the distributed key generation and signing protocols. This is the most secure, as it is impossible for the TSS servers to collude against the user. But it requires that the user safeguards their keyshare, and it requires more complicated UX.
