require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.7.3",
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
        },
    }
};
