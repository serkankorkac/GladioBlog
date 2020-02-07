const express = require('express');
const bodyParser =require('body-parser');
const cors = require('cors');
const app = express();

//Middleware

app.use(bodyParser.json());
app.use(cors());
const posts =require('./routes/api/blogService/blog');
app.use('/api/post',posts);
const comments = require('./routes/api/commentService/commentService');
app.use('/api/comment',comments);
const counter=require('./routes/api/counterService/counterService');
app.use('/api/counter',counter);
const user = require('./routes/api/userService/userService');
app.use('/api/users',user);
const author = require('./routes/api/authorService/authorService');
app.use('/api/author',author);
const port = process.env.PORT || 2500;

app.listen(port,()=>console.log(`server started on port ${port}`));

