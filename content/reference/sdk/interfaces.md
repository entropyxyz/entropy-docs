---
title: "Interfaces"
---

Use these interfaces is as a way to define a contract for an object's shape. They specify the properties and methods an object should have.

## EntropyOpts

```javascript
interface EntropyOpts {
    adapters?: {
        [key: string | number]: Adapter;
    };
    endpoint?: string;

    keyring: Keyring;
}
```

Defined in [index.ts:19](https://github.com/entropyxyz/sdk/blob/f5075865e65bea7db61ec949fb23c03d02d43976/src/index.ts#L19)

### Properties

#### adapters

Optional.

```javascript
adapters?: {
    [key: string | number]: Adapter;
}
```

A collection of adapters used for signing messages of particular types. These help with formatting, configuring hash functions to use, etc.

**Type declaration**

- [key: string | number]: Adapter

Defined in [index.ts:27](https://github.com/entropyxyz/sdk/blob/f5075865e65bea7db61ec949fb23c03d02d43976/src/index.ts#L27)

#### endpoint

Optional.

```javascript
endpoint?: string
```

A websocket endpoint for establishing a connection to validators.

Defined in [index.ts:23](https://github.com/entropyxyz/sdk/blob/f5075865e65bea7db61ec949fb23c03d02d43976/src/index.ts#L23)

#### keyring

```javascript
keyring: Keyring
```

Keyring used to manage all the keys Entropy uses.

Defined in [index.ts:21](https://github.com/entropyxyz/sdk/blob/f5075865e65bea7db61ec949fb23c03d02d43976/src/index.ts#L21)
