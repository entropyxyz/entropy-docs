[**@entropyxyz/sdk**](../../README.md) • **Docs**

***

[@entropyxyz/sdk](../../modules.md) / [keys](../README.md) / Keyring

# Class: Keyring

A utility class to allow consumers of the SDK to subscribe to key creations and "account" updates.

## Constructors

### new Keyring()

> **new Keyring**(`account`): [`Keyring`](Keyring.md)

Initializes a new instance of the `Keyring` class.

#### Parameters

• **account**: `KeyMaterial`

The key material (or account) used for key generation.

#### Returns

[`Keyring`](Keyring.md)

#### Example

```ts
import { Keyring } from '@entropyxyz/sdk/keys'

const keyring = new Keyring({
  seed: '0xbc1ede780f784bb6991a585e4f6e61522c14e1cae6ad0895fb57b9a205a8f938'
})

keyring.accounts.on('account-update', (fullAccount) => {
  // TODO: persist this
})
```

#### Defined in

[keys/index.ts:52](https://github.com/entropyxyz/sdk/blob/d4de3b94ce544f2e22c10d73f5d5e9299ea713e6/src/keys/index.ts#L52)

## Properties

### accounts

> **accounts**: `AccountsEmitter`

The accounts

#### Defined in

[keys/index.ts:29](https://github.com/entropyxyz/sdk/blob/d4de3b94ce544f2e22c10d73f5d5e9299ea713e6/src/keys/index.ts#L29)

***

### crypto

> **crypto**: `Crypto`

#### Defined in

[keys/index.ts:30](https://github.com/entropyxyz/sdk/blob/d4de3b94ce544f2e22c10d73f5d5e9299ea713e6/src/keys/index.ts#L30)

## Methods

### getAccount()

> **getAccount**(): `EntropyAccount`

Retrieves the current account information.

#### Returns

`EntropyAccount`

An object containing the Entropy account details.

#### Defined in

[keys/index.ts:183](https://github.com/entropyxyz/sdk/blob/d4de3b94ce544f2e22c10d73f5d5e9299ea713e6/src/keys/index.ts#L183)

***

### getLazyLoadAccountProxy()

> **getLazyLoadAccountProxy**(`childKey`): `Signer`

Lazily loads a key proxy for a given type.
This is so we dont just generate a bunch of useless keys that are getting
stored for no reason

#### Parameters

• **childKey**: `ChildKey`

#### Returns

`Signer`

A `Signer` proxy object.

#### Defined in

[keys/index.ts:202](https://github.com/entropyxyz/sdk/blob/d4de3b94ce544f2e22c10d73f5d5e9299ea713e6/src/keys/index.ts#L202)
