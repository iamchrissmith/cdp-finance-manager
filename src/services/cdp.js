// const {
//   MKR,
//   DAI,
//   ETH,
//   WETH,
//   PETH,
//   USD_ETH,
//   USD_MKR,
//   USD_DAI
// } = Maker;

module.exports = class CDPChecker {
  constructor(_id = null, _maker) {
    this.cdpId = _id;
    this.maker = _maker;
  }

  async initialize() {
    await this.maker.authenticate();
    await this.getCdp();
    await this.getDebtValue();
    await this.getGovernanceFee();
    await this.getCollateralizationRatio();
    await this.getLiquidationPrice();
    await this.getCollateralValue();
    await this.isSafe();
  }

  async getCdp() {
    this.cdp = await this.maker.getCdp(this.cdpId);
  }

  async getDebtValue() {
    this.debtValue = await this.cdp.getDebtValue();
  }
  
  async getGovernanceFee() {
    this.governanceFee = await this.cdp.getGovernanceFee();
  }

  async getCollateralizationRatio() {
    this.collateralizationRatio = await this.cdp.getCollateralizationRatio();
  }

  async getLiquidationPrice() {
    this.liquidationPrice = await this.cdp.getLiquidationPrice();
  }
  
  async getCollateralValue() {
    this.collateralValue = await this.cdp.getCollateralValue();
  }

  async isSafe() {
    this.isSafe = await this.cdp.isSafe();
  }
}