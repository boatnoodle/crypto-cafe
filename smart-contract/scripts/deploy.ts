import { ethers, upgrades } from "hardhat";

async function main() {
  const CryptoCafeToken = await ethers.getContractFactory("CryptoCafeToken");
  const cryptoCafeToken = await upgrades.deployProxy(CryptoCafeToken, [
    "CryptoCafe",
    "CCAF",
  ]);
  await cryptoCafeToken.deployed();

  console.log(`CryptoCafeToken deployed to: ${cryptoCafeToken.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
