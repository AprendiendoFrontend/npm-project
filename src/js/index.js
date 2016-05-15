// these fns are in reality just
// isDivisibleBy3 and isDivisibleBy5
// and they are implementation details
// we don't need to export them
// we should test the public api only,
// the public api is the fn fizzBuzz
const isFizz = number => number % 3 === 0;
const isBuzz = number => number % 5 === 0;

export const fizzBuzz = number => {
  // now we do not need the flags
  // and we don't compare with the strings FIZZ nor BUZZ
  if (isFizz(number) && isBuzz(number)) {
    return 'FIZZ BUZZ';
  }

  if (isFizz(number)) {
    return 'FIZZ';
  }

  if (isBuzz(number)) {
    return 'BUZZ';
  }

  // now we only need to return the number one time
  return number.toString();
};
