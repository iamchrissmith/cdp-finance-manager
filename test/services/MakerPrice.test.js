const FakeMaker = require('@makerdao/dai');
const MakerPrice = require('../../src/services/MakerPrice');
jest.mock('@makerdao/dai');

describe('MakerPrice Service', () => {
  beforeAll(() => {
    this.makerPrice = new MakerPrice(FakeMaker);
  });

  test('constructor', () => {
    expect(this.makerPrice.maker).toBe(FakeMaker);
  });

  test('constructor requires Maker', () => {
    expect(() => {
      new MakerPrice();
    }).toThrow();
  });

  describe('.initialize()', () => {
    beforeEach(async () => {
      this.makerPrice.maker.authenticate = jest.fn();
      this.makerPrice.maker.service = jest.fn();
      this.makerPrice.getEthPrice = jest.fn();
      this.makerPrice.getMkrPrice = jest.fn();
      this.makerPrice.getPethPrice = jest.fn();
      await this.makerPrice.initialize();
    });

    afterEach(() => {
      this.makerPrice.getEthPrice = new MakerPrice(FakeMaker).getEthPrice;
      this.makerPrice.getMkrPrice = new MakerPrice(FakeMaker).getMkrPrice;
      this.makerPrice.getPethPrice = new MakerPrice(FakeMaker).getPethPrice;
    });

    test('it authenticates maker', () => {
      expect(this.makerPrice.maker.authenticate).toHaveBeenCalledTimes(1);
    });
    
    test('it sets maker price service', () => {
      expect(this.makerPrice.maker.service).toHaveBeenCalledTimes(1);
      expect(this.makerPrice.maker.service).toHaveBeenCalledWith('price');
    });

    test('it gets ETH Price', () => {
      expect(this.makerPrice.getEthPrice).toHaveBeenCalledTimes(1);
    });

    test('it gets MKR Price', () => {
      expect(this.makerPrice.getMkrPrice).toHaveBeenCalledTimes(1);
    });

    test('it gets PETH Price', () => {
      expect(this.makerPrice.getPethPrice).toHaveBeenCalledTimes(1);
    });

    test('it requires this.maker to be set', async () => {
      this.makerPrice.maker = undefined;
      expect(this.makerPrice.initialize()).rejects.toThrow();
    });
  });

  describe('.getEthPrice()', () => {
    test('it sets Eth price', async () => {
      this.makerPrice.price = {
        getEthPrice: jest.fn().mockResolvedValue(1),
      };
      await this.makerPrice.getEthPrice();
      expect(this.makerPrice.price.getEthPrice).toHaveBeenCalledTimes(1);
      expect(this.makerPrice.eth).toBe(1);
    });

    test('it requires price service to be set', async () => {
      this.makerPrice.price = undefined;
      expect(this.makerPrice.getEthPrice()).rejects.toThrow();
    });
  });

  describe('.getMkrPrice()', () => {
    test('it sets Mkr price', async () => {
      this.makerPrice.price = {
        getMkrPrice: jest.fn().mockResolvedValue(1),
      };
      await this.makerPrice.getMkrPrice();
      expect(this.makerPrice.price.getMkrPrice).toHaveBeenCalledTimes(1);
      expect(this.makerPrice.mkr).toBe(1);
    });

    test('it requires price service to be set', async () => {
      this.makerPrice.price = undefined;
      expect(this.makerPrice.getMkrPrice()).rejects.toThrow();
    });
  });

  describe('.getPethPrice()', () => {
    test('it sets Peth price', async () => {
      this.makerPrice.price = {
        getPethPrice: jest.fn().mockResolvedValue(1),
      };
      await this.makerPrice.getPethPrice();
      expect(this.makerPrice.price.getPethPrice).toHaveBeenCalledTimes(1);
      expect(this.makerPrice.peth).toBe(1);
    });

    test('it requires price service to be set', async () => {
      this.makerPrice.price = undefined;
      expect(this.makerPrice.getPethPrice()).rejects.toThrow();
    });
  });
});
