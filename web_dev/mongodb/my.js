//mongo shell is like a node repl how you interact with our database and then basic crud for storing information in a database or how do  we insert something,how do you put data in a database how do you get it out that would finding ou querying or searching  how do we update dataa
//mongo is very easy to pickup if you already know javascriipt but like any new tool that we use it's not native javascript it is new
//mongodb is the database that we will be using ,right now we don't really have any data persistence  we are using arrays for faking databases ,we need a way to actually save information and have it persist  and that's the core the bare minimum of the database can do for us 
//the database we will be using is called mongo or mongodb
//why use a database instead of just saving to a file so we need a data persistence we want data to continue to exist and be saved between restarting our server and  changing things and deploying our code we want things consistently be there and not just disaapear 
//we have seen how to write to a file using node so i could just come with my own sort of jankky database by just saving data to a file ya you could do that but in general you don't wanna do that databases are more that justs a waaay to save data and have it persist they also are able to work with usually at least a ton of data at once they can store it efficiently
//acess it efficiently and compress it down and make it pretty manageable so that they can compact it into smaller size they also provide a bunch of tools and a layer of basically different methods or language that you use and on top of the database to easily insert or query or update or deletee your data so that we can do things like filter it or sort it or find like a needle in the haystack for our database 
//another thing about database is that they generally offer i mentioned     this layer on the top of the database itself  people often called this  a database management system ,where there is the actial database justt the pure data base being stored and theres this stuff on the top including security features ,administrative access controling who has access who can do what 
//so within the world of databases there are really two broad categories sql databases and no sql databases,eiter database uses sql or  it jsut get lumped into this category of nosql databases
//sql databases--so what they have in common is that they use this structured query language the basic syntax that they share and they are relational databases so everything is done in tables we define preset shema we defien preset table befor we ever add anything in our database everything has to conform to a pattern 
//mongo shell is actually incredebaliy useful   it's a reple so we write some mongo code it evaluetes it and give us feedback and it's a place where we can go to create new databases to edit what's in those databases to change secrity or administarative permisiions,managing user profiels when i say user profiles i mean database users like administrative stuff
//in mongodb shell --you can also  write javascript code and run ,
//the basic concept of having sepperate databases in mongo and prety much any database managment system you use whether it's sql one or not we can have multiple databases at once where i can have a database for my twitter app or and then a seperaaate entirely different database for my pinterest app that i have created they aaaare not at all connected they minght both be mongo dataaabases that's the only similarity otervise they have their own set of data inside them  i can connect to them seperately they are not samething
//we often want multiple databases beacause we will be making diferent  applications and ussualy each one will have it's own database  that term database people use it to refer to mongo   in general  ,that term database people USE IT to refer to mongo in general  but also to the specific db specific database that we use or that we create inside of mongo so by default when you open up your shell  if you type db this is variable that exist in the shell this is the database that you will be using by default and if you havent done anything it will be tesst thats just a database it makes for you 
//but we can actually make a new database you can also look at your database using show database 

//the below databases are made for you but we will make our own databases
// test> show databases
// admin   40.00 KiB
// config  72.00 KiB
// local   72.00 KiB
// test> show dbs
// admin   40.00 KiB
// config  72.00 KiB
// local   72.00 KiB
// test>
//now lets talk about how we make a  database we are making a place to store our data for an application the easisest way is to use a command called use adn then a database name 
//lets make an animal shelter database we are making an animal shelter app well use animalshelter is going to look to see is there already a database calllled animalshelter so if there is not it make it for us and it switched to it to
//use nameofdatabase --you only do this once to make it and then every other time you call  use nameofdatabase youre switching to use that database  so in the shell we have to pick one database that we are working with at a time 
//---inserting data inside mongobut defore we do that we need to talk about what  data looks like in mongo  
//we want to insert documents in mongo and the way that it actually works we actually insert into collection now collection is what it sounds like it's just a grouping of data in database so instead of just having all of our information floating around in a single mongo database which is 
//we insert different pieces of ddata of into different collections and in this case of animal shelter database of animal shelter application we could have cat's collection ,dogs collection ,nice part of mongo is if we insert something into a collection that does not yet exist that collection will be made for us ok to insert we have different methods ,collection is just like a collection for similar  data

// db.collection.insertOne()--you pass in one object that will be written into that collection 
// Inserts a single document into a
// collection.
// db.collection.insertMany()
// Inserts multiple documents into a collection.

//db.dogs.insertOne({object}) --and this object actually can just be a javascript object that i pass in so i don't need to use a valid json i can treate it as javascript object it wil be turned into bson 
//_id --this property is automatically created for us by mongo and it is what is known as a primary key it nedds to be unique for every single  element it will be unique mongo is setting it up for us 
//if an inserted document omits the _id field ,the mongo db driver automatically generates an objectid for the _id field ,objectid is quickly generated uniques value which is assigned to _id field 
//we dont have to enforce any sort of consistent sructure for a collection , i don't have to follow any format i don'tt have any constrain set up mongo does now support that you can set up this constrained that will be enforced but it is not compelsory    ,when you insert you need to specify the collection youre inserting into 

//db.collectionName.find()--no argument passed in and it will return every document/element inside of in a collection often we may want all of these documents inside of the collection but often we may have some criteria that we are trying to find based upon 
//for ex if i want to find the dogs that are corgi db.dogs.find({breed:'corgi'})--(here we can do a lots of stuff using query operatiors but now we are just gonna directly matche) --then i can pass in an object here docs refer to it as query and it's optional as we have already seen 
//db.dogs.find({breed:'corgi'})--it is goig to give one or more result based upon the search query ,but if you want one there is method called db.dogs.findOne({breed;'corgi;})
//technically findOne() returns the actual document what find returns is something known as cursor to the document that match query ,cursor--think of it as a pointer or reference to the results ,we can have multiple criteria multiple things that we are finding based upon ,we can do like match based upon a range and there are far more complex things that we can do 
//db.cats.find()==db.cats.find({}) this both are exact things they are same--it;s just gives everything in that collection 
//we can have multipel criteris i.e. we can pass in multiple fields as a criteria to find upon 
//------------updating-------
//whether it;s in mongo or any sql flavor database --to update something what we are really doing is first finding the things   to update and then specifying how to update it ,so there are two arguments that we need to provide what we are trying to find to update and then how to update it 
//  update will only update the first thing that matches vs update many will update all 
//we have to use the special operators in mongo when we are when we are calling update all of this operator start with dollar sign ,$set--replaces the value of the field with the specified value/new value or it adds fields that does not exist 
//$currentDate:{lastmodified:true}--update last modified to be current date,whatever the current date ,we can pass in multiple operators 
//db.dogs.updateOne({name:'blue'},{$set:{age:4}})
//animalShelter> db.dogs.updateOne({name:"blue"},{$set:{iscatfriendly:true,breed:'lab'}})--we can also update multiple fields like this 
//what if i try and update fields something that is not currently in the document--what it will do is it will create that field if does not already exist 
//$set --that's what we use to replace some field values or to add a field that does not exist 
//we can pass in multiple operators --see the screenshot of $currentDate operator
//we can use multiple operators as given below
// db.collection.updateOne(
//     <query>,
//     [
//        { $set: { status: "Modified", comments: [ "$misc1", "$misc2" ] } },
//        { $unset: [ "misc1", "misc2" ] }
//     ]
//     ...
//  )
//ISOdate is the property in bson that doesnot exist in json 

// db.collection.replaceOne()--Replaces at most a single document that match a specified filter even though multiple documents may match the specified filter.
//the above one replaceone is going to replace completely ,replaceone can be used to completely replaced the contents of some document so instead on adding some value in or modifying  value if i just want to replace everything in one go while keeping the id same

//--------------------delete--------------

//delete one is going to expect us to pass in some criteria that we are trying to delete based upon 
//animalShelter> db.dogs.deleteOne({name:'blue',breed:'retriver'})--we can pass in multiple criteria 
// { acknowledged: true, deletedCount: 1 }
//deleting more than one or many things as below
// animalShelter> db.cats.deleteMany({isAvailable:false})
// { acknowledged: true, deletedCount: 2 }

//db.dogs.deleteMany({})--by doing this entire collection of dogs will be deleted,the all docs inside dogs collection are deleted in one go
//you can use fancier operators when we delete just like when we are using fancier operator when we are finding or querying we just havent seen them yet but we could do things like use the or operator or less than operator ,so delete where age is  how about greater than 30 

//---------------operators---------------------

//$size--select or find element based upon the size of some array that they are storing in a document 
//$in--which is a way to select documents based upon some value being in the array of some values

//----------------mongoose-------------------

//mongoose is an tool that helps connect node  and javascript to mongo ,it is odm and provide methods and tools to help that ,that experience of using mongodb within javascript it helps   make that better ,,how do we start connecting to a mongo database not from the mongo shell but now from the node app
//so we have been learning mongo on its own in vaccume  just using shell to interact with databases and make new dogs,cata whatever fing them update,deletse them we have been doing that just by typing code into shelll(mongo shell==mongosh) which is not usually how we use databases although sometime we might use that but often mosts of the time we have an application and that application is going to be interacting our database 
//when somebody signs up through a web page for our app we often want to create a user account in our mongo databaase so we need a way to connect for us atleast an express appp a node application with mongo 
//so there are bunch of this things called drivers for mongo this are different ways sort of to connect mongo with programming languages like node.js,python etc 
//so there is a node.js driver which is an npm package that we installed that we can then use to connnect via node to a mongo database 
//--https://www.mongodb.com/docs/drivers/