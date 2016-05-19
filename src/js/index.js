export const fizz = (number) => {
  if (number % 3 === 0) {
    return 'FIZZ';
  }
  return number;
};

export const buzz = (number) => {
  if (number % 5 === 0) {
    return 'BUZZ';
  }
  return number;
};

export const fizzBuzz = (number) => {
  let isFizz = fizz(number) === 'FIZZ';
  let isBuzz = buzz(number) === 'BUZZ';

  if(isFizz && isBuzz){
    return 'FIZZ BUZZ';
  }

  if (isFizz) {
    return 'FIZZ';
  }

  if (isBuzz) {
    return 'BUZZ';
  }

  return number;
};
