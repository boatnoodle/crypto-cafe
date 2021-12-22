import { Contract } from "@ethersproject/contracts";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("CryptoCafeToken Contract", () => {
  let CryptoCafeToken;
  let cryptoCafeToken: Contract;
  let owner;
  let addr1: { address: any };
  let addr2;
  let addrs;

  beforeEach(async () => {
    CryptoCafeToken = await ethers.getContractFactory("CryptoCafeToken");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    cryptoCafeToken = await CryptoCafeToken.deploy();
  });

  // it("Should send _maxSupply to owner after deployment", async () => {
  //   await cryptoCafeToken.deployed();
  //   const [owner] = await ethers.getSigners();

  //   expect(await cryptoCafeToken._maxSupply()).to.equal(
  //     await cryptoCafeToken.balanceOf(owner.address)
  //   );
  // });

  // it("Should set the right _maxSupply", async () => {
  //   await cryptoCafeToken.setMaxSupply(2000 * 10 ** 18);
  //   expect(await cryptoCafeToken._maxSupply()).to.equal(2000 * 10 ** 18);
  // });

  it("Should transfer tokens between accounts", async () => {
    await cryptoCafeToken.transfer(addr1.address, 5);
    expect(await cryptoCafeToken.balanceOf(addr1.address)).to.equal(5);

    // await cryptoCafeToken.connect(addr1.address).transfer(addr2.address, 1000);
    // console.log(
    //   `Balance of addr2 is ${await cryptoCafeToken.balanceOf(addr2.address)}`
    // );
    // expect(await cryptoCafeToken.balanceOf(addr2.address)).to.equal(1000);
  });
});
