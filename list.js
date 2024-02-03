function arrayToList(arr) {
  let cat = [];
  for (i = 0; i < arr.length; i++) {
    let x = arr[i];
    cat.unshift(x)
  }
  let list = null;
  for (i = 0; i < arr.length; i++) {
    let x = cat.splice(0, 1);
    list = { value: x, rest: list }
  }
  return list;
}

const enterprise = [];
function listToArray(list) {
  let x = Object.values(list);
  let h = x[0].toString();
  let hi = parseFloat(h);
  let y = x[1];
  if (y === null) {
    let h = x[0].toString();
    let hi = parseFloat(h);
    enterprise.push(hi);
    return enterprise;
  } else {
    enterprise.push(hi);
    listToArray(y);
  }
  return enterprise;
}


let akashi = null;
function prepend(x) {
  akashi = { value: x, rest: akashi }
  return akashi;
}

function nth(warspite,elizabeth) {
  for (i = 0; i < elizabeth + 1; i++){
  let x = Object.values(warspite);
  let h = x[0].toString();
  let hi = parseFloat(h);
  let y = x[1];
  warspite = y;
  belfast = hi;
  }
  return belfast;
}


// tests
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
