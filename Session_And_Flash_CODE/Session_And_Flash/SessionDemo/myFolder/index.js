const express = require('express');
const app = express();
const session = require('express-session');


const sessionOptions = { secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false }
app.use(session(sessionOptions));
//this line gives deprecation warning about resave and saveUninitialize-- app.use(session({secret:'thisisnotagoodsecret'}));//--------this is a middleware

//inside of any route or middleware on the request object at any  time assuming we have this(above) middleware setupp at any time on our request ,incoming request object we will now have session property available 

app.get('/viewCount',(req,res)=>{
    if(req.session.count){
        req.session.count +=1;
    }else{
        req.session.count =1;
    }

    res.send(`you have viewed this page ${req.session.count} times`);
})


app.get('/register',(req,res)=>{
    const {username='Anonymous'} =req.query;
    req.session.username= username;
    res.redirect('/greet');
})

app.get('/greet',(req,res)=>{
    const {username}= req.session;
    res.send(`welcome back ${username}`);
})
app.listen(3000,()=>{
    console.log('server is listening on port 3000');
})