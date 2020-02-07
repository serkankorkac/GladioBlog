const exprees = require('express');
const mongodb = require('mongodb');
const router = exprees.Router();
const connectService = require('../ConnectService/connectService');
const bcrypt = require('bcrypt');

// var user = async () => {
//   return await connectService.loadUser();
// }


router.get('/', async (req, res) => {
  const user = await connectService.loadUser();
  res.send(await user.find({}).toArray());

});

router.post('/', async (req, res) => {
    const user = await connectService.loadUser();
    bcrypt.hash(req.body.pass,10).then( async pass=>{
      await user.insertOne({
        name:req.body.name,
        email: req.body.email,
        img: req.body.img,
        pass:pass,
        author: new mongodb.ObjectId(req.body.author) //yetki
      })
      res.status(201).send();
      console.log(pass)
   });
});
router.put('/:userid', async (req, res) => {
    const user = await connectService.loadUser();
  await user.updateOne({
    _id: new mongodb.ObjectId(req.params.userid)
  }, {
    $set: {
      name: name.req.body.name,
      email: req.body.email,
      img: req.body.img,
      author: req.body.author //yetki
    }
  })
  res.status(200).send();
})

router.delete('/:userid', async (req, res) => {
    const user = await connectService.loadUser();
  await user.deleteOne({
    _id: new mongodb.ObjectId(req.params.userid)
  })
  res.status(200).send();
})

module.exports = router;