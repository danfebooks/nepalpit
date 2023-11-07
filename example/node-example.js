var danfebooks = require('./danfebooks.pit');

console.log('Hello Node Example');
console.log('DanfeBooks PIT');
console.log(danfebooks.tax({
  income: 60_00_000,
  epf: 1_00_000,
  cit: 1_70_000,
  ssf: 0,
  insurance: 50_000,
  year: "2080/81",
  single: false,
}));
