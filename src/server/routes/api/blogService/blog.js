const exprees= require('express');
const mongodb =require('mongodb');
const mongoose = require('mongoose')
const router = exprees.Router();
const Blog = require('../blogschema')
//Get Post 

router.get('/',async (req,res)=>{
   const posts = await Blog.find();
   res.send(posts);
})
router.get('/:blogid',async (req,res)=>{
    const posts = await Blog.find({_id:new mongodb.ObjectId(req.params.blogid)});
     res.send(posts);
  })  
//Add Post 
router.post('/',async (req,res)=>{
    const newblog = new Blog({
        author:req.body.author,
        title:req.body.title,
        comment:[],
        content:req.body.content,
        image:req.body.image,
        userid:new mongodb.ObjectId(req.params.userid)
    })
    try{
    const blog = await newblog.save();
    res.status(201).json({ blog });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
})
//Delete post
router.delete('/:id',async (req,res)=>{
    try{
        await Blog.deleteOne({_id:req.params.id})
        res.status(200).send()
    }
    catch(err){
        console.log(err)
    }
   
});

module.exports=router;