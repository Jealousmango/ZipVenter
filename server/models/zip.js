var mongoose = require('mongoose');
var zipSchema = new mongoose.Schema({
  title : { type : String, required : true },
  vent : { type : String, required : true },
  zip : { type : Number, required : true, validate: {
    validator: function(v) {
      return String(v).length === 5;
    }, message: 'ZipCode has to be 5 digits!'
  }},
}, { timestamps: true });
mongoose.model('zips', zipSchema);
