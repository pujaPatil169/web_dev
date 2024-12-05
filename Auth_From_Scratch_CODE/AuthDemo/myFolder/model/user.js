const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username cannot be blanked']
    },
    hashPassword: {
        type: String,
        required: [true, 'password cannot be blanked']
    }
})


userSchema.statics.findAndValidate = async function (username, password) {
    const foundUser = await this.findOne({ username });
    //this in above line refers to the model class which is user in this case,and the statics method is used to define a function/method on model class itself and not the instance of the model class 
    const isValid = await bcrypt.compare(password, foundUser.hashPassword);
    return isValid ? foundUser : false;
    //above line means if isValid is true we will return the foundUser object otherwise let's just return false (here we are using ternary operator)
}

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
})//this middleware runs before saving of every instance of the User model/class
// on "this," where "this" refers to the particular instance of the user, in this case.
// and "next" in this case it's going to be "save." it's going to actually call "save,"
// And the password is not actually provided to this callback.
// It is nested or it's already on "this," which is kind of confusing, right  But "this" refers to the particular user model.
// So over here, you know "this" is going to be this one user that youre goin to save
// So "this.password" is the password that we want to hash.


    module.exports = new mongoose.model('User', userSchema);
