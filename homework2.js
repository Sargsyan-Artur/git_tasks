function addWithDelay(...a) {
  let b = 0;

  return new Promise(function (resolve, reject) {
    for(const i of a) {
      if(i < 0) {
        reject(new Error('Error! Some parameter is a negative number!'));
      }else{
        b += i;
      }
    }
    setTimeout(() => resolve(b), 2000);
  });
}

console.log(addWithDelay(1,3,3,-3));