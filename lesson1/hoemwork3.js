function loadArray() {
  const listOfobj = [
    { id: 1,
      name: 'Elvis' 
    },
    
    { id: 2,
      name: 'Geras', 
    },
    
  ];
	
  return new Promise((resolve) => {
    resolve(listOfobj);
  });	
}


// function getItem(array, id) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].id === id) {
//       return new Promise((resolve) => {
//         resolve(array[i]);
//       });
//     }
//   }
	
//   return new Promise((resolve, reject) => {
//     reject(new Error('There is no such item in the array!'));
//   });
// }

function getItem(array, id) {
  return new Promise(function(resolve, reject) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        resolve(array[i]);
      }
      reject(new Error('There is no such item in the array!'));
    }
  });
}

async function myAsyncFunc(id) {
  const listOfobj = await loadArray();
	
  try {
    const getItemWithId = await getItem(listOfobj, id);
    console.log(getItemWithId);
  } catch (e) {
    console.log(e, 'eRRRRRRRRRRORRR');
  }
}

myAsyncFunc(1);