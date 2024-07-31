[**@entropyxyz/sdk**](../../README.md) • **Docs**

***

[@entropyxyz/sdk](../../modules.md) / [index](../README.md) / Entropy

# Class: Entropy

The main class to handle all interactions within the Entropy SDK.

## Constructors

### new Entropy()

> **new Entropy**(`opts`): [`Entropy`](Entropy.md)

#### Parameters

• **opts**: [`EntropyOpts`](../interfaces/EntropyOpts.md)

#### Returns

[`Entropy`](Entropy.md)

#### Example

```ts
import { Entropy, wasmGlobalsReady } from '@entropyxyz/sdk'
import { Keyring } from '@entropyxyz/sdk/keys'

async function main () {
  const keyring = new Keyring({ seed })
  const entropy = new Entropy({ keyring })

  await wasmGlobalsReady()
  await entropy.ready
}

main()
```

#### Defined in

[index.ts:75](https://github.com/entropyxyz/sdk/blob/d4de3b94ce544f2e22c10d73f5d5e9299ea713e6/src/index.ts#L75)

## Properties

### keyring

> **keyring**: [`Keyring`](../../keys/classes/Keyring.md)

Accessor for the keyring passed at instantiation

#### Defined in

[index.ts:50](https://github.com/entropyxyz/sdk/blob/d4de3b94ce544f2e22c10d73f5d5e9299ea713e6/src/index.ts#L50)

***

### programs

> **programs**: `ProgramManager`

#### Defined in

[index.ts:41](https://github.com/entropyxyz/sdk/blob/d4de3b94ce544f2e22c10d73f5d5e9299ea713e6/src/index.ts#L41)

***

### ready

> **ready**: `Promise`\<`boolean`\>

A promise that resolves once all internal setup has been successfully completed.

#### Defined in

[index.ts:35](https://github.com/entropyxyz/sdk/blob/d4de3b94ce544f2e22c10d73f5d5e9299ea713e6/src/index.ts#L35)

***

### registrationManager

> **registrationManager**: `RegistrationManager`

#### Defined in

[index.ts:38](https://github.com/entropyxyz/sdk/blob/d4de3b94ce544f2e22c10d73f5d5e9299ea713e6/src/index.ts#L38)

***

### signingManager

> **signingManager**: `SignatureRequestManager`

#### Defined in

[index.ts:47](https://github.com/entropyxyz/sdk/blob/d4de3b94ce544f2e22c10d73f5d5e9299ea713e6/src/index.ts#L47)

***

### substrate

> **substrate**: `ApiPromise`

(Advanced) Accessor for the raw subtate API.

#### Defined in

[index.ts:53](https://github.com/entropyxyz/sdk/blob/d4de3b94ce544f2e22c10d73f5d5e9299ea713e6/src/index.ts#L53)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Shuts the Entropy SDK down gracefully.
Closes substrate connections for you.

#### Returns

`Promise`\<`void`\>

#### Defined in

[index.ts:216](https://github.com/entropyxyz/sdk/blob/d4de3b94ce544f2e22c10d73f5d5e9299ea713e6/src/index.ts#L216)

***

### register()

> **register**(`params`?): `Promise`\<`string`\>

Registers a new account with the provided parameters.

#### Parameters

• **params?**: `RegistrationParams`

The registration parameters.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the verifying key for the new account when the registration is complete.

#### Throws

If the address is already registered or if there's a problem during registration.

#### Defined in

[index.ts:133](https://github.com/entropyxyz/sdk/blob/d4de3b94ce544f2e22c10d73f5d5e9299ea713e6/src/index.ts#L133)

***

### sign()

> **sign**(`params`): `Promise`\<`Uint8Array`\>

Signs a signature request hash.
This method involves various steps including validator selection, transaction request formatting,
and submission of these requests to validators for signing.
It returns the signature from the first validator after validation.

#### Parameters

• **params**: `SigOps`

The signature operation parameters.

#### Returns

`Promise`\<`Uint8Array`\>

A promise that resolves to the signed hash as a Uint8Array.

#### Throws

If there's an error in the signing routine.

#### Defined in

[index.ts:207](https://github.com/entropyxyz/sdk/blob/d4de3b94ce544f2e22c10d73f5d5e9299ea713e6/src/index.ts#L207)

***

### signWithAdaptersInOrder()

> **signWithAdaptersInOrder**(`params`): `Promise`\<`unknown`\>

#### Parameters

• **params**: `SigWithAdaptersOps`

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[index.ts:191](https://github.com/entropyxyz/sdk/blob/d4de3b94ce544f2e22c10d73f5d5e9299ea713e6/src/index.ts#L191)
