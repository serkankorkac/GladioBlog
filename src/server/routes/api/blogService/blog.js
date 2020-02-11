const exprees= require('express');
const mongodb =require('mongodb');
const router = exprees.Router();
const mongoose = require('mongoose');
const connectService = require('../ConnectService/connectService');
const blog = require('../blogschema')
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
        image:req.body.image,
        userid:new mongodb.ObjectId(req.params.userid),
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

module.exports=router;