// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "hardhat/console.sol";

contract CryptoCafeToken is
  ContextUpgradeable,
  ERC20Upgradeable,
  OwnableUpgradeable
{
  using SafeMathUpgradeable for uint256;

  mapping(address => uint256) private _balances;

  string private _name;
  string private _symbol;
  uint256 private _totalSupply;

  function initialize(string memory tokenName, string memory tokenSymbol)
    public
    initializer
  {
    address develop = address(0x7ea07F2254f05aEe20513DE3e131E462c7ACb6d2);
    _name = tokenName;
    _symbol = tokenSymbol;
    _totalSupply = 1000000000 * 10**18;

    _mint(msg.sender, 800000000 * (10**18));
    _mint(develop, 200000000 * (10**18));
  }

  function name() public view override returns (string memory) {
    return _name;
  }

  function symbol() public view override returns (string memory) {
    return _symbol;
  }

  function balanceOf(address account) public view override returns (uint256) {
    return _balances[account];
  }

  function transfer(address recipient, uint256 amount)
    public
    override
    returns (bool)
  {
    _transfer(_msgSender(), recipient, amount);
    return true;
  }

  function approve(address spender, uint256 amount)
    public
    override
    returns (bool)
  {
    _approve(_msgSender(), spender, amount);
    return true;
  }

  function _mint(address account, uint256 amount) internal virtual override {
    require(account != address(0), "ERC20: mint to the zero address");

    _beforeTokenTransfer(address(0), account, amount);

    _totalSupply = _totalSupply.add(amount);
    _balances[account] = _balances[account].add(amount);
    emit Transfer(address(0), account, amount);
  }

  function totalSupply() public view override returns (uint256) {
    return _totalSupply;
  }
}
