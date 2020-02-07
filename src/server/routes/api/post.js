const exprees= require('express');
const mongodb =require('mongodb');
const router = exprees.Router();
const mongoose = require('mongoose');
const connectService = require('./ConnectService/connectService');
const blog = require('./blogschema')
//Get Post 

router.get('/',async (req,res)=>{
  const post = await connectService.loadpost();
   res.send(await post.find().toArray());
})
//Add Post 
router.post('/',async (req,res)=>{
    const post = await connectService.loadpost();
    await post.insertOne({
        author:req.body.author,
        title:req.body.title,
        comment:[],
        content:req.body.content,
        counter:0,
        image:req.body.image,
        cradetAt : new Date()
    });
    res.status(201).send();
})
//Delete post
router.delete('/:id',async (req,res)=>{
    const post = await connectService.loadpost();
    await post.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    
    res.status(200).send();
});
router.put('/counter/:id',async (req,res)=>{
    const post = await connectService.loadpost();
    const count = await post.findOne({id:new mongodb.ObjectId(req.params.id)});
    const counters = await count.counter ;
    console.log(count);
    await post.updateOne({ _id:new mongodb.ObjectId(req.params.id)},{$set:{counter:counters+1}});
    res.send(200).send();
})
module.exports=router;