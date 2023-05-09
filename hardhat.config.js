require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/NggYQA2-stR4JGot1-svYFkjyedX-mIF",
      accounts: [ `0x${"390afef6b717fdbaa977380f4e18b2c5edd1de1fa4d6c314d8070353d93d9cf0"}`],
    },
  },
};
