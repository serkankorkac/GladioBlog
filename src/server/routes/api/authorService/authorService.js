const mongodb = require('mongodb');
const exprees = require('express');
const router = exprees.Router();
const connectService = require('../ConnectService/connectService');

router.get('/', async (req, res) => {
  const author = await connectService.loadAuthor();
  res.send(await author.find({}).toArray());
});

router.post('/', async (req, res) => {
    const author = await connectService.loadAuthor();
  await author.insertOne({
    authorname: authorname.req.body.name,
  })
  res.status(201).send();
});
router.put('/:authorid', async (req, res) => {
    const author = await connectService.loadAuthor();
  await author.updateOne({
    _id: new mongodb.ObjectId(req.params.authorid)
  }, {
    $set: {
        authorname: authorname.req.body.name //yetki
    }
  })
  res.status(200).send();
})

router.delete('/:authorid', async (req, res) => {
    const author = await connectService.loadAuthor();
  await author.deleteOne({
    _id: new mongodb.ObjectId(req.params.authorid)
  })
  res.status(200).send();
})

module.exports = router;