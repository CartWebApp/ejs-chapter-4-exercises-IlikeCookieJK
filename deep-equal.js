function deepEqual(value, reference) {
  if (typeof value == "object") {
    let x = Object.values(value);
    for (let val of x) {
      if (val == null) {
        return false;
      }
    }
    return false;  }
  // } else if (typeof reference == "object" && Object.values(reference) == null) {
  //   return false;  
  // } else {
  //   let x = typeof(value)
  //   console.log(x)
  // }
  

  console.log(typeof value == `object`)

  console.log(Object.values(value) == null)
  console.log(Object.values(value))
  for (const i of numbers) {
    cat = i + cat;
  }







}





// {is: "an"}
// tests
let obj = {here: null, object: 2};
console.log(deepEqual(obj, obj));
// → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
