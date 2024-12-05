const mongoose = require('mongoose');
// const Schema = mongoose.Schema;---we can write this line as below as well by destructurign Schema from mongoose
const {Schema}= mongoose;
mongoose.connect('mongodb://localhost:27017/ralationshipDemo')
.then(()=>{
    console.log('mongo connection open');
})
.catch(err=>{
    console.log('error connecting to mongo ');
    console.log(err);
})

const productSchema = new Schema({
    name:String,
    price:Number,
    season:{
        type:String,
        enum:['Spring','Summer','fall','winter']
    }

})

const farmSchema = new Schema({
    name:String,
    city:'String',
    products:[{type: Schema.Types.ObjectId,ref:'Product'}]  //this is the way of us tellingg mongoose that this type for each one of this entties each document in product it is an objectid type 
    //products is going to be an array of product ids option ref will reference the model that we have already setup that we are referencing here 
})

const Product = mongoose.model('Product',productSchema);
const Farm = mongoose.model('Farm',farmSchema);



// Product.insertMany([
//     { name: 'Goddess Melon', price: 4.99, season: 'Summer' },
//     { name: 'Sugar Baby Watermelon', price: 4.99, season: 'Summer' },
//     { name: 'Asparagus', price: 3.99, season: 'Spring' },
// ])
// .then(res=>{
//     console.log(res);
// })
// .catch(e=>{
//     console.log('insertionn failed!!!!!!!');
//     console.log(e);
// })

// there is no need to do Product.save() after using insertmany beacuse it automatically saves data in mongodb unlike the method that we use to add one instance of product at a time in database theere we need to save it


const makeFarm = async()=>{
    const farm =  new Farm({name:'Full Belly Farm',city:'Guinda, CA'});
    const melon = await Product.findOne({name:'Goddess Melon'});
    farm.products.push(melon);
    await farm.save();
    console.log(farm);
}

// makeFarm();

const addProduct = async()=>{
    const farm = await Farm.findById('66b30e38d919f25ef5bb43eb');
    if(!farm) {
        console.error('farm not found');
        return;
    }
    const watermelon = await Product.findOne({name:'Sugar Baby Watermelon'});
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);
}

// addProduct();

//populating products field in farm 
Farm.findOne({name:'Full Belly Farm'})
.populate('products ')
.then(farm =>console.log(farm));

// populate is basically going to build a more complicated query behind the scenes that it then sends to mongo and it;s go and going to fetch all the associated information from a user and fill it in here instead of just an id

