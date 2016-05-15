import {expect} from 'chai';
import {fizz, buzz, fizzBuzz} from '../src/js';

describe('Fizz Buzz Kata', () => {
  it('Should return FIZZ if provided number is 3 or divisible by 3', () => {
    expect(fizz(3)).to.eql('FIZZ');
    expect(fizz(6)).to.eql('FIZZ');
    expect(fizz(9)).to.eql('FIZZ');
    expect(fizz(12)).to.eql('FIZZ');
    expect(fizz(17)).to.not.eql('FIZZ');
  });

  it('Should return BUZZ if provided number is 5 or divisible by 5', () => {
    expect(buzz(5)).to.eql('BUZZ');
    expect(buzz(10)).to.eql('BUZZ');
    expect(buzz(15)).to.eql('BUZZ');
    expect(buzz(25)).to.eql('BUZZ');
    expect(buzz(28)).to.not.eql('BUZZ');
  });

  it('Shoul return FIZZ BUZZ if provided number is divisible by 3 and 5', () => {
    expect(fizzBuzz(30)).to.eql('FIZZ BUZZ');
    expect(fizzBuzz(31)).to.not.eql('FIZZ BUZZ');
  });
});
