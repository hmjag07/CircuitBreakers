const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')


const Schema = mongoose.Schema

const profSchema = new Schema({
    name:{
        type: String, 
        required: true,

    },
    profession:{
        type: String, 
        required: true,
        unique: false
    },
    phone:{
        type: String,
        required:true,
        unique: true,
        match: [/^\d{10}$/, 'Phone number must be exactly 10 digits.']
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: { 
        type: String,
        required: true,

    }
})


//static signup method
profSchema.statics.signup = async function(name, email,  phone, profession, password) {

    //validation
    if (!name || !email || !password || !phone || !profession){
        throw Error('All fields must be filled')
    }
    // checking if the name is only two words
    const nameRegex= /^[A-Za-z]+(\s[A-Za-z]+){1}$/;
    if (!nameRegex.test(name)){
        throw Error ('The Name must contain exactly TWO words!');
    }
    if (!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    // check if email exists
    const exists = await this.findOne({ email })
    if(exists){
        throw Error('Email already in use!')
    }
    // check if phone exists
    const phn = await this.findOne({ phone })
    if(phn){
        throw Error('Phone number already in use!')
    }
    

const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash(password, salt);

try{
    const user =  await this.create({ name, email, phone, profession, password: hash })
    //      // debug
//      console.log('New user created:')
//      console.log('Email:', email)
//      console.log('Generated hash:', hash)
    return user;
    }
    catch(err){
        throw new Error('there was an error creating user, please try again ');
    }

}

// static login method
profSchema.statics.login = async function(email, password){
    if (!email || !password){
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({ email })
    if(!user){
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password)
    if(!match){
    throw Error('Incorrect password')
    }

return user;
};

module.exports = mongoose.model('Proffesional', profSchema)