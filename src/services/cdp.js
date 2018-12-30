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
   * @sets {CDP} this.cdp
   * @see https://makerdao.com/documentation/#getCdp
   */
  async getCdp() {
    this.cdp = await this.maker.getCdp(this.cdpId);
  }

  /**
   * get the Debt Value for the set CDP.
   * @sets {BigNumber} this.debtValue
   * @see https://makerdao.com/documentation/#getDebtValue
   */
  async getDebtValue() {
    this.debtValue = await this.cdp.getDebtValue();
  }

  /**
   * get the Governance Fee
   * @sets {BigNumber} this.governanceFee
   * @see https://makerdao.com/documentation/#getGovernanceFee
   */
  async getGovernanceFee() {
    this.governanceFee = await this.cdp.getGovernanceFee();
  }

  /**
   * get the CollateralizationRatio
   * @sets {number} this.collateralizationRatio
   * @see https://makerdao.com/documentation/#getCollateralizationRatio
   */
  async getCollateralizationRatio() {
    this.collateralizationRatio = await this.cdp.getCollateralizationRatio();
  }

  /**
   * get the Liquidation Price
   * @sets {number} this.liquidationPrice
   * @see https://makerdao.com/documentation/#getLiquidationPrice
   */
  async getLiquidationPrice() {
    this.liquidationPrice = await this.cdp.getLiquidationPrice();
  }

  /**
   * get the Collateral Value
   * @sets {BigNumber} this.collateralValue
   * @see https://makerdao.com/documentation/#getCollateralValue
   */
  async getCollateralValue() {
    this.collateralValue = await this.cdp.getCollateralValue();
  }

  /**
   * get the isSafe boolean
   * @sets {boolean} this.isSafe
   * @see https://makerdao.com/documentation/#isSafe
   */
  async isSafe() {
    this.isSafe = await this.cdp.isSafe();
  }
};

module.exports = CDPChecker;
