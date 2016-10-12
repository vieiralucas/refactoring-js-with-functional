import orderCalculator from '../src/order-calculator';
import orders from './orders';
import { expect } from 'chai';

describe('orderCalculator', () => {
  it('should sum orders in a range', () => {
    const startDate = new Date(2016, 10, 1);
    const endDate = new Date(2016, 10, 6);

    expect(orderCalculator(orders, startDate, endDate)).to.equal(3688);
  });
});
