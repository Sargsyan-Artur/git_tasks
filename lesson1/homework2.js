function addWithDelay(...a) {
  let sum = 0;

  return new Promise(function (resolve, reject) {
    for(const i of a) {
      if(i < 0) {
        reject(new Error('Error! Some parameter is a negative number!'));
      }else{
        sum += i;
      }
    }
    setTimeout(() => resolve(sum), 2000);
  });
}

addWithDelay(1,3,3,3)
  .then((resolve) => console.log(resolve))
  .catch(err => console.log(err));
   