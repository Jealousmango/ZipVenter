var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  name : { type : String, required : true, unique : true },
  _ : [{ type : mongoose.Schema.Types.ObjectId, ref: '' }],
  _ : [{ type : mongoose.Schema.Types.ObjectId, ref: 'answers' }]
}, { timestamps: true });

mongoose.model('users', userSchema);
