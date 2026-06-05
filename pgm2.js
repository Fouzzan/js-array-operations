const a =[2, 5, 7, 4, 1];
const b = [3, 6, 8, 9, 10];

const c = (a.concat(b).sort(function(a, b) { return a - b}));

console.log(c);