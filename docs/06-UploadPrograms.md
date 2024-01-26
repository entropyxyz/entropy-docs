# Upload Program

Programs are written and compiled to WASM using this [repository](https://github.com/entropyxyz/programs)

* A program owner calls ```set_program``` in the program pallet with
    * the program bytecode
    * the configuration interface which is a seralized json object that allows a user to know the configuration of the program then set their own indiviudualized configuration in programsData
    * The signing key signs the tx and becomes the deployer key
    * A ref counter gets set to 0 when uploading

* A program then gets stored in the Programs storage slot with the key being ```H(bytecode + configuration_interface)```. The hash is used by a user to point to the programs they want applied to their key, everytime a program is referenced the ref counter increments
* Since the key is a hash there is no editing programs (since that would change the hash)
* Programs can be removed if the ref count is zero by the deploy key
