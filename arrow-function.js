 var inputs = process.argv.slice(2);
var result = inputs.map((el) => el[0])
                   .reduce((agg, curr) => `${agg}${curr.toUpperCase()}`);
console.log(result);