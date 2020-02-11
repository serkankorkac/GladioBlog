const exprees = require('express');
const mongodb = require('mongodb');
const router = exprees.Router();
const connectService = require('../ConnectService/connectService');


router.get('/', async (req, res) => {
  const post = await connectService.loadCounter();
  res.send(await post.find().toArray());
});
router.post('/:blogid', async (req, res) => {
  const post = await connectService.loadCounter();
  await post.insertOne({
    blogid: new mongodb.ObjectId(req.params.blogid),
    counter: 1,
  });
  res.status(201).send();
});

router.put('/:blogid', async (req, res) => {
  const post = await connectService.loadCounter();
  const count = await post.findOne({
    blogid: new mongodb.ObjectId(req.params.blogid)
  });
  const counters = await count.counter;
  await post.updateOne({
    blogid: new mongodb.ObjectId(req.params.blogid)
  }, {
    $set: {
      counter: counters + 1
    }
  });
  res.send(200).send();
});
module.exports = router;