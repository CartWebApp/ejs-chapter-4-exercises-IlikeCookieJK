function range(start, end, step = 1) {
  let cat = [];
  if (start > end) {
    for (let i = start; i >= end; i = i + step) {
      cat.push(i);
    }
  } else if (start < end) {
    for (let i = start; i <= end; i = i + step) {
      cat.push(i);
    }
  }
  return cat;
}

function sum(numbers) {
  let cat = 0;
  for (const i of numbers) {
    cat = i + cat;
  }
  return cat;
}






// tests
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
