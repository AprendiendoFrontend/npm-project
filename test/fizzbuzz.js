import {expect} from 'chai';
import {fizz, buzz, list, listFizz} from '../src/js';

describe('Fizz Buzz Kata', () => {
  it('Should return FIZZ if number is 3 or divisible by 3', () => {
    expect(fizz(3)).to.eql('FIZZ');
    expect(fizz(6)).to.eql('FIZZ');
    expect(fizz(9)).to.eql('FIZZ');
    expect(fizz(12)).to.eql('FIZZ');
  });

  it('Should return BUZZ if number is 5 or divisible by 5', () => {
    expect(buzz(5)).to.eql('BUZZ');
    expect(buzz(10)).to.eql('BUZZ');
    expect(buzz(15)).to.eql('BUZZ');
    expect(buzz(25)).to.eql('BUZZ');
  });

  it('Should print a list of numbers', () => {
    const value = 20;
    expect(list(value)).to.have.length.within(1, value);
  });

  it('Should print a list including FIZZ word', () => {
    expect(listFizz(12)).to.eql([1,2,'FIZZ',4,5,'FIZZ',7,8,'FIZZ',10,11,'FIZZ']);
  });
});
