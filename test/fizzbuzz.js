import {expect} from 'chai';
import {numberList, printNumberList} from '../src/js';

describe('Fizz Buzz Kata', () => {
  it('Should contain 15 numbers', () => {
    expect(numberList).to.have.lengthOf(15);
  });

  it('Should print a list of numbers in console', () => {
    expect(printNumberList(15)).to.eql([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
  });
});
