const max = +process.argv[2];
let FizzBuzz = function*() {
  let i = 0
  while (++i <= max) {
    yield `${i % 3 === 0 ? 'Fizz' : ''}${i % 5 === 0 ? 'Buzz' : ''}` || i
  }
}();

for (var n of FizzBuzz) {
  console.log(n);
}