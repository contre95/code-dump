// var square = (x) => {
//   var result = x*x;
//   return result;
// }

// var square = (x) => x*x;

var square = x => x*x;
console.log(square(3));

var user = {
  name: 'Lucas',
  sayHi: function(){
    console.log(`hola ${this.name}`);
  }
}

user.sayHi();
