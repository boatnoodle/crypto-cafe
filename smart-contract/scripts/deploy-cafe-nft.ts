import { ethers, upgrades } from "hardhat";

async function main() {
  const CafeNFT = await ethers.getContractFactory("CafeNFT");
  const cafeNFT = await CafeNFT.deploy(
    "CafeNFT",
    "CAFE",
    "https://ipfs.moralis.io:2053/ipfs/QmfQEj74KgU69LHtP5pscRojSmSDUF4aFDU6ynmbJDhnfu/cafe-metadata/"
  );
  await cafeNFT.deployed();

  console.log(`CafeNFT deployed to: ${cafeNFT.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
