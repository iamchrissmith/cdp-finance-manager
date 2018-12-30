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

/**
 * CDPChecker class
 */
class CDPChecker {
  /**
   * sets CDP id and Maker object
   * @constructor
   * @param {int} _id
   * @param {Maker} _maker
   */
  constructor(_id = null, _maker) {
    this.cdpId = _id;
    this.maker = _maker;
  }

  /**
   * initialize function.
   * Acts as runner and ensures maker.authenticate() gets called first
   */
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

  /**
   * get the CDP for id that is set
   * @sets this.cdp
   */
  async getCdp() {
    this.cdp = await this.maker.getCdp(this.cdpId);
  }

  /**
   * get the Debt Value for the set CDP.
   * @sets this.debtValue
   */
  async getDebtValue() {
    this.debtValue = await this.cdp.getDebtValue();
  }

  /**
   * get the Governance Fee
   * @sets this.governanceFee
   */
  async getGovernanceFee() {
    this.governanceFee = await this.cdp.getGovernanceFee();
  }

  /**
   * get the CollateralizationRatio
   * @sets this.collateralizationRatio
   */
  async getCollateralizationRatio() {
    this.collateralizationRatio = await this.cdp.getCollateralizationRatio();
  }

  /**
   * get the Liquidation Price
   * @sets this.liquidationPrice
   */
  async getLiquidationPrice() {
    this.liquidationPrice = await this.cdp.getLiquidationPrice();
  }

  /**
   * get the Collateral Value
   * @sets this.collateralValue
   */
  async getCollateralValue() {
    this.collateralValue = await this.cdp.getCollateralValue();
  }

  /**
   * get the isSafe boolean
   * @sets {boolean} this.isSafe
   */
  async isSafe() {
    this.isSafe = await this.cdp.isSafe();
  }
};

module.exports = CDPChecker;
