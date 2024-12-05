const express=require('express');
const app = express();
const mongoose =require('mongoose');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const path = require('path');

mongoose.connect('mongodb://localhost:27017/yelp-camp')
.then(()=>{
    console.log('express app connected to database using mongoose ');
})
.catch(e=>{
     console.log('error,failed to connect to database');
     console.log(e);
})

app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')));


//------routes------

app.get('/tagCloud',(req,res)=>{
    res.render('routeRenders/tagCloud');

})
app.listen(3000,(req,res)=>{
    console.log('express server started, listening on port 3000');
})