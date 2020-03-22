let array = [1, 2, 3, 4, 5, 6];

console.log(array)

Array.prototype.myFilter = function (callbackFn) {
  let filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    let isAllow = callbackFn(this[i]);
    if (isAllow) {
      filteredArray.push(this[i])
    } else {
      // Do nothing
    }
  }

  return filteredArray;
}

let array1 = array.myFilter(x => x % 3 == 0);

console.log(array1)