---
sidebar_position: 12
---

# Programs

<!-- TODO for Jake -->

- [API docs](https://docs-api-constraints.vercel.app/ec_constraints)

![Program access modes](/img/public-private-permissioned-1-dark.svg#gh-dark-mode-only)&ensp;&ensp;
![Program access modes](/img/public-private-permissioned-1-light.svg#gh-light-mode-only)&ensp;&ensp;
![Program access modes](/img/public-private-permissioned-2-dark.svg#gh-dark-mode-only)&ensp;
![Program access modes](/img/public-private-permissioned-2-light.svg#gh-light-mode-only)&ensp;
![Program access modes](/img/public-private-permissioned-3-dark.svg#gh-dark-mode-only)
![Program access modes](/img/public-private-permissioned-3-light.svg#gh-light-mode-only)

_Program access modes_

Programs have three distinct access modes. 'Public' where anyone can submit a request to sign a message, 'Private' where the user themselves holds a key-share and participates in the signing process, and 'Permissioned' where the program itself defines the logic as to who may submit a signature request.

For example in the context of the 'Asset Custodian' use-case, assets belonging to an individual would use private access, whereas an organisation whose members change over time would use permissioned access, and the program could be updated whenever the status of group members changes.

