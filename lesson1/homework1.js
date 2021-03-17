function logOne() {
  return new Promise((resolve) => 
    setTimeout(function () {
      resolve('one!');	
    }, Math.random() * 1000));
}

function logTwo() {
  return new Promise((resolve) => 
    setTimeout(function () {
      resolve('two!');		
    },Math.random() * 1000));
}

async function inOrder(a, b) {
  const res1 = await a();
  const res2 = await b();
  console.log(res1);
  console.log(res2);
}

inOrder(logOne, logTwo);