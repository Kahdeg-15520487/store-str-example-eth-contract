var Counter = artifacts.require("./Counter.sol");
var storestr = artifacts.require("./storestr.sol");

module.exports = function(deployer) {
  deployer.deploy(Counter);
  deployer.deploy(storestr);
};