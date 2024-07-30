function fiboEvenSum(n) {
  let index = 3;
  let fibonacciSeries = [1, 2];
  while (index <= n) {
    let next = fibonacciSeries[index - 2] + fibonacciSeries[index - 3];
    fibonacciSeries.push(next);
    index++;
  }
  return addEven(fibonacciSeries,n);
}
function addEven(array,limit) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0 && array[i]<=limit) {
      sum += array[i];
    }
  }
  return sum;
}
console.log(fiboEvenSum(34));
