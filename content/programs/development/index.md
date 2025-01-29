---
title: "Development"
weight: 20
lead: ""
---

## Create

Since Entropy programs rely on WASM architecture, creating a program is pretty straight-forward:

1. Create the logic you want in your Entropy program.
1. Include specific functionality that Entropy requires from each program.
1. Write tests to make sure that your program functions the way that you're expecting.
1. Compile your program down to WASM.

## Update

## Delete

Deleting a program from the network is possible up until it is referenced by an account. If at least one account is registered to a program, that program cannot be deleted. Since there is no way to deregister accounts that you do not own from a deployed program, it is best to presume that all deployed programs cannot be deleted.

### Deregister an account

Every account can change the programs associated with their keys. see pallet Registery change_program_instance, removing a program here will reduce the ref count.

### Remove a program

To delete/remove a deployed program, call the `remove_program` function within in the `programs` pallet using the account that deployed the program. The network will return the deposit associated with the program to the account.


## Interact
