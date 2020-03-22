let promise = new Promise(function (resolve, reject) {
    let randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber)
    } else {
      reject(randomNumber)
    }
  });
  
  promise
    .then(function (value) {
      console.log(`value: ${value}`);
    })
    .catch(function (error) {
      console.log(`error: ${error}`)
    });