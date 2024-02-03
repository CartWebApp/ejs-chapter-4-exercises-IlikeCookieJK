function deepEqual(value, reference) {
  let x = Object.values(value);
  let y = Object.values(reference);
  if (y.length != x.length) {
    return false;
  } else {
    const list1 = []
    for (p of x) {
      list1.push(typeof (p))
      if (p == null) {
        return false;
      }
    }
    const list2 = []
    for (w of y) {
      list2.push(typeof (w))
      if (w == null) {
        return false;
      }
    }
    for (i = 0; i < x.length; i++) {
      let q1 = list1.slice(i, i + 1)
      let q2 = list2.slice(i, i + 1)
 
      if (q1.toString() != q2.toString()) {
        return false;
      } else  {
        return true
      }
    }
  }
}

// tests
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
