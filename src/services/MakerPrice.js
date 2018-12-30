const assert = require('assert');

/**
 * Maker Price service to get pricing info from MakerDAO
 * @see https://makerdao.com/documentation/#price-service
 */
class MakerPrice {
  /**
   * sets Maker object
   * @constructor
   * @param {Maker} _maker
   */
  constructor(_maker) {
    assert(_maker);
    this.maker = _maker;
  }

  /**
   * initialize this MakerPrice
   */
  async initialize() {
    assert(this.maker);
    await this.maker.authenticate();
    this.price = this.maker.service('price');
    await this.getEthPrice();
    await this.getMkrPrice();
    await this.getPethPrice();
  }

  /**
   * get the Eth Price
   * @sets {BigNumber} this.ethPrice
   * @see https://makerdao.com/documentation/#getethprice
   */
  async getEthPrice() {
    assert(this.price);
    this.eth = await this.price.getEthPrice();
  }

  /**
   * get the MKR Price
   * @sets {BigNumber} this.mkrPrice
   * @see https://makerdao.com/documentation/#getmkrprice
   */
  async getMkrPrice() {
    assert(this.price);
    this.mkr = await this.price.getMkrPrice();
  }

  /**
   * get the PETH Price
   * @sets {BigNumber} this.pethPrice
   * @see https://makerdao.com/documentation/#getpethprice
   */
  async getPethPrice() {
    assert(this.price);
    this.peth = await this.price.getPethPrice();
  }
};

module.exports = MakerPrice;
