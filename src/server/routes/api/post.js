const exprees= require('express');
const mongodb =require('mongodb');
const router = exprees.Router();

//Get Post 

router.get('/',async (req,res)=>{
  const post = await loadpost();
   res.send(await post.find({}).toArray());
})
//Add Post 
router.post('/',async (req,res)=>{
    const post = await loadpost();
    await post.insertOne({
        text:req.body.text,
        cradetAt : new Date()
    });
    res.status(201).send();
})
//Delete post
router.delete('/:id',async (req,res)=>{
    const post = await loadpost();
    await post.deleteOne({_id:new mongodb.ObjectID(req.params._id)})
    res.status(200).send();
})
//LOAD DB
async function loadpost (){
    try{
        const client = await  mongodb.MongoClient.connect
        ('mongodb+srv://lanista:92aUvreOuxZ1fk2k@lanistateam-tq8uo.mongodb.net/GladioBlog?retryWrites=true&w=majority',{
            useNewUrlParser:true
        });
        return client.db('GladiBlog').collection('Api');
    }
    catch(err){
        console.log(err);
    }
}
module.exports=router;