// @flow

//// Arrays ///////////////////////////////////////////////////////////
function total_nums(numbers: Array<number>) {
  let result = 0;
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

total_nums([1, 2, 3, 'hello']);
