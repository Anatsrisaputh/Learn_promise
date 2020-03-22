function setTimeoutAndLog(aphabet, ms) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log(aphabet)
        resolve(aphabet)
      }, ms)
    });
  }
  
  async function runCode() {
    let aphabet1 = await setTimeoutAndLog('A', 1000);
    let aphabet2 = await setTimeoutAndLog('B', 1000);
    let aphabet3 = await setTimeoutAndLog('C', 1000);
    let aphabet4 = await setTimeoutAndLog('D', 1000);
  }
  
  setTimeoutAndLog('A', 1000)
    .then(aphabet1 => {
  
    })
  
  runCode();