const express = require('express');
const bodyParser =require('body-parser');
const cors = require('cors');
const app = express();

//Middleware

app.use(bodyParser.json());
app.use(cors());
const posts =require('./routes/api/post');
app.use('/api/post',posts);
const comments = require('./routes/commentService');
app.use('/api/comment',comments);
const port = process.env.PORT || 2500;

app.listen(port,()=>console.log(`server started on port ${port}`));

