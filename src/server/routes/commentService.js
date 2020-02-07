const exprees= require('express');
const mongodb =require('mongodb');
const router = exprees.Router();
const mongoose = require('mongoose');
const connectService = require('../routes/api/ConnectService/connectService');

router.put('/:blogid',async (req,res)=>{
    const post = await connectService.loadpost();
    await post.updateOne({ _id:new mongodb.ObjectId(req.params.blogid)},{$set:{comment:{content: req.body.content,userid:new mongodb.ObjectId}}});
    res.send(200).send();
});
router.delete('/:blogid',async (req,res)=>{
    const post = await connectService.loadpost();
    await post.updateOne({ _id:new mongodb.ObjectId(req.params.blogid) },{$set:{comment:[]}})
    res.send(200).send();
});

module.exports=router;