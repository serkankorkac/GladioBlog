const mongodb = require('mongodb');
const exprees = require('express');
const router = exprees.Router();
const connectService = require('../ConnectService/connectService');
const bcrypt = require('bcrypt');
router.get('/', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await connectService.loadUser();
  await user.findOne({
    email: email
  }).then(user => {
    if (!user) {
      return res.status(200).send('not email');
    }
    bcrypt.compare(password, user.password).then(isSuccses => {
      if (isSuccses) {
        req.session.user = user;
        req.session.isAc = true;
        return req.session.save(function (err) {
          console.log(err);
          res.status(200).send();
        })
      }
    }).catch(err => {
      console.log(err);
    })
  }).catch(err => {
    console.log(err);
  })

});
 
module.exports = router;