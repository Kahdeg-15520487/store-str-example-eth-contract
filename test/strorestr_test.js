const storestr = artifacts.require("storestr");

contract('storestr test', async (accounts) => {
  let instance;

  before(async () => {
    instance = await storestr.deployed();//deploy contract
  });

  it("Initial value of key should be zero", async () => {
    let key = await instance.getKey.call({from: accounts[0]});
    assert.equal(key, 0);
  });

  it("Should increment key", async () => {
    await instance.createValue('value',{from: accounts[0]});
    let key = await instance.getKey.call({from: accounts[0]});
    assert.equal(key, 1);
  });

  it("Should get value", async () => {
    let value = await instance.getValue(0,{from: accounts[0]});
    console.log(value);
    assert.equal(value,'value');
    assert.equal(1,1);
  });

});