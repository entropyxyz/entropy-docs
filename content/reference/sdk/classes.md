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

**Defined in**:

[index.ts:75](https://github.com/entropyxyz/sdk/blob/f5075865e65bea7db61ec949fb23c03d02d43976/src/index.ts#L75)

### Properties

#### keyring

Accessor for the keyring passed at instantiation

```javascript
keyring: Keyring
```

Defined in [index.ts:50](https://github.com/entropyxyz/sdk/blob/f5075865e65bea7db61ec949fb23c03d02d43976/src/index.ts#L50)

#### programs

#### ready

#### registrationManager

#### signingManager

#### substrate

### Methods

## Keyring
