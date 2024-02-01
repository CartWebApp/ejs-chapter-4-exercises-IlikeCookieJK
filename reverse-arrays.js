function reverseArray(arr) {
  let cat = [];
  for (i = 0; i < arr.length; i++) {
    let x = arr[i];
    cat.unshift(x)
  }
  return cat;
}

function reverseArrayInPlace(arr) {
  const y = arr.length;
  for (i = 1; i < arr.length; i++) {
    let x = arr[arr.length-i];
    console.log(x)
    arr.pop()
    arr.unshift(x);
    if (i === y) {
      break;
    }
  }
  return arr;
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]