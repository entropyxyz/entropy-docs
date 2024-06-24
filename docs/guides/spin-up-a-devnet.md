---
title: "Spin up a devnet"
---

A developer network (devnet) is a private, isolated blockchain network used by developers to test and experiment with features and programs without affecting any other Entropy networks or risking real assets. This guide will walk you through the process of creating a devnet locally on your machine.

Developers should use a devnet when testing new features, experimenting with network parameters, or during initial development stages. However, developers should avoid using it for final production deployments, security audits requiring mainnet conditions, or when real-world economic incentives need to be tested.

There are two ways to spin up a devnet:

- [Running a Docker image](#docker-image)
- [Building from source](#build-from-source)

## Docker image

### Prerequisites

You need to have [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/) installed. Verify you have them both installed by running:

```shell
docker version && docker compose version
```

```output
Client:
    Cloud integration: v1.0.35+desktop.13
    Version:           26.1.1

...

Docker Compose version v2.27.0-desktop.2
```

### Steps

1. Lorem.
1. Ipsum.
1. I don't know any more Latin.

## Build from source

### Prerequisites

### Steps

1. Lorem.
1. Ipsum.
1. I don't know any more Latin.

## Best Practices

It's important to regularly reset the network to maintain a clean testing environment, thoroughly document all configuration settings for reproducibility, and simulate various network conditions to ensure robustness. 

Developers should strive to mirror the mainnet environment as closely as possible while still maintaining flexibility for rapid iteration. If you plan to share access to the devnet, it's important to establish a clear protocol for managing and distributing test tokens, implement monitoring and logging systems to track network behaviour, and regularly update the devnet software to match planned mainnet upgrades. 

## Troubleshooting

**Cannot connect to the Docker daemon**: If you see this error message:

```plaintext
Cannot connect to the Docker daemon at unix:///Users/johnny/.docker/run/docker.sock. Is the docker daemon running?
```

It's likely because your Docker deamo
