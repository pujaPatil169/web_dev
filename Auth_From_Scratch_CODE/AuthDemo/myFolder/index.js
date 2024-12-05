const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./model/user.js');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/loginDemo')
    .then(() => {
        console.log('mongo connectiion open');
    })
    .catch(() => {
        console.log('failed to connect with mongo');
    })


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'thisisnotgoodsecret' }));

const requireLogin = async (req,res,next)=>{
    if(!req.session.user_id){
        res.redirect('/login');
    }
    next();
}

app.get('/', (req, res) => {
    res.send('this is home page');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const user = new User({
        username,
        hashPassword: password
    })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/secret');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // const user = await User.findOne({ username });
    // const validUser = await bcrypt.compare(password, user.hashPassword);
    //on the behalf of obove two line i am adding the line below which will combinely do the task both above line in single line
    const foundUser=await User.findAndValidate(username,password);
//my mistake in above line i was missing the await in above line that's why  i was getting an error

    if (foundUser) {
        req.session.user_id = foundUser._id;
        return res.redirect('/secret');
    } else {
        return res.redirect('/login');
    }

});

app.post('/logout',(req,res)=>{
    req.session.user_id = null;
    // req.session.destroy();  //this will destroy entire session including all the information store in it
    res.redirect('/login');
})
app.get('/secret',requireLogin, (req, res) => {
    // res.send('this is secret you cannot see me unless you are logged in ')
    // if(!req.session.user_id){
    //     return res.redirect('/login');//ye ham return isliye kar rahe hai kyoki agar ye excute hua to niche vala na ho matlab dono bhi excute na hojaye
    // }this if logic is moved in middlware requireLogin
    res.render('secret');
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})

//----------notes-------
//cookies and session they provide a way to add statefulness to the http 