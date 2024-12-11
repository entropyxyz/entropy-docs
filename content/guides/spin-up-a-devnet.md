---
title: "Spin up a devnet"
lead: "A developer network (devnet) is a private, isolated blockchain network that developers use to test and experiment with features and programs without affecting other Entropy networks or risking real-world assets. This guide will walk you through creating a local devnet on your machine."
---

Developers should use a devnet when testing new features, experimenting with network parameters, or during initial development stages. However, developers should avoid using it for final production deployments, security audits requiring mainnet conditions, or when real-world economic incentives need to be tested.

## Docker image

Spinning up a devnet using the Docker images supplied in the Entropy Core repo is the easiest way to get up and running. The requirements are fairly minimal, and everything should work straight out of the box.

### Prerequisites

You need to have the following software installed:

- Docker and Docker Compose
- Rust
- A common C Compiler
- OpenSSL
- PKG-config

{{< tabs items="Debian/Ubuntu, MacOS, Arch" >}}

    {{< tab >}}
    ```shell
    curl -fsSL https://get.docker.com -o install-docker.sh
    sudo sh install-docker.sh
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    sudo apt update && sudo apt install build-essential clang libssl-dev pkg-config -y
    ```
    {{< /tab >}}

    {{< tab >}}
    ```shell
    brew install --cask docker
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    brew install openssl pkg-config
    ```
    {{< /tab >}}

    {{< tab >}}
    ```shell
    sudo pacman -S docker docker-compose
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    sudo pacman -S clang libssl-dev pkg-config
    ```
    {{< /tab >}}

{{< /tabs >}}

### Steps

1. Clone the Entropy Core repository and move into the new `entropy-core` directory:

    ```shell
    git clone https://github.com/entropyxyz/entropy-core
    cd entropy-core
    ```

1. Add the Alice and Bob threshold-signing services (TSS) to your local `hosts` file:

    ```shell
    echo "127.0.0.1	alice-tss-server bob-tss-server" | sudo tee -a /etc/hosts
    ```

    Enter an admin password if prompted.

1. Start the Docker daemon, if it isn't running already:

    {{< tabs items="Linux, MacOS" >}}

        {{< tab >}}
        ```shell
        sudo systemctl start docker
        ```
        {{< /tab >}}

        {{< tab >}}
        ```shell
        dockerd
        ```
        {{< /tab >}}

    {{< /tabs >}}

1. Start the Docker containers:


    ```shell
    docker compose up --detach
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

1. Confirm that the containers are up and running:

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

1. Confirm that the local devnet is functioning by using the Rust test interface within the Entropy Core repo:

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

1. You can also verify that things are working as expected by checking the server logs:

    ```shell
    docker compose logs
    ```

    ```output
    alice-chain-node-1  | 2024-06-24 19:41:06 Unexpected status code: 204
    alice-chain-node-1  | 2024-06-24 19:41:06 💤 Idle (1 peers), best: #116 (0xd68c…bfed), finalized #113 (0x06df…be36), ⬇ 0.6kiB/s ⬆ 0.6kiB/s
    alice-chain-node-1  | 2024-06-24 19:41:11 💤 Idle (1 peers), best: #116 (0xd68c…bfed), finalized #114 (0xb994…0299), ⬇ 0.6kiB/s ⬆ 0.5kiB/s
    ```

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

It is possible to build the chain node and threshold-signature scheme server binaries. However, the process for spinning up a devnet with this method is slightly more involved than the Docker method outlined above. We recommend that you only follow this method if you have a specific reason to _not_ run Docker.

### Prerequisites

You must have the latest LTS version of [Rust](https://www.rust-lang.org/tools/install) installed, along with all the [Substrate dependencies](https://docs.substrate.io/install/) for your operating system.

### Steps

1. Clone the Entropy Core repository and move into the new `entropy-core` directory:

    ```shell
    git clone https://github.com/entropyxyz/entropy-core.git
    cd entropy-core
    ```

1. Build the chain node and threshold signature scheme server binaries:

    ```shell
    cargo build --release
    ```

    ```output
    Downloaded asn1-rs-derive v0.4.0
    Downloaded byte-tools v0.3.1
    Downloaded const-random-macro v0.1.16

    ...
    ```

    Cargo is downloading and compiling a lot of tooling for the binaries. This process may take upwards of 10 minutes, depending on your system.

1. Run the node binary:

    ```shell
    ./target/release/entropy --dev --rpc-external
    ```

    ```output
    2024-06-24 18:36:10 💤 Idle (0 peers), best: #4 (0xe3da…d11b), finalized #0 (0xe938…3b8f), ⬇ 0 ⬆ 0
    2024-06-24 18:36:12 🙌 Starting consensus session on top of parent 0xe3da43079cb427b60ca77cee0fe206b933ec9df57ece549ad46a5681ea95d11b
    2024-06-24 18:36:12 🎁 Prepared block for proposing at 5 (2 ms) [hash: 0x636c606f7d66d8c25bc64956c14b1a9c209d035279ff4f7dccd629c346d81047; parent_hash: 0xe3da…d11b; extrinsics (1): [0x7f45…6999
    ```

1. Confirm that the local devnet is functioning by using the Rust test interface within the Entropy Core repo:

    ```shell
    cargo run -p entropy-test-cli -- --chain-endpoint="ws://127.0.0.1:9944" status
    ```

    ```output
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.83s
        Running `target/debug/entropy-test-cli '--chain-endpoint=ws://127.0.0.1:9944' status`

    ...

    Hash        Stored by:                                       Times used: Size in bytes: Configurable? Has auxiliary?
    0x0000…0000 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY          10         300498 true          true
    Success: Got status
    That took 182.155ms
    ```

    If this is the first time you are running the Rust testing interface, the `cargo` command above will take a few minutes to complete.

1. That's it!

## Best Practices

It's important to regularly reset the network to maintain a clean testing environment, thoroughly document all configuration settings for reproducibility, and simulate various network conditions to ensure robustness. 

Developers should strive to mirror the mainnet environment as closely as possible while still maintaining flexibility for rapid iteration. If you plan to share access to the devnet, it's essential to establish a clear protocol for managing and distributing test tokens, implement monitoring and logging systems to track network behaviour, and regularly update the devnet software to match planned mainnet upgrades. 

## Troubleshooting

**Cannot connect to the Docker daemon**: If you see the error message `Cannot connect to the Docker daemon at unix:///Users/johnny/.docker/run/docker.sock. Is the docker daemon running?` it's likely because your Docker daemon isn't running. Double-check that you've opened the Docker application.

**I can't build from source**: there are quite a few dependencies for building Substrate-based nodes. Run through the [official Substrate documentation](https://docs.substrate.io/install/) and make sure you have everything installed.

**Permission denied while trying to connect to the Docker daemon socket**: you likely don't have the correct permissions and user-groups set. Verify that the Docker socket file /var/run/docker.sock has the correct permissions. It should be owned by the `root` user and have appropriate permissions for the `docker` group:

```shell
sudo chown root:docker /var/run/docker.sock
sudo chmod 0660 /var/run/docker.sock
```

Also, make sure that your current user is in the `docker` group:

```shell
sudo su
usermod -aG docker your_username
```
