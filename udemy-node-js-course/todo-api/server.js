const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

//mongoose model

var TodoModel = mongoose.model('Todo',{
  text: {
    type: String
  },
  completed:{
    type: Boolean
  }
});

var newTodo = new TodoModel({
  text: 'Go skating',
  completed: 123
});

newTodo.save().then((res)=>{
  console.log('This shit was saved: ', JSON.stringify(res),res);
},(err)=>{
console.log(err);
});
