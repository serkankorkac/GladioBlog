const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
var session = require('express-session')
const cookieparser = require('cookie-parser');
const MongoDBStore = require('connect-mongodb-session')(session);
const coonetionString = 'mongodb+srv://lanista:92aUvreOuxZ1fk2k@lanistateam-tq8uo.mongodb.net/GladiBlog?retryWrites=true&w=majority';
const connectService = require('./routes/api/ConnectService/connectService');
const accountcontroller = require('./routes/api/accountService/accountservice');
//Middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieparser());
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 180000
  },
  store: store
}))
var store = new MongoDBStore({
  uri: coonetionString,
  collection: 'mySessions'
});
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  if (req.session.user) {
    const user = connectService.loadUser();
    user.findById(req.session.user._id).then(user => {
      req.user = user;
      next();
    }).catch(err => console.log(err));
  }

})
const posts = require('./routes/api/blogService/blog');
app.use('/api/post', posts);
const comments = require('./routes/api/commentService/commentService');
app.use('/api/comment', comments);
const counter = require('./routes/api/counterService/counterService');
app.use('/api/counter', counter);
const user = require('./routes/api/userService/userService');
app.use('/api/users', user);
const accountService = require('./routes/api/accountService/accountservice');
app.use('/api/account', accountService);
const author = require('./routes/api/authorService/authorService');
app.use('/api/author', author);
const port = process.env.PORT || 2500;
// app.post('/login', (req, res, next) => {

//   const email = req.body.email;
//   const password = req.body.password;
//   const user = connectService.loadUser();
//   user.findOne({
//     email: email
//   }).then(user => {
//     if (!user) {
//       return res.send('email yok')
//     }
//     bcrypt.compare(password, user.password).then(isSuccses => {
//       if (isSuccses) {
//         req.session.user = user;
//         req.session.isAc = true;
//         return req.session.save(function (err) {
//           console.log(err);
//           res.redirect('/')
//         })
//       }
//     }).catch(err => {
//       console.log(err);
//     })
//   }).catch(err => {
//     console.log(err);
//   })

// });
 app.set('view engine', ['css','icon']);
 app.set('views','../assets/css');
app.use(express.static(path.join(__dirname, '../assets/css/')));

// app.get('/login', (req, res, next) => {
//   const index = require('../Login_v14/index.html')
//   res.sendFile(index)
// })

app.listen(port, () => {
  console.log(`server started on port ${port}`)
});