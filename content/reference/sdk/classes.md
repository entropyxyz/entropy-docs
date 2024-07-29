---
title: "Classes"
---

Lorem ipsum.

## Entropy

### Constructors

#### constructor

```javascript
new Entropy(opts): Entropy
```

**Parameters**:

- opts: [EntropyOpts](../interfaces#entropyopts)

**Returns**:

- `entropy`

**Example**:

```javascript
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

Defined in [index.ts:75](https://github.com/entropyxyz/sdk/blob/f5075865e65bea7db61ec949fb23c03d02d43976/src/index.ts#L75)

### Properties

#### keyring

Accessor for the keyring passed at instantiation.

```javascript
keyring: Keyring
```

Defined in [index.ts:50](https://github.com/entropyxyz/sdk/blob/f5075865e65bea7db61ec949fb23c03d02d43976/src/index.ts#L50)

#### programs

```javascript
programs: default
```

Defined in [index.ts:41](https://github.com/entropyxyz/sdk/blob/f5075865e65bea7db61ec949fb23c03d02d43976/src/index.ts#L41)

#### ready

A promise that resolves once all internal setup has been successfully completed.

```javascript
ready: Promise<boolean>
```

Defined in [index.ts:35](https://github.com/entropyxyz/sdk/blob/f5075865e65bea7db61ec949fb23c03d02d43976/src/index.ts#L35)

#### registrationManager

```javascript
registrationManager: default
```

Defined in [index.ts:38](https://github.com/entropyxyz/sdk/blob/f5075865e65bea7db61ec949fb23c03d02d43976/src/index.ts#L38)

#### signingManager

```javascript
signingManager: default
```

Defined in [index.ts:47](https://github.com/entropyxyz/sdk/blob/f5075865e65bea7db61ec949fb23c03d02d43976/src/index.ts#L47)

#### substrate

(Advanced) Accessor for the raw subtate API.

```javascript
substrate: ApiPromise
```

Defined in [index.ts:53](https://github.com/entropyxyz/sdk/blob/f5075865e65bea7db61ec949fb23c03d02d43976/src/index.ts#L53)

### Methods

#### close

Shuts the Entropy SDK down gracefully. Closes substrate connections for you.

```javascript
close(): Promise<void>
```

#### register

#### sign

#### signWithAdaptersInOrder

## Keyring

### Constructors

#### constructor

### Properties

#### accounts

#### crypto

### Methods

#### getAccounts

#### getLazyLoadAccountProxy
