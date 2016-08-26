var mongoose = require('mongoose');
var Zip = mongoose.model('zips');
module.exports = {
  // session : function(req, res) {
  //   if (!req.session.zipId) return res.send({ error : 'not_logged_in'});
  //   return res.send({ zipId : req.session.zipId, name : req.session.name });
  // },
  index : function(req, res) {
    // console.log(req.session);
    Zip.find(function(err, zips) {
      if (err) return res.send(err);
      res.send(zips);
    });
  },
  // login : function(req, res) {
  //   if (!req.body.name) return res.send({ error : 'no_name_in_body'});

    // Zip.create(req.body, function(err, newZip) {
    //   if (err) {
    //     return Zip.findOne({ name : req.body.name }, function (err, existingZip){
    //       // req.session.name = existingZip.title;
    //       // req.session.zipId = existingZip._id;
    //       return res.send(existingZip);
    //     });
    //   }
    //   // req.session.name = newZip.name;
    //   // req.session.zipId = newZip._id;
    //   return res.send(newZip);
    // });
  // },
  create : function(req, res) {
    // var zip = new Zip({
    //   title : 'whatsupsdfklajsdf',
    //   vent : 'seattle',
    //   zip : 983,
    // })
    // zip.validate(function(error) {
    //   console.log('*****here*****')
    //   console.log(error);
    //   res.send('ok');
    // });
    // zip.save(function(err, d))
    Zip.create({
      title : req.body.title,
      vent : req.body.vent,
      zip : req.body.zip,
    }, function(err, zip) {
      if (err) return res.send(err);
      res.send(zip);
    });
  },
  find : function(req, res) {
    Zip
      .findOne({ _id : req.params._id })
      .populate('_zip')
      .exec(function(err, zip) {
        if (err) return res.send(err);
        res.send(zip);
    });
  }
};
