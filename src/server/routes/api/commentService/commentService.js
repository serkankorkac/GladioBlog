const exprees= require('express');
const mongodb =require('mongodb');
const router = exprees.Router();
const mongoose = require('mongoose');
const connectService = require('../ConnectService/connectService');

router.put('/:blogid',async (req,res)=>{
    const post = await connectService.loadpost();
    await post.findOneAndUpdate({ _id: new mongodb.ObjectId(req.params.blogid)},{$push:{comment: [{content: req.body.content,name:req.body.name,email:req.body.email,website:req.body.website,commentid:new mongodb.ObjectId}]}});
    res.send(200).send();
});
router.delete('/:blogid',async (req,res)=>{
    const post = await connectService.loadpost();
    await post.updateOne({ _id:new mongodb.ObjectId(req.params.blogid) },{$set:{comment:[]}})
    res.send(200).send();
});

module.exports=router;      