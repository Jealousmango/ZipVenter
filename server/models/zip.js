var mongoose = require('mongoose');
var zipSchema = new mongoose.Schema({
  title : { type : String, required : true },
  vent : { type : String, required : true },
  zip : { type : Number, required : true },
  _ : [{ type : mongoose.Schema.Types.ObjectId, ref: '' }]
}, { timestamps: true });

mongoose.model('zips', zipSchema);
