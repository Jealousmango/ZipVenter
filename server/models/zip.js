var mongoose = require('mongoose');
// var validate = require('mongoose-validator');

// var zipValidator = [
//   validate({
//     validator: 'isLength',
//     arguments: [3, 50],
//     message: 'Name should be between 3 and 50 characters'
//   }),
//   validate({
//     validator: 'isAlphanumeric',
//     passIfEmpty: true,
//     message: 'Name should contain alpha-numeric characters only'
//   })
// ];

var zipSchema = new mongoose.Schema({
  title : { type : String, required : true },
  vent : { type : String, required : true },
  zip : { type : Number, required : true, min: 5, max: 5 },
  // _ : [{ type : mongoose.Schema.Types.ObjectId, ref: '' }]
}, { timestamps: true });

mongoose.model('zips', zipSchema);
