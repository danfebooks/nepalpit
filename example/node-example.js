var danfebooks = require('./danfebooks.pit');

console.log('Hello Node Example');
console.log('DanfeBooks PIT');
console.log(danfebooks.tax({
  income: 24_00_000,
  epf: 1_50_000,
  cit: 2_00_000,
  ssf: 2_00_000,
  insurance: 20_000,
  year: "2080/81",
  single: false,
}));
