const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');

const sessionOptions = {secret:'thisisnotgoodsecret',resave:false,saveUninitialized:false}
app.use(session(sessionOptions));
app.use(flash())//now flash will be availabel on req object of every route and middleware of this file 

const Farm = require('./models/farm');

mongoose.connect('mongodb://localhost:27017/flashDemo')
.then(()=>{
    console.log('connectioin to mongoose established')
})
.catch(err=>{
    console.log('oh no mongo connection error');
    console.log(err);
})

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}));
//above is body parsing middleware

//---------middleware-----------

app.use((req,res,next)=>{
    res.locals.messages = req.flash('success')
    next();
});

//Farm Routes

app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms })
})
app.get('/farms/new', (req, res) => {
    res.render('farms/new')
})
app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show', { farm })
})

app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    req.flash('success','succesfully created the farm ')
    res.redirect('/farms')
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})