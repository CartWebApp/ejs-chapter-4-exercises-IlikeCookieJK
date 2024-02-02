function arrayToList(arr) {
  let cat = [];
  for (i = 0; i < arr.length; i++) {
    let x = arr[i];
    cat.unshift(x)
  }
  let list = {}
  for (a of cat) {
    list = {value: a, rest: list}
  }
  // let x = list.replace(`{}`,null)

  // for (x of list) {
  //   if (x === ` `) {
      
  //   }
  // }
  // console.log(x)
  console.log(typeof list)
}

function listToArray(list) {
  // Add code.
}

// tests
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
