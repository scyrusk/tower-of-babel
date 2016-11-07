const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let i = 1
    return {
      next() {
        const printVal = `${i % 3 === 0 ? 'Fizz' : ''}${i % 5 === 0 ? 'Buzz' : ''}` || i
        return { done: (i++ > max), value: printVal}
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}