[**@entropyxyz/sdk**](../../README.md) • **Docs**

***

[@entropyxyz/sdk](../../modules.md) / [index](../README.md) / EntropyOpts

# Interface: EntropyOpts

## Properties

### adapters?

> `optional` **adapters**: `object`

A collection of adapters used for signing messages of particular types.
 These help with formatting, configuring hash functions to use, etc.

#### Index Signature

 \[`key`: `string` \| `number`\]: `Adapter`

#### Defined in

[index.ts:27](https://github.com/entropyxyz/sdk/blob/d4de3b94ce544f2e22c10d73f5d5e9299ea713e6/src/index.ts#L27)

***

### endpoint?

> `optional` **endpoint**: `string`

A websocket endpoint for establishing a connection to validators

#### Defined in

[index.ts:23](https://github.com/entropyxyz/sdk/blob/d4de3b94ce544f2e22c10d73f5d5e9299ea713e6/src/index.ts#L23)

***

### keyring

> **keyring**: [`Keyring`](../../keys/classes/Keyring.md)

Keyring used to manage all the keys Entropy uses

#### Defined in

[index.ts:21](https://github.com/entropyxyz/sdk/blob/d4de3b94ce544f2e22c10d73f5d5e9299ea713e6/src/index.ts#L21)
