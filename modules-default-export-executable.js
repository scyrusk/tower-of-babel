var arg1 = process.argv[2];
var arg2 = process.argv[3];

import * as Math from './modules-default-export';
console.log(Math.PI);
console.log(Math.sqrt(+arg1));
console.log(Math.square(+arg2));