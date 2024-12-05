// test> use animalShelter
// switched to db animalShelter
// animalShelter> db.cats.insertOne({name:'charlie',age:4,color:'white'})
// {
// acknowledged: true,
// insertedId: ObjectId('669268d17700ff26075651af')
// }
// animalShelter> db.cats.insertOne({name:'maya',age:8,color:'black'})
// {
// acknowledged: true,
// insertedId: ObjectId('669268f07700ff26075651b0')
// }
// animalShelter> db.cats.find()
// [
// {
// _id: ObjectId('669233ef05e10539fcd92bd5'),
// name: 'vire',
// breed: 'scotish',
// age: 6
// },
// {
// _id: ObjectId('669268d17700ff26075651af'),
// name: 'charlie',
// age: 4,
// color: 'white'
// },
// {
// _id: ObjectId('669268f07700ff26075651b0'),
// name: 'maya',
// age: 8,
// color: 'black'
// }
// ]
// animalShelter> db.dogs.find()
// [
// {
// _id: ObjectId('6692315805e10539fcd92bd1'),
// name: 'blue',
// breed: 'lab',
// age: 4,
// iscatfriendly: true
// },
// {
// _id: ObjectId('6692319d05e10539fcd92bd2'),
// name: 'blue',
// breed: 'retriver',
// age: 13
// },
// {
// _id: ObjectId('6692326005e10539fcd92bd3'),
// name: 'will',
// breed: 'corgi',
// age: 17,
// isCatFriendly: true
// },
// {
// _id: ObjectId('6692326005e10539fcd92bd4'),
// name: 'ron',
// breed: 'shepard',
// age: 9,
// color: 'grey'
// }
// ]
// animalShelter> db.dogs.deleteOne({name:'blue',breed:'retriver'})
// { acknowledged: true, deletedCount: 1 }
// animalShelter> db.dogs.find()
// [
// {
// _id: ObjectId('6692315805e10539fcd92bd1'),
// name: 'blue',
// breed: 'lab',
// age: 4,
// iscatfriendly: true
// },
// {
// _id: ObjectId('6692326005e10539fcd92bd3'),
// name: 'will',
// breed: 'corgi',
// age: 17,
// isCatFriendly: true
// },
// {
// _id: ObjectId('6692326005e10539fcd92bd4'),
// name: 'ron',
// breed: 'shepard',
// age: 9,
// color: 'grey'
// }
// ]
// animalShelter> db.dogs.deleteMany({is
// ...
// animalShelter> db.dogs.deleteMany({iscatfriendly:true})
// { acknowledged: true, deletedCount: 1 }
// animalShelter> db.dogs.find()
// [
// {
// _id: ObjectId('6692326005e10539fcd92bd3'),
// name: 'will',
// breed: 'corgi',
// age: 17,
// isCatFriendly: true
// },
// {
// _id: ObjectId('6692326005e10539fcd92bd4'),
// name: 'ron',
// breed: 'shepard',
// age: 9,
// color: 'grey'
// }
// ]
// animalShelter> db.dogs.insertMany({
// ... _id: ObjectId('6692315805e10539fcd92bd1'),
// ... name: 'blue',
// ... breed: 'lab',
// ... age: 4,
// ... iscatfriendly: true
// ... },
// ... {
// ... _id: ObjectId('6692326005e10539fcd92bd3'),
// ... name: 'will',
// ... breed: 'corgi',
// ... age: 17,
// ... isCatFriendly: true
// ... }]
// animalShelter> db.dogs.insertMany([{
// ... _id: ObjectId('6692315805e10539fcd92bd1'),
// ... name: 'blue',
// ... breed: 'lab',
// ... age: 4,
// ... iscatfriendly: true
// ... }])
// {
// acknowledged: true,
// insertedIds: { '0': ObjectId('6692315805e10539fcd92bd1') }
// }
// animalShelter> db.dogs.find()
// [
// {
// _id: ObjectId('6692326005e10539fcd92bd3'),
// name: 'will',
// breed: 'corgi',
// age: 17,
// isCatFriendly: true
// },
// {
// _id: ObjectId('6692326005e10539fcd92bd4'),
// name: 'ron',
// breed: 'shepard',
// age: 9,
// color: 'grey'
// },
// {
// _id: ObjectId('6692315805e10539fcd92bd1'),
// name: 'blue',
// breed: 'lab',
// age: 4,
// iscatfriendly: true
// }
// ]
// animalShelter> db.cats.find()
// [
// {
// _id: ObjectId('669233ef05e10539fcd92bd5'),
// name: 'vire',
// breed: 'scotish',
// age: 6
// },
// {
// _id: ObjectId('669268d17700ff26075651af'),
// name: 'charlie',
// age: 4,
// color: 'white'
// },
// {
// _id: ObjectId('669268f07700ff26075651b0'),
// name: 'maya',
// age: 8,
// color: 'black'
// }
// ]
// animalShelter> db.cats.inserMany({name:'maya'} ,{$set:{isAvailable:false}})
// TypeError: db.cats.inserMany is not a function
// animalShelter> db.cats.insertMany({name:'maya'} ,{$set:{isAvailable:false}})
// MongoInvalidArgumentError: Argument "docs" must be an array of documents
// animalShelter> db.cats.updateOne({name:'maya'},{$set:{isAvailable:false}})
// {
// acknowledged: true,
// insertedId: null,
// matchedCount: 1,
// modifiedCount: 1,
// upsertedCount: 0
// }
// animalShelter> db.cats.find()
// [
// {
// _id: ObjectId('669233ef05e10539fcd92bd5'),
// name: 'vire',
// breed: 'scotish',
// age: 6
// },
// {
// _id: ObjectId('669268d17700ff26075651af'),
// name: 'charlie',
// age: 4,
// color: 'white'
// },
// {
// _id: ObjectId('669268f07700ff26075651b0'),
// name: 'maya',
// age: 8,
// color: 'black',
// isAvailable: false
// }
// ]
// animalShelter> db.cats.updateOne({name:'charlie'},{$set:{isAvailable:false}})
// {
// acknowledged: true,
// insertedId: null,
// matchedCount: 1,
// modifiedCount: 1,
// upsertedCount: 0
// }
// animalShelter> db.cats.find()
// [
// {
// _id: ObjectId('669233ef05e10539fcd92bd5'),
// name: 'vire',
// breed: 'scotish',
// age: 6
// },
// {
// _id: ObjectId('669268d17700ff26075651af'),
// name: 'charlie',
// age: 4,
// color: 'white',
// isAvailable: false
// },
// {
// _id: ObjectId('669268f07700ff26075651b0'),
// name: 'maya',
// age: 8,
// color: 'black',
// isAvailable: false
// }
// ]
// animalShelter> db.cats.deleteMany({isAvailable:false})
// { acknowledged: true, deletedCount: 2 }
// animalShelter> db.cats.insertMany([
// ... ]
// ... animalShelter> db.cats.deleteMany({isAvailable:false})
// Uncaught:
// SyntaxError: Unexpected token, expected "," (3:0)

// 1 | db.cats.insertMany([
// 2 | ]
// > 3 | animalShelter> db.cats.deleteMany({isAvailable:false})
// | ^
// 4 |

// animalShelter> db.cats.find()
// [
// {
// _id: ObjectId('669233ef05e10539fcd92bd5'),
// name: 'vire',
// breed: 'scotish',
// age: 6
// }
// ]
// animalShelter> db.cats.insertMany([{
// ... _id: ObjectId('669268d17700ff26075651af'),
// ... name: 'charlie',
// ... age: 4,
// ... color: 'white',
// ... isAvailable: false
// ... },
// ... {
// ... _id: ObjectId('669268f07700ff26075651b0'),
// ... name: 'maya',
// ... age: 8,
// ... color: 'black',
// ... isAvailable: false
// ... }])
// {
// acknowledged: true,
// insertedIds: {
// '0': ObjectId('669268d17700ff26075651af'),
// '1': ObjectId('669268f07700ff26075651b0')
// }
// }
// animalShelter> db.cats.find()
// [
// {
// _id: ObjectId('669233ef05e10539fcd92bd5'),
// name: 'vire',
// breed: 'scotish',
// age: 6
// },
// {
// _id: ObjectId('669268d17700ff26075651af'),
// name: 'charlie',
// age: 4,
// color: 'white',
// isAvailable: false
// },
// {
// _id: ObjectId('669268f07700ff26075651b0'),
// name: 'maya',
// age: 8,
// color: 'black',
// isAvailable: false
// }
// ]
// animalShelter>