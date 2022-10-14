const { ethers } = require("hardhat");

const main = async () => {
    /**
    const basicBuiltinsContract = await ethers.getContractFactory(
        "BasicBuiltins"
    );

    const deployedBasicBuiltinsContract = await basicBuiltinsContract.deploy();

    await deployedBasicBuiltinsContract.deployed();
    console.log(
        "Basic Builtins Contract Address",
        deployedBasicBuiltinsContract.address
    );
        */
    
    /** */
    const intermediateBuiltinsContract = await ethers.getContractFactory(
        "IntermediateBuiltins"
    );

    const deployedIntermediateBuiltinsContract =
        await intermediateBuiltinsContract.deploy();

    await deployedIntermediateBuiltinsContract.deployed();
    console.log(
        "Intermediate Builtins Contract Address",
        deployedIntermediateBuiltinsContract.address
    );

};

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });
