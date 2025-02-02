const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')


const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type: String, 
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type:String,
        required: true,
        unique:true,
    },
    flat:{
        type: Number,
        required: true
    },
    wing:{
        type: String,
        required: true
    },
    password:{ 
        type: String,
        required: true,
    }
})


//static signup method
userSchema.statics.signup = async function
(name, email, phone,  flat, wing, password) {

    const nameRegex= /^[A-Za-z]+(\s[A-Za-z]+){1}$/;

    const exists = await this.findOne({ email })
    if(exists){
        throw Error('Email already in use')
    }

    const phn = await this.findOne({ phone })
    if(phn){
        throw Error('Phone number already in use')
    }
    // checking if the name is only two words
    if (!nameRegex.test(name)){
        throw Error ('The Name must contain exactly TWO words!');
    }
    // validation
    if (!(validator.isEmail(email))){
        throw Error('Email is not valid')
    } 
    

const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash(password, salt);

try{
    const user =  await this.create({ name, phone, flat, wing, email, password: hash });
//      // debug
//      console.log('New user created:')
//      console.log('Email:', email)
//      console.log('Generated hash:', hash)
    return user;
    }
    catch(err){
        // if(err.code ===11000){
        //     const field = Object.keys(err.keyPattern)[0];
        //     throw Error(`${field} already exists`);
        // }
        throw Error('there was an error creating user, please try again '+ err.message);
    }

}

// static login method
userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({ email })
    if (!user) {
        throw Error('Incorrect email')
    }

    // Add detailed logging
    console.log('Password mismatch for email:', email)
    console.log('Provided password:', password)
    console.log('Stored hashed password:', user.password)
    
    try {
        const match = await bcrypt.compare(password, user.password)
        console.log('Bcrypt compare result:', match)
        
        if (!match) {
            throw Error('Incorrect password')
        }
        console.log(user); // Check if the user object has the correct structure

        return user
    } catch (bcryptError) {
        // Log any bcrypt-specific errors
        console.error('Bcrypt error:', bcryptError)
        throw Error('Incorrect password')
    }
}
module.exports = mongoose.model('User', userSchema);