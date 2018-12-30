const FakeMaker = require('@makerdao/dai');
const CDP = require('../../src/services/cdp');
jest.mock('@makerdao/dai');

describe('CDP Service', () => {
  beforeAll(() => {
    this.myId = 1;
    this.myCdp = new CDP(this.myId, FakeMaker);
  });

  test('constructor', () => {
    expect(this.myCdp.cdpId).toBe(this.myId);
    expect(this.myCdp.maker).toBe(FakeMaker);
  });

  describe('.initialize()', () => {
    beforeEach(async () => {
      this.myCdp.maker.authenticate = jest.fn();
      this.myCdp.getCdp = jest.fn();
      this.myCdp.getDebtValue = jest.fn();
      this.myCdp.getGovernanceFee = jest.fn();
      this.myCdp.getCollateralizationRatio = jest.fn();
      this.myCdp.getLiquidationPrice = jest.fn();
      this.myCdp.getCollateralValue = jest.fn();
      this.myCdp.isSafe = jest.fn();
      await this.myCdp.initialize();
    });

    afterEach(() => {
      this.myCdp.getCdp = new CDP().getCdp;
      this.myCdp.getDebtValue = new CDP().getDebtValue;
      this.myCdp.getGovernanceFee = new CDP().getGovernanceFee;
      this.myCdp.getCollateralizationRatio = new CDP().getCollateralizationRatio;
      this.myCdp.getLiquidationPrice = new CDP().getLiquidationPrice;
      this.myCdp.getCollateralValue = new CDP().getCollateralValue;
      this.myCdp.isSafe = new CDP().isSafe;
    })

    test('it authenticates maker', () => {
      expect(this.myCdp.maker.authenticate).toHaveBeenCalledTimes(1);
    });

    test('it gets CDP', () => {
      expect(this.myCdp.getCdp).toHaveBeenCalledTimes(1);
    });

    test('it gets DebtValue', () => {
      expect(this.myCdp.getDebtValue).toHaveBeenCalledTimes(1);
    });

    test('it gets Governance Fee', () => {
      expect(this.myCdp.getGovernanceFee).toHaveBeenCalledTimes(1);
    });
    
    test('it gets CollateralizationRatio', () => {
      expect(this.myCdp.getCollateralizationRatio).toHaveBeenCalledTimes(1);
    });

    test('it gets LiquidationPrice', () => {
      expect(this.myCdp.getLiquidationPrice).toHaveBeenCalledTimes(1);
    });

    test('it gets CollateralValue', () => {
      expect(this.myCdp.getCollateralValue).toHaveBeenCalledTimes(1);
    });

    test('it gets isSafe', () => {
      expect(this.myCdp.isSafe).toHaveBeenCalledTimes(1);
    });
  });

  describe('.getCdp()', () => {
    test('it should get CDP from maker', async () => {
      this.myCdp.maker = {
        getCdp: jest.fn().mockResolvedValue({id: this.myId})
      }
      await this.myCdp.getCdp();
      expect(this.myCdp.maker.getCdp).toHaveBeenCalledTimes(1);
      expect(this.myCdp.maker.getCdp).toHaveBeenCalledWith(this.myId);
      expect(this.myCdp.cdp).toMatchObject({id: this.myId});
    })
  });

  describe('.getDebtValue()', () => {
    test('it should get DebtValue from cdp', async () => {
      this.myCdp.cdp = {
        getDebtValue: jest.fn().mockResolvedValue(1)
      }
      await this.myCdp.getDebtValue();
      expect(this.myCdp.cdp.getDebtValue).toHaveBeenCalledTimes(1);
      expect(this.myCdp.cdp.getDebtValue).toHaveBeenCalledWith();
      expect(this.myCdp.debtValue).toBe(1);
    })
  });

  describe('.getGovernanceFee()', () => {
    test('it should get GovernanceFee from cdp', async () => {
      this.myCdp.cdp = {
        getGovernanceFee: jest.fn().mockResolvedValue(1)
      }
      await this.myCdp.getGovernanceFee();
      expect(this.myCdp.cdp.getGovernanceFee).toHaveBeenCalledTimes(1);
      expect(this.myCdp.cdp.getGovernanceFee).toHaveBeenCalledWith();
      expect(this.myCdp.governanceFee).toBe(1);
    })
  });

  describe('.getCollateralizationRatio()', () => {
    test('it should get CollateralizationRatio from cdp', async () => {
      this.myCdp.cdp = {
        getCollateralizationRatio: jest.fn().mockResolvedValue(1)
      }
      await this.myCdp.getCollateralizationRatio();
      expect(this.myCdp.cdp.getCollateralizationRatio).toHaveBeenCalledTimes(1);
      expect(this.myCdp.cdp.getCollateralizationRatio).toHaveBeenCalledWith();
      expect(this.myCdp.collateralizationRatio).toBe(1);
    })
  });

  describe('.getLiquidationPrice()', () => {
    test('it should get LiquidationPrice from cdp', async () => {
      this.myCdp.cdp = {
        getLiquidationPrice: jest.fn().mockResolvedValue(1)
      }
      await this.myCdp.getLiquidationPrice();
      expect(this.myCdp.cdp.getLiquidationPrice).toHaveBeenCalledTimes(1);
      expect(this.myCdp.cdp.getLiquidationPrice).toHaveBeenCalledWith();
      expect(this.myCdp.liquidationPrice).toBe(1);
    })
  });

  describe('.getCollateralValue()', () => {
    test('it should get CollateralValue from cdp', async () => {
      this.myCdp.cdp = {
        getCollateralValue: jest.fn().mockResolvedValue(1)
      }
      await this.myCdp.getCollateralValue();
      expect(this.myCdp.cdp.getCollateralValue).toHaveBeenCalledTimes(1);
      expect(this.myCdp.cdp.getCollateralValue).toHaveBeenCalledWith();
      expect(this.myCdp.collateralValue).toBe(1);
    })
  });

  describe('.isSafe()', () => {
    test('it should get isSafe from cdp', async () => {
      this.myCdp.cdp = {
        isSafe: jest.fn().mockResolvedValue(true)
      }
      await this.myCdp.isSafe();
      expect(this.myCdp.cdp.isSafe).toHaveBeenCalledTimes(1);
      expect(this.myCdp.cdp.isSafe).toHaveBeenCalledWith();
      expect(this.myCdp.isSafe).toBe(true);
    })
  });
})