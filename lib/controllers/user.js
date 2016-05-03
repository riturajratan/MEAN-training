'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');


exports.query = function(req, res) {
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
exports.show = function(req, res) {
    var userid = req.params.id;
    User.findById(userid)
        .exec(function(err, user) {
            if (err) {
                console.log(err);
                return res.json(404, err);
            }
            if (!user) {
                console.log('notfound');
                return res.send(404);
            }
            if (user) {
                return res.json(user);
            }
            return res.send(403);

        });

};

//update users

exports.update = function(req, res) {
    var userid = req.params.id;
    var user_data = req.body;

    User.findOneAndUpdate({ _id: userid }, user_data, function(err, user) {
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
exports.create = function(req, res) {
    var data = req.body;
    var newUser = new User(data);
    console.log(data);
    console.log(newUser);
    newUser.save(function(err, savedUser) {
        if (err){
          return res.json(400, err);
        } 
      return res.json(202,savedUser);
    });



};



exports.delete = function(req, res) {
  var user_id = req.params.id;
    User.findOneAndRemove({_id: user_id}, function(err, user) {
      if (err) {
        res.json(400, err);
      } else {
        user.remove();
        res.send(200);
    }
  });
};

