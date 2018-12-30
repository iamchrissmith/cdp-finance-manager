const Maker = require('@makerdao/dai');
const maker = Maker.create('mainnet');
const CDP = require('./src/services/cdp.js');

const myId = 5247;
const myCdp = new CDP(myId, maker);

(async () => {
  await myCdp.initialize();
  console.log('cdp.id', myCdp.cdp.id);
  console.log('debtValue', myCdp.debtValue.toString());
  console.log('governanceFee', myCdp.governanceFee.toString());
  console.log('collateralizationRatio', myCdp.collateralizationRatio.toString());
  console.log('liquidationPrice', myCdp.liquidationPrice.toString());
  console.log('collateralValue', myCdp.collateralValue.toString());
  console.log('isSafe', myCdp.isSafe);
  process.exit();
})();