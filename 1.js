let array = [1, 2, 3]

console.log(array)

Array.prototype.myFunctionMap = function (callbackfn) {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    let newElement = callbackfn(this[i], i, this);
    array.push(newElement);
  }
  return array;
}

// Transform
let array1 = array.myFunctionMap(
  function (value) {
    return value * 2;
  }
)

console.log(array1)