---
title: "Spin up a devnet for Entropy"
lead: "A developer network (devnet) is a private blockchain network that mimics the mainnet but is isolated for testing and development purposes. This allows developers to make mistakes and iterate quickly without impacting real users or risking real-world assets. This guide will walk you through setting up a local devnet for the Entropy."
---

A devnet is an essential tool for devs working with Entropy. It provides a safe and controlled environment to:

- Test new features and functionalities.
- Experiment with network parameters.
- Debug and troubleshoot issues.
- Develop and test Entropy Programs without impacting mainnet.

This guide will cover two primary methods for setting up a local Entropy devnet:

- [Using Docker containers]({{< relref "#docker-containers" >}}): The recommended method for most users due to its ease of use and simplicity.
- [Building from source]({{< relref "#building-from-source" >}}): For developers who require more control or are unable to use Docker. 

## Docker containers

This method leverages pre-built Docker images to quickly and easily spin up a local devnet. 

### Prerequisites

- [Docker](https://docs.docker.com/engine/install/).
- [Docker Compose](https://docs.docker.com/compose/install/).
- Basic understanding of Docker commands.

### Steps

1. Clone the Entropy Core repo:

   ```bash
   git clone https://github.com/entropyxyz/entropy-core.git
   cd entropy-core
   ```

1. Start the Docker daemon:

    {{< tabs items="MacOS, Linux" >}}
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

   ```bash
   docker compose up --detach 
   ```

1. Verify container status:

   ```bash
   docker ps 
   ```

   This command lists all running Docker containers. Look for containers like `entropy-devnet-local-alice-chain-node-1`.

1. (Optional) Check server logs:

   ```bash
   docker compose logs 
   ```

   While optional, this command shows logs from running containers which can be helpful for troubleshooting.

1. Stop all running containers:

   ```bash
   docker stop $(docker ps -a -q) 
   ```

## Building from Source

It is possible to build the chain node and threshold-signature scheme server binaries. However, the process for spinning up a devnet with this method is slightly more involved than the Docker method outlined above. We recommend that you only follow this method if you have a specific reason to _not_ run Docker.

### Prerequisites

- [Latest LTS version of Rust](https://www.rust-lang.org/)
- [Substrate dependencies](https://docs.substrate.io/install/)

### Steps

1. Clone the Entropy Core repository:

   ```bash
   git clone https://github.com/entropyxyz/entropy-core.git
   cd entropy-core
   ```

1. Compile the source into an executable binary:

   ```bash
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

   ```bash
   ./target/release/entropy --dev --rpc-external 
   ```

   ```output
   2024-06-24 18:36:10 💤 Idle (0 peers), best: #4 (0xe3da…d11b), finalized #0 (0xe938…3b8f), ⬇ 0 ⬆ 0
   2024-06-24 18:36:12 🙌 Starting consensus session on top of parent 0xe3da43079cb427b60ca77cee0fe206b933ec9df57ece549ad46a5681ea95d11b
   2024-06-24 18:36:12 🎁 Prepared block for proposing at 5 (2 ms) [hash: 0x636c606f7d66d8c25bc64956c14b1a9c209d035279ff4f7dccd629c346d81047; parent_hash: 0xe3da…d11b; extrinsics (1): [0x7f45…6999
   ```

4. (Optional) Test with the Rust test interface:

    ```bash
    cargo run -p entropy-test-cli -- --chain-endpoint="ws://127.0.0.1:9944" status 
    ```

    ```output
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.83s
    Running `target/debug/entropy-test-cli '--chain-endpoint=ws://127.0.0.1:9944' status`

    ...

    Hash Stored by: Times used: Size in bytes: Configurable? Has auxiliary?
    0x0000…0000 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY 10 300498 true true
    Success: Got status
    That took 182.155ms
    ```

If this is the first time you are running the Rust testing interface, the `cargo` command above will take a few minutes to complete.

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
