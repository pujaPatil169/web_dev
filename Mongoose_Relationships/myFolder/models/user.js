const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ralationshipDemo')
.then(()=>{
    console.log('mongo connection open ');

})
.catch(err =>{
    console.log('mongo connection error ');
    console.log(err);
})

const userSchema = new mongoose.Schema({
    first:String,
    last:String,
    addresses:[
        {
            street:String,
            city:String,
            state:String,
            country:{
                type:String,
                required:true
            }
        }
    ]
})

const User = mongoose.model('User',userSchema);

const makeUser = async ()=>{
    const u = new User({
        first:'harry',
        last:'poter'
    })
    u.addresses.push({
        _id: {_id: false},//this will turn off the id added by mongoose to this address block 
        street:'3rd',
        city:'newyork',
        state:'newyork',
        country:'usa'
    })


    const res = await u.save();
    console.log(res);
}

// makeUser();

const addAddress = async(id)=>{
    const user = await User.findById(id);
    user.addresses.push({
        street:'5th st',
        city:'alabama',
        state:'michigan',
        country:'usa'
    })
    const res = await user.save();
    console.log(res);
}

addAddress("66b212644e6b2d89ee50cafd");
//-----------------notes---------------

//mongo is just gonna add a new id for each document 
//mongoose is gonaa treat addresses behind the scenes as it's own embedded schema 
//we can break up our document schemas into smaller pieces of schemas 

// //{
// first: 'harry',
// last: 'poter',
// _id: new ObjectId('66b212644e6b2d89ee50cafd'),
// addresses: [
// {
// street: '3rd',
// city: 'newyork',
// state: 'newyork',
// country: 'usa',
// _id: new ObjectId('66b212644e6b2d89ee50cafe')  ----if we don't need the id here then we can turn it off 
// }
// ],
// __v: 0
// }