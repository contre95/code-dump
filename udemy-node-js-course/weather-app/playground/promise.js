// var somePromise = new Promise( (resolve,reject)=> {
//   resolve("Hey it worked!");
//   // reject("Hey it didn't work!");
// });
//
// somePromise.then((messege) => {
//   console.log('Succes: ',messege);
// }, (errorMessege) =>{
//   console.log('Error: ',errorMessege);
// });


var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('They must be integers');
    }
  })
};

asyncAdd(43, '1').then((result) => {
  // console.log(`The result is  ${result}`);
  return asyncAdd(result, 91);
}, (errorMessege) => {
  console.log(errorMessege);
}).then((result) => {
  console.log(result);
},(errorMessege)=> {
  console.log(errorMessege);
});
