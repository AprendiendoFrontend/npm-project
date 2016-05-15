import { expect } from 'chai';
import { fizzBuzz } from '../src/js';

describe('Fizz Buzz Kata', () => {
  it('Should return FIZZ if provided number is 3 or divisible by 3', () => {
    expect(fizzBuzz(3)).to.eql('FIZZ');
    expect(fizzBuzz(6)).to.eql('FIZZ');
    expect(fizzBuzz(9)).to.eql('FIZZ');
    expect(fizzBuzz(12)).to.eql('FIZZ');
    expect(fizzBuzz(17)).to.not.eql('FIZZ');
  });

  it('Should return BUZZ if provided number is 5 or divisible by 5', () => {
    expect(fizzBuzz(5)).to.eql('BUZZ');
    expect(fizzBuzz(10)).to.eql('BUZZ');
    // this was wrong
    expect(fizzBuzz(15)).to.eql('FIZZ BUZZ');
    expect(fizzBuzz(25)).to.eql('BUZZ');
    expect(fizzBuzz(28)).to.not.eql('BUZZ');
  });

  it('Should return FIZZ BUZZ if provided number is divisible by 3 and 5', () => {
    expect(fizzBuzz(30)).to.eql('FIZZ BUZZ');
    expect(fizzBuzz(31)).to.not.eql('FIZZ BUZZ');
  });

  it(`should return the number as a string
    if the number is not divisible by 3 or 5`, () => {
    expect(fizzBuzz(4)).to.eql('4');
    expect(fizzBuzz(16)).to.eql('16');
  })
});
