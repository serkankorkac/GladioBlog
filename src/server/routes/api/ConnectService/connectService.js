const exprees= require('express');
const mongodb =require('mongodb');
const router = exprees.Router();
const mongoose = require('mongoose');
const schema = require('../blogschema')

exports.loadpost = async function (){
    try{
        const client = await mongodb.connect('mongodb+srv://lanista:92aUvreOuxZ1fk2k@lanistateam-tq8uo.mongodb.net/node-application?retryWrites=true&w=majority',{
            useNewUrlParser:true,
            useUnifiedTopology: true
            
        });

        return client.db('GladiBlog').collection('blog');
    }
    catch(err){
        console.log(err);
    }
}

exports.loadCounter = async function (){
    try{
        const client = await mongodb.connect('mongodb+srv://lanista:92aUvreOuxZ1fk2k@lanistateam-tq8uo.mongodb.net/node-application?retryWrites=true&w=majority',{
            useNewUrlParser:true,
            useUnifiedTopology: true
            
        });

        return client.db('GladiBlog').collection('counterblog');
    }
    catch(err){
        console.log(err);
    }
}

exports.loadUser = async function (){
    try{
        const client = await mongodb.connect('mongodb+srv://lanista:92aUvreOuxZ1fk2k@lanistateam-tq8uo.mongodb.net/node-application?retryWrites=true&w=majority',{
            useNewUrlParser:true,
            useUnifiedTopology: true
            
        });

        return client.db('GladiBlog').collection('users');
    }
    catch(err){
        console.log(err);
    }
}

exports.loadAuthor = async function (){
    try{
        const client = await mongodb.connect('mongodb+srv://lanista:92aUvreOuxZ1fk2k@lanistateam-tq8uo.mongodb.net/node-application?retryWrites=true&w=majority',{
            useNewUrlParser:true,
            useUnifiedTopology: true
            
        });

        return client.db('GladiBlog').collection('author');
    }
    catch(err){
        console.log(err);
    }
}

