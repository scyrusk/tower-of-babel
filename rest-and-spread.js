var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

var avg = function(...args) {
  return args.reduce((agg, curr) => agg += curr) / args.length
}

console.log(avg(...args));