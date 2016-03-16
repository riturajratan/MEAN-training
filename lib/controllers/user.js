'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');


exports.query = function(req, res){
  var Query = '',
     q = User.find({});
  q.exec(function(err, users) {
    if (err) {
      console.log(err);
      return res.send(404);
    } else {
      return res.json({users:users});
    }
  });
};

// show particluar one user
exports.show=function(req,res){
  var userid=req.params.userid;
  User.findById(userid)
  .exec(function(err,user){
    if(err){
      console.log(err);
      return res.json(404,err);
    }
    if (!user){
      console.log('notfound');
      return res.send(404);
    }
    if(user)
    {
      return res.json(user);
    }
    return res.send(403);

  });

};

//update users

exports.update = function(req, res) {
  var userid = req.params.userid;
  var user_data = req.body;

  User.findOneAndUpdate({_id: userid}, user_data, function(err, user) {
    if (err) {
      console.log(err);
      return res.json(400, err);
    }
    if (!user) {
      console.log('notfound');
      return res.send(404);
    }
    return res.send(200);
  });
};


/**
 * Create user
 */
 exports.create = function (req, res, next) {
  var data = req.body;
  data.band='';

  if(data.admin){
    data.emailVerification= {
        verified : true
    }
    data.madebyadmin=true;
  }

 var newUser = new User(data);


newUser.save(function(err, savedUser) {
 if (err) return res.json(400, err);
    if (err) return res.json(400, err);
    // console.log(req.headers.host);
    if(!data.admin){
    var activation_link = [req.headers.host, 'user', savedUser._id,'verify',  savedUser.emailVerification.token].join('/');
    (new ActivationEmail(savedUser, {activationLink: activation_link})).send(function(e) {
      return res.send(savedUser.userInfo);
    });
  }else{
    return res.send(savedUser.userInfo);
  }
});

};


