//it often is more efficient when we have large volume of data to actually store a reference to the parent on the child ,
//rather than stroring a reference to the child on a parent like list of id's 
//in this case we can a store an reference to the user on a individual tweet 

const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/ralationshipDemo')
.then(()=>{
    console.log('mongo connection open ');

})
.catch(e=>{
    console.log('connection to mongo failed');
    console.log(e);
})

const userSchema = new mongoose.Schema({
    username:String,
    age:Number
})

const User = mongoose.model('User',userSchema);

const tweetSchema = new mongoose.Schema({
    text:String,
    likes:Number,
    user:{type:mongoose.Schema.Types.ObjectId ,ref:'User' }
})

const Tweet = mongoose.model('Tweet',tweetSchema);

// const makeTweets = async()=>{
//     const user =  new User({username:'chickenfan99',age:56});
//     const tweet1 = new Tweet({text:'omg i love chicken family ',likes:0});
//     await user.save();
//     tweet1.user = user;
//     await tweet1.save();

// }

//i can take the entire  object representing the user and set it as the user property in tweet and treat it as if the entire thing is being stored there in reality all that is happening is that i am setting the objectid when i save 



// const makeTweets = async()=>{
//     const user = await User.findOne({username:'chickenfan99'});
//     const tweet2 = new Tweet({text:'chickens make a lot of noise',likes:78});
//     tweet2.user = user;
//     await tweet2.save();

// }
// makeTweets();

// Tweet.findByIdAndDelete('66b3252c4ad16fd9599c4fc5')
// .then(()=>{
//     console.log('tweet deleted');
// })

const findTweet = async()=>{
    const t = await Tweet.find({}).populate('user','    ');
    console.log(t);
}

findTweet();

//in mongo we can denormalise and that's a fancy way of saying have some duplicated information so we can store some data on both sides if it makes sence in our applicaion generally that's a big no no in SQL databases but in mongo if it can make sence then we can duplicate some data 
//denormalisation just means we can duplicate some data 