import strictEquals from './module.js';

console.log('Expect True', strictEquals(1, 1));
console.log('Expect false', strictEquals(NaN, NaN));
console.log('Expect True', strictEquals(0, -0));
console.log('Expect True', strictEquals(-0, 0));
console.log('Expect false', strictEquals(1, '1'));
console.log('Expect false', strictEquals(true, false));
console.log('Expect true', strictEquals(false, false));
console.log('Expect false', strictEquals('Water', 'oil'));
