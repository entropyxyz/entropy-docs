"use strict";(self.webpackChunkentropy_core=self.webpackChunkentropy_core||[]).push([[654],{69:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=t(4848),r=t(8453);const i={title:"Spin up a devnet"},o=void 0,a={id:"guides/spin-up-a-devnet",title:"Spin up a devnet",description:"A developer network (devnet) is a private, isolated blockchain network that developers use to test and experiment with features and programs without affecting other Entropy networks or risking real-world assets. This guide will walk you through creating a local devnet on your machine.",source:"@site/docs/guides/spin-up-a-devnet.md",sourceDirName:"guides",slug:"/guides/spin-up-a-devnet",permalink:"/guides/spin-up-a-devnet",draft:!1,unlisted:!1,editUrl:"https://github.com/entropyxyz/entropy-docs/edit/main/docs/guides/spin-up-a-devnet.md",tags:[],version:"current",frontMatter:{title:"Spin up a devnet"},sidebar:"sidebar",previous:{title:"Register an address",permalink:"/guides/register-an-account"},next:{title:"Use the explorer",permalink:"/guides/use-the-explorer"}},c={},l=[{value:"Docker image",id:"docker-image",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Steps",id:"steps",level:3},{value:"Build from source",id:"build-from-source",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Steps",id:"steps-1",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"A developer network (devnet) is a private, isolated blockchain network that developers use to test and experiment with features and programs without affecting other Entropy networks or risking real-world assets. This guide will walk you through creating a local devnet on your machine."}),"\n",(0,s.jsx)(n.p,{children:"Developers should use a devnet when testing new features, experimenting with network parameters, or during initial development stages. However, developers should avoid using it for final production deployments, security audits requiring mainnet conditions, or when real-world economic incentives need to be tested."}),"\n",(0,s.jsx)(n.h2,{id:"docker-image",children:"Docker image"}),"\n",(0,s.jsx)(n.p,{children:"Spinning up a devnet using the Docker images supplied in the Entropy Core repo is the easiest way to get up and running. The requirements are fairly minimal, and everything should work straight out of the box."}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.p,{children:["You need to have ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"Docker"})," and ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"Docker Compose"})," installed. Verify you have them both installed by running:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker version && docker compose version\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-output",children:"Client:\n    Cloud integration: v1.0.35+desktop.13\n    Version:           26.1.1\n\n...\n\nDocker Compose version v2.27.0-desktop.2\n"})}),"\n",(0,s.jsx)(n.h3,{id:"steps",children:"Steps"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Clone the Entropy Core repository and move into the new ",(0,s.jsx)(n.code,{children:"entropy-core"})," directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/entropyxyz/entropy-core.git\ncd entropy-core\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add the Alice and Bob threshold-signing services (TSS) to your local ",(0,s.jsx)(n.code,{children:"hosts"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'echo "127.0.0.1\talice-tss-server bob-tss-server" | sudo tee -a /etc/hosts\n'})}),"\n",(0,s.jsx)(n.p,{children:"You may need to enter your computer's password when prompted."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the Docker containers:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker compose up --detach # Detaching is optional.\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-output",children:"[+] Running 0/17\n\u2838 bob-tss-server [\u2800] Pulling\n    \u280f b3d3cc4a5268 Waiting\n    \u280f dec0c2d4580b Waiting\n\n...\n\n\u2714 Container entropy-devnet-local-bob-chain-node-1    Started\n\u2714 Container entropy-devnet-local-alice-tss-server-1  Started\n\u2714 Container entropy-devnet-local-bob-tss-server-1    Started\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Confirm that the containers are up and running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker ps\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-output",children:'CONTAINER ID   IMAGE                    COMMAND                  CREATED         STATUS         PORTS                                                               NAMES\n23116711e503   entropyxyz/entropy-tss   "/usr/local/bin/entr\u2026"   1 minutes ago   Up 4 seconds   9615/tcp, 9944/tcp, 127.0.0.1:3001->3001/tcp, 30333/tcp             entropy-devnet-local-alice-tss-server-1\nc83c2ae9da20   entropyxyz/entropy       "/usr/local/bin/entr\u2026"   1 minutes ago   Up 4 seconds   3001/tcp, 9615/tcp, 30333/tcp, 127.0.0.1:9944->9944/tcp             entropy-devnet-local-alice-chain-node-1\n5088bb75951c   entropyxyz/entropy-tss   "/usr/local/bin/entr\u2026"   1 minutes ago   Up 4 seconds   3001/tcp, 9615/tcp, 9944/tcp, 30333/tcp, 127.0.0.1:3002->3002/tcp   entropy-devnet-local-bob-tss-server-1\n3b0048bcaa00   entropyxyz/entropy       "/usr/local/bin/entr\u2026"   1 minutes ago   Up 4 seconds   3001/tcp, 9615/tcp, 30333/tcp, 127.0.0.1:9945->9944/tcp             entropy-devnet-local-bob-chain-node-1\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Confirm that the local devnet is functioning by using the Rust test interface within the Entropy Core repo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'cargo run -p entropy-test-cli -- --chain-endpoint="ws://127.0.0.1:9944" status\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-output",children:"Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.60s\nRunning `target/debug/entropy-test-cli '--chain-endpoint=ws://127.0.0.1:9944' status`\n\n...\n\nHash        Stored by:                                       Times used: Size in bytes: Configurable? Has auxiliary?\n0x0000\u20260000 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY          10         300498 true          true\nSuccess: Got status\nThat took 224.958542ms\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If this is the first time you are running the Rust testing interface, the ",(0,s.jsx)(n.code,{children:"cargo"})," command above will take a few minutes to complete."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You can also verify that things are working as expected by checking the server logs:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker compose logs\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-output",children:"alice-chain-node-1  | 2024-06-24 19:41:06 Unexpected status code: 204\nalice-chain-node-1  | 2024-06-24 19:41:06 \ud83d\udca4 Idle (1 peers), best: #116 (0xd68c\u2026bfed), finalized #113 (0x06df\u2026be36), \u2b07 0.6kiB/s \u2b06 0.6kiB/s\nalice-chain-node-1  | 2024-06-24 19:41:11 \ud83d\udca4 Idle (1 peers), best: #116 (0xd68c\u2026bfed), finalized #114 (0xb994\u20260299), \u2b07 0.6kiB/s \u2b06 0.5kiB/s\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can now interact with this local devnet using the ",(0,s.jsx)(n.a,{href:"/reference/cli",children:"CLI"})," or ",(0,s.jsx)(n.a,{href:"/reference/sdk",children:"SDK"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To stop the network, simply use the ",(0,s.jsx)(n.code,{children:"docker stop"})," command followed by the ID of each Docker container:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker stop $(docker ps -a -q)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-output",children:"23116711e503\nc83c2ae9da20\n5088bb75951c\n3b0048bcaa00\n"})}),"\n",(0,s.jsx)(n.p,{children:"Alternatively, you can stop each container individually."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker stop 23116711 \ndocker stop c83c2...\n\n...\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"That's it!"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"build-from-source",children:"Build from source"}),"\n",(0,s.jsxs)(n.p,{children:["It is possible to build the chain node and threshold-signature scheme server binaries. However, the process for spinning up a devnet with this method is slightly more involved than the Docker method outlined above. We recommend that you only follow this method if you have a specific reason to ",(0,s.jsx)(n.em,{children:"not"})," run Docker."]}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites-1",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.p,{children:["You must have the latest LTS version of ",(0,s.jsx)(n.a,{href:"https://www.rust-lang.org/tools/install",children:"Rust"})," installed, along with all the ",(0,s.jsx)(n.a,{href:"https://docs.substrate.io/install/",children:"Substrate dependencies"})," for your operating system."]}),"\n",(0,s.jsx)(n.h3,{id:"steps-1",children:"Steps"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Clone the Entropy Core repository and move into the new ",(0,s.jsx)(n.code,{children:"entropy-core"})," directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/entropyxyz/entropy-core.git\ncd entropy-core\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Build the chain node and threshold signature scheme server binaries:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cargo build --release\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-output",children:"Downloaded asn1-rs-derive v0.4.0\nDownloaded byte-tools v0.3.1\nDownloaded const-random-macro v0.1.16\n\n...\n"})}),"\n",(0,s.jsx)(n.p,{children:"Cargo is downloading and compiling a lot of tooling for the binaries. This process may take upwards of 10 minutes, depending on your system."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run the node binary:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./target/release/entropy --dev --rpc-external\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-output",children:"2024-06-24 18:36:10 \ud83d\udca4 Idle (0 peers), best: #4 (0xe3da\u2026d11b), finalized #0 (0xe938\u20263b8f), \u2b07 0 \u2b06 0\n2024-06-24 18:36:12 \ud83d\ude4c Starting consensus session on top of parent 0xe3da43079cb427b60ca77cee0fe206b933ec9df57ece549ad46a5681ea95d11b\n2024-06-24 18:36:12 \ud83c\udf81 Prepared block for proposing at 5 (2 ms) [hash: 0x636c606f7d66d8c25bc64956c14b1a9c209d035279ff4f7dccd629c346d81047; parent_hash: 0xe3da\u2026d11b; extrinsics (1): [0x7f45\u20266999\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Confirm that the local devnet is functioning by using the Rust test interface within the Entropy Core repo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'cargo run -p entropy-test-cli -- --chain-endpoint="ws://127.0.0.1:9944" status\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-output",children:"Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.83s\n    Running `target/debug/entropy-test-cli '--chain-endpoint=ws://127.0.0.1:9944' status`\n\n...\n\nHash        Stored by:                                       Times used: Size in bytes: Configurable? Has auxiliary?\n0x0000\u20260000 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY          10         300498 true          true\nSuccess: Got status\nThat took 182.155ms\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If this is the first time you are running the Rust testing interface, the ",(0,s.jsx)(n.code,{children:"cargo"})," command above will take a few minutes to complete."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"That's it!"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsx)(n.p,{children:"It's important to regularly reset the network to maintain a clean testing environment, thoroughly document all configuration settings for reproducibility, and simulate various network conditions to ensure robustness."}),"\n",(0,s.jsx)(n.p,{children:"Developers should strive to mirror the mainnet environment as closely as possible while still maintaining flexibility for rapid iteration. If you plan to share access to the devnet, it's essential to establish a clear protocol for managing and distributing test tokens, implement monitoring and logging systems to track network behaviour, and regularly update the devnet software to match planned mainnet upgrades."}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Cannot connect to the Docker daemon"}),": If you see the error message ",(0,s.jsx)(n.code,{children:"Cannot connect to the Docker daemon at unix:///Users/johnny/.docker/run/docker.sock. Is the docker daemon running?"})," it's likely because your Docker daemon isn't running. Double-check that you've opened the Docker application."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"I can't build from source"}),": there are quite a few dependencies for building Substrate-based nodes. Run through the ",(0,s.jsx)(n.a,{href:"https://docs.substrate.io/install/",children:"official Substrate documentation"})," and make sure you have everything installed."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);