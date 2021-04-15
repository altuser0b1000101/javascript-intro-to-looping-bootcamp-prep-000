function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      arr.push(`I am 1 strange loop.`);
    } else {
      arr.push(`I am ${i} strange loops.`);
    }
  }
  return arr;
}
const arr = [];
const out = forLoop(arr);
console.log(out);

//strange(2)

function whileLoop(n) {
while (n > 0) {
console.log(–n);
}
return “done”;
}