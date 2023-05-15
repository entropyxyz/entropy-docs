---
sidebar_position: 7
---

# Signing Group Selection

- Signing groups are chosen and held on chain
- Every time a new validator joins or gets removed the chain will place or remove them from a subgroup such that:
  - Subgroups do not shuffle current validators
  - Subgroups remain the same size or off by one
  - see [here](https://github.com/entropyxyz/entropy-core/blob/master/pallets/staking/src/lib.rs#L344)
