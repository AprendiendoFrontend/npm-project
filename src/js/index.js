export const isFizz = (num) => num % 3 === 0;
export const isBuzz = (num) => num % 5 === 0;

export const fizzbuzz = (num) => {
  if(isFizz(num) && isBuzz(num)){
      return 'FIZZBUZZ';
  }

  if(isFizz(num)){
    return 'FIZZ';
  }

  if(isBuzz(num)){
    return 'BUZZ';
  }

  return num.toString();
};
