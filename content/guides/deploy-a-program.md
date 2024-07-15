---
title: "Deploy a program"
---

After writing a program, you'll need to deploy it to a network before you can interact with it. By the end of this guide, you will know how to deploy a program to an Entropy network.

## CLI

Here is the process for deploying a program using the Entropy CLI.

### Prepare your program

Before you can upload your program, you'll need the following:

1. The absolute path of your program (e.g. `/home/alex/simple_signer.wasm`).
1. The program configuration for your file as a single line of JSON. Configuration files are not mandatory, as not all programs require one.
1. An account with enough funds to deploy your program. In early tests of the Entropy testnet it cost around `2000000000000` bits to deploy a barebones program.

    :::note Non-registered account
    It is not necessary to register your account before deploying a program.
    :::

Next, you can move on to starting the CLI and deploying your program.

### Deploy the program

1. Start the CLI by running `entropy`.
1. At the main menu within the CLI, select **Deploy Program**:

   ```output
   ? Select Action
     Manage Accounts
     Balance
     Register
     Sign
     Transfer
   > Deploy Program
     User Programs
     Exit
   ```

1. Select **Deploy**.
1. Enter the absolute path of the `.wasm` program file you want to deploy.
1. If your program has an associated configuration file, select `y` when prompted and paste the JSON string prepared in the [previous section]({{< relref "#prepare-your-program" >}}).
1. The CLI should submit your program to the network and return a pointer:

    ```output
    Program deployed successfully with pointer: 0x7110f20247e9ac29355245e7864cff44066c9a24c0ae303478528645fe542e6e
    Deploying from account: 5DSUAf2DwxW2ebZq15Pm6Z3SJ69Ur8fGd8ytWvgxvNjYtr7c
    ```

You can now interact with your program using the program pointer.

### List deployed programs

If you've lost your program pointer, you can list it by running the following:

1. Start the CLI by running `entropy`.
1. At the main menu within the CLI, select **Deploy Program**:

   ```output
   ? Select Action
     Manage Accounts
     Balance
     Register
     Sign
     Transfer
   > Deploy Program
     User Programs
     Exit
   ```

1. Select **Get Owned Programs**. The CLI will output all the programs deployed by the currently selected account:

    ```output
    Retrieved program pointers:
    [
      '0xe80c83dd6597c15de5979c6dc0164ebeb626f3da8e6e03f3345146064938fab4',
      '0x7110f20247e9ac29355245e7864cff44066c9a24c0ae303478528645fe542e6e'

    ]
    ```

## Troubleshooting

**No such file or directory**: this indicates that you have given the CLI a path to a `.wasm` file that either does not exist or the CLI does not have permission to read from. Confirm that the path is correct and that the CLI has permission to read from that file.
