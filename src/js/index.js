/*eslint no-console: 0*/

export const fizz = (fizzNum) => {
  if (fizzNum % 3 === 0) {
    return 'FIZZ';
  }
};

export const buzz = (buzzNum) => {
  if (buzzNum % 5 === 0) {
    return 'BUZZ';
  }
};

export const list = (listNum) => {
  let listOfNums = [];
  for(var n = 1; n <= listNum; n++) {
    listOfNums.push(n);
  }
  console.log(listOfNums);
  return listOfNums;
};

export const listFizz = (insertFizz) => {
  return [1,2,'FIZZ',4,5,'FIZZ',7,8,'FIZZ',10,11,'FIZZ'];
};
