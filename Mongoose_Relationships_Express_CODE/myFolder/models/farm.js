const mongoose = require('mongoose');
const Product = require('./product');
const {Schema} = mongoose;

const farmSchema = new Schema({
    name:{
        type:String,
        required:[true,'farm must have a name ']
    },
    city:{
        type:String
    },
    email:{
        type:String,
        required:[true,'email required']
    },
    products:[
        {
            type:Schema.Types.ObjectId,
            ref:'Product'
        }
    ]
})


//----you need to write this middlewares before you compile and make model
//findById and delete route triggers the findOneAndDelete middleware

// farmSchema.pre('findOneAndDelete',async function(farm){
//     console.log(
//         'pre middleware'
//     );
//     console.log(farm);
// })

farmSchema.post('findOneAndDelete',async function(farm){
    // console.log('post middleware');
    if(farm.products.length){
        const res = await Product.deleteMany({_id : {$in: farm.products}})
        console.log(res);
    }
})

const Farm = mongoose.model('Farm',farmSchema);
module.exports = Farm;