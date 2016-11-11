// Load mongoose package
var mongoose = require('mongoose');

// Connect to MongoDB and create/use database called todoAppTest
mongoose.connect('mongodb://localhost/todoAppTest');

// Create a schema
var TodoSchema = new mongoose.Schema({
  Title: String,
  Vent: String,
  Zip: Number,
  updated_at: { type: Date, default: Date.now },
});

// Create a model based on the schema
var Todo = mongoose.model('Todo', TodoSchema);

// Create a todo in memory
var todo = new Todo({Title: 'Poopy', Vent: 'This place sucks!', Zip: 98056});

// Save it to database
todo.save(function(err){
  if(err)
    console.log(err);
  else
    console.log(todo);
});

Todo.create({Title: 'Create something with Mongoose', Vent: 'Hello', Zip: 98056}, function(err, todo){
  if(err) console.log(err);
  else console.log(todo);
});

// Find all data in the Todo collection
Todo.find(function (err, todos) {
  if (err) return console.error(err);
  console.log(todos)
});
