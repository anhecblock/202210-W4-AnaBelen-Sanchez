import strictEquals from './module.js';

console.log('(1,1)-Expect True ', strictEquals(1, 1));
console.log('(NaN, NaN)-Expect false', strictEquals(NaN, NaN));
console.log('(0, -0)-Expect True', strictEquals(0, -0));
console.log('(-0, 0)-Expect True', strictEquals(-0, 0));
console.log('(1, "1")-Expect false', strictEquals(1, '1'));
console.log('(true, false)-Expect false', strictEquals(true, false));
console.log('(false, false)-Expect true', strictEquals(false, false));
console.log('("water", "oil")-Expect false', strictEquals('water', 'oil'));
