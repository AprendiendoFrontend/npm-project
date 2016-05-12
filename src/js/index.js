/*eslint no-console: 0*/
export const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export const printNumberList = function(num){
  var listOfNumbers = [];
  for (var n = 1; n <= num; n++) {
    listOfNumbers.push(n);
    console.log(n);
  }

  return listOfNumbers;
};
