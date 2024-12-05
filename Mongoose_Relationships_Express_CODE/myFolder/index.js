const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

const Farm = require('./models/farm');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStandTake2')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

//farm routes

app.get('/farms',async(req,res)=>{
    const farms = await Farm.find({});
    res.render('farms/index',{farms});
})
app.get('/farms/new',(req,res)=>{
    res.render('farms/new');
})
//never put the /farms/new route after /farms/id route beacause if you do so browser will consider new as id and will match the route /farms/:id and not the new wala route

app.get('/farms/:id',async(req,res)=>{
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show',{farm});
})

app.delete('/farms/:id',async(req,res)=>{
    // console.log('deleteing');
    const farm = await Farm.findByIdAndDelete(req.params.id);
    res.redirect('/farms');
})


app.post('/farms',async(req,res)=>{
    const farm = new Farm(req.body);
    await farm.save();
    res.redirect('/farms');
})

//the id in the path of the route is farm id

app.get('/farms/:id/products/new',async(req,res)=>{
    const {id}= req.params;
    const farm = await Farm.findById(id);
    res.render('products/new',{categories,farm})
})

app.post('/farms/:id/products',async(req,res)=>{
    const {id} = req.params;
    const farm = await Farm.findById(id);
    // const product = new Product(req.body);
    const {name,price,category}= req.body;
    const product = new Product({name,price,category});
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${farm._id}`);
})

//----------------product routes------------------------

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
})

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate('farm','name');
    res.render('products/show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories })
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})



app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})


//--------------------------notes-------------

//middleware in mongoose are the functions that we can run or we can tell mongoose to run there is section on the docs called middleware 
//we can tell mongoose to run fuctions before certain things like before delete or update one or after it's actually pre and post IS THE terms they use OR specific quries we can do something before or after something happens  


//mongoose middleware are entirely distinct from the express middleware     