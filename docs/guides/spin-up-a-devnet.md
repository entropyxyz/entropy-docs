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

1. Clone the Entropy Core repository and move into the new `entropy-core` directory:

    ```shell
    git clone https://github.com/entropyxyz/entropy-core.git
    cd entropy-core
    ```

1. Add the Alice and Bob threshold-signing services (TSS) to your local `hosts` file:

    ```shell
    echo "127.0.0.1	alice-tss-server bob-tss-server" | sudo tee -a /etc/hosts
    ```

    You may need to enter your computer's password when prompted.

1. Start the Docker containers:


    ```shell
    docker compose up --detach # Detaching is optional.
    ```

    ```output
    [+] Running 0/17
    ⠸ bob-tss-server [⠀] Pulling
        ⠏ b3d3cc4a5268 Waiting
        ⠏ dec0c2d4580b Waiting

    ...

    ✔ Container entropy-devnet-local-bob-chain-node-1    Started
    ✔ Container entropy-devnet-local-alice-tss-server-1  Started
    ✔ Container entropy-devnet-local-bob-tss-server-1    Started
    ```

1. Confirm that the containers are up by running:

    ```shell
    docker ps
    ```

    ```output
    CONTAINER ID   IMAGE                    COMMAND                  CREATED         STATUS         PORTS                                                               NAMES
    23116711e503   entropyxyz/entropy-tss   "/usr/local/bin/entr…"   1 minutes ago   Up 4 seconds   9615/tcp, 9944/tcp, 127.0.0.1:3001->3001/tcp, 30333/tcp             entropy-devnet-local-alice-tss-server-1
    c83c2ae9da20   entropyxyz/entropy       "/usr/local/bin/entr…"   1 minutes ago   Up 4 seconds   3001/tcp, 9615/tcp, 30333/tcp, 127.0.0.1:9944->9944/tcp             entropy-devnet-local-alice-chain-node-1
    5088bb75951c   entropyxyz/entropy-tss   "/usr/local/bin/entr…"   1 minutes ago   Up 4 seconds   3001/tcp, 9615/tcp, 9944/tcp, 30333/tcp, 127.0.0.1:3002->3002/tcp   entropy-devnet-local-bob-tss-server-1
    3b0048bcaa00   entropyxyz/entropy       "/usr/local/bin/entr…"   1 minutes ago   Up 4 seconds   3001/tcp, 9615/tcp, 30333/tcp, 127.0.0.1:9945->9944/tcp             entropy-devnet-local-bob-chain-node-1
    ```

1. Confirm that the local devnet is functioning by using the Rust test inteface within the Entropy Core repo:

    ```shell
    cargo run -p entropy-test-cli -- --chain-endpoint="ws://127.0.0.1:9944" status
    ```

    ```output
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.60s
    Running `target/debug/entropy-test-cli '--chain-endpoint=ws://127.0.0.1:9944' status`

    ...

    Hash        Stored by:                                       Times used: Size in bytes: Configurable? Has auxiliary?
    0x0000…0000 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY          10         300498 true          true
    Success: Got status
    That took 224.958542ms
    ```

    If this is the first time you are running the Rust testing interface, the `cargo` command above will take a few minutes to complete.

1. You can also verify that things are working normally by checking the server logs:

    ```shell
    docker compose logs
    ```

    ```output
    alice-chain-node-1  | 2024-06-24 19:41:06 Unexpected status code: 204
    alice-chain-node-1  | 2024-06-24 19:41:06 💤 Idle (1 peers), best: #116 (0xd68c…bfed), finalized #113 (0x06df…be36), ⬇ 0.6kiB/s ⬆ 0.6kiB/s
    alice-chain-node-1  | 2024-06-24 19:41:11 💤 Idle (1 peers), best: #116 (0xd68c…bfed), finalized #114 (0xb994…0299), ⬇ 0.6kiB/s ⬆ 0.5kiB/s
    ```

    You can now interact with this local devnet using the [CLI](../reference/cli.md) or [SDK](../reference/sdk.md).

1. To stop the network, simply use the `docker stop` command followed by the ID of each Docker container:

    ```shell
    docker stop $(docker ps -a -q)
    ```

    ```output
    23116711e503
    c83c2ae9da20
    5088bb75951c
    3b0048bcaa00
    ```

    Alternatively, you can stop each container individually.

    ```shell
    docker stop 23116711 
    docker stop c83c2...

    ...
    ```

1. That's it!

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
