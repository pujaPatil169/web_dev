const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('connection open')

    })
    .catch((err) => {
        console.log('oh no error');
        console.log(err);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 30
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'price must be positive']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categorie: {
        type: [String],
        default: ['cycling']

    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        onstore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['s', 'm', 'l']
    }
})

// const Product=mongoose.model('Product',productSchema);
//--------------------instance method--------------------
productSchema.methods.greet = function () {
    console.log(`hellow howdy from ${this.name}`);  //this inside of this method refers to the individual instance of Product class
}; //here you definetly want to use an traditional function expression and not an arrow function beacause the value of this changes think back when we talked about arrow functions the value of this in an instance method will be the particular instance of product but if we use an aroow function then we wont have that value for this 

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save(); //this in this case refers to the /equals to the instance of the Product class/collection/model
    //the above one does not returns promise it returns thenable object which behaves like promise 
}
// bike.greet();//greet is an instance method, .save() is also instance method
// Product.find(),Product.findOneAndUpdate()  //find(),findOneAndUpdata() and many more this are class or static methods

productSchema.methods.addCategory = function (newCat) {
    this.categorie.push(newCat);
    return this.save();
    //above we returns this.save() which is thenable so it behaves like promise we can await it somewhere else we are awaiting it below inside findproduct function await findProduct.addCategory
}

//-----------------static methods------------------
productSchema.statics.fireSale=function(){
    return this.updateMany({},{onSale:true,price:0});
    
}//here this refers to the model that is product class and {} first argument in updatMany refers to everything
//this inside of the static method refers to the modal class itself 

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'tire pump' });
    console.log(foundProduct);
    foundProduct.greet(); //this inside of this method refers to the individual instance in this case foundproduct
    // foundProduct.onSale=!foundProduct.onSale;
    // foundProduct.save();
    //innstead of above two line of code now we have instance method toggleOnSale that will be doing that
    await foundProduct.toggleOnSale(); //it involves .save() operation which takes time hence awaited 
    console.log(foundProduct);
    await foundProduct.addCategory('outdoors');
    console.log(foundProduct);
}
//every time we call save it does take time it is an asynchronous operation so what we will probably do is we can return that promise line82 and await 95

findProduct();
Product.fireSale().then(res=>console.log(res));

// Model Creation: Ensure that the model is created after defining all schema methods.

// const rango= new Product({
//     name: 'sumo suv', price: 90, color: 'white', categorie: ['carrier'], qty: {}, size: ['l']
// })
// rango.save()
// .then(data=>{
//     console.log('it worked');
//     console.log(data);
// })
// .catch(err=>{
//     console.log('oh no error');
//     console.log(err);
// })
// rango.greet();

// const bike= new Product({   --ReferenceError: Cannot access 'Product' before initialization--means you can use new product after initialisation of product model and you should define all the schemas and instance methods before defining model

// Product.findOneAndUpdate({name:'rider'},{price:-70,size:'xs'},{ new:true, runValidators: true })
// .then(data=>{
//     console.log('it worked');
//     console.log(data);
// })
// .catch(err=>{
//     console.log('oh no error');
//     console.log(err);
// })
//above code will throw this below error
// oh no error
// Error: Validation failed: size: `xs` is not a valid enum value for path `size`., price: price must be positive
//color:red is not defined in schema it won't be added to database but it wont throw any error ,it required is not mention in price and if you enter NUmber as a string then it will take it and convert it into nuber 
//Product is a class/collection while bike,rider,tire pump are the instances of product 

//validations apply automatically when something is being created but when something is being updated it doesn't apply automatically you need to tell mongoose explicitly to apply validations while updating like---by setting runValidors option to true it's default value is false  // Product.findOneAndUpdate({name:'rider'},{price:-70,size:'xs'},{ new:true, runValidators: true })
