require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const {
    env: { QUICKNODE_HTTPS_URL, PRIVATE_KEY },
} = process;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    networks: {
        goerli: {
            url: QUICKNODE_HTTPS_URL,
            accounts: [PRIVATE_KEY],
        },
    },
};
