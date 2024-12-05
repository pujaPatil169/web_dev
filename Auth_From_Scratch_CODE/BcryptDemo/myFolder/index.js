const bcrypt = require('bcrypt');


// const hashPassword = async (pw) =>{
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw,salt);
//     console.log(salt);
//     console.log(hash);
// }
//we dont have to generate the salt and hash seperately we can do all in one go as below version of hashPassword
const hashPassword = async (pw) =>{
    const hash = await bcrypt.hash(pw,12);
    console.log(hash);
}

//so you can just generate the salt seperately or you can just pass in the number of rounds to hash and it will generate the salt for you using that number of rounds and then hash the password that you pass in 
const login = async (pw,hashedPw) =>{
     const result = await bcrypt.compare(pw,hashedPw);
     if(result){
        console.log('logged you in ');
     }else{
        console.log('incoreect');
     }
}

hashPassword('monkey');

// login('monkey!','$2b$10$8QDhNtHFx6KDHdVbbblrMOwLGeVrUH.ozthXP6NdqjcA5fHspYV5G')