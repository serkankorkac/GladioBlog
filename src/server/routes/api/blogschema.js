const mongoose = require('mongoose');

const blogschema = mongoose.Schema({
    author:{
        type:String,
        required:true
     },
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true
    },
    comment:{
        type:Array,
        required:false
    },
    image:{
        type:String,
        required:false
    },
    date:{
        type:Date,
        default:new Date()
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId
    }
   
});
const Blog =mongoose.model('Blog',blogschema);

module.exports = Blog
