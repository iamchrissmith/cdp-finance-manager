const Maker = require('@makerdao/dai');
const maker = Maker.create('mainnet');
const CDP = require('./src/services/cdp.js');
const MakerPrice = require('./src/services/MakerPrice.js');

const myId = 5247;
const myCdp = new CDP(myId, maker);
const makerPrice = new MakerPrice(maker);

(async () => {
  await myCdp.initialize();
  console.log('cdp.id', myCdp.cdp.id);
  console.log('debtValue', myCdp.debtValue.toString());
  console.log('governanceFee', myCdp.governanceFee.toString());
  console.log('collateralizationRatio', myCdp.collateralizationRatio.toString());
  console.log('liquidationPrice', myCdp.liquidationPrice.toString());
  console.log('collateralValue', myCdp.collateralValue.toString());
  console.log('isSafe', myCdp.isSafe);
  await makerPrice.initialize();
  console.log('ETH price', makerPrice.eth.toString());
  console.log('MKR price', makerPrice.mkr.toString());
  console.log('PETH price', makerPrice.peth.toString());
  process.exit();
})();
