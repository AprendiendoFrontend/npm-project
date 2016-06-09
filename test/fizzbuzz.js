import { expect } from 'chai';
import { fizzbuzz } from '../src/js';

describe('Kata FIZZ BUZZ', () => {
  it('Should return a given number as a string', () => {
    expect(fizzbuzz(1)).to.eql('1');
  });

  it('Should return FIZZ if number is divisible by 3', () => {
    expect(fizzbuzz(6)).to.eql('FIZZ');
    expect(fizzbuzz(9)).to.eql('FIZZ');
    expect(fizzbuzz(12)).to.eql('FIZZ');
  });

  it('Should return BUZZ if number is divisible by 5', () => {
    expect(fizzbuzz(5)).to.eql('BUZZ');
    expect(fizzbuzz(10)).to.eql('BUZZ');
  });

  it('Should return FIZZBUZZ if given number is divisible by 3 AND 5', () => {
    expect(fizzbuzz(15)).to.eql('FIZZBUZZ');
    expect(fizzbuzz(30)).to.eql('FIZZBUZZ');
    expect(fizzbuzz(45)).to.eql('FIZZBUZZ');
  });
});
