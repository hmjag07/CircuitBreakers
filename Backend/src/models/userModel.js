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
(name, email, password, flat, wing, phone) {

    const nameRegex= /^[A-Za-z]+(\s[A-Za-z]+){1}$/;
    const exists = await this.findOne({ email })
    if(exists){
        throw Error('Email already in use')
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
    const user =  await this.create({ name, phone, flat, wing, email, password: hash })
    return user;
    }
    catch(err){
        throw Error('there was an error creating user, please try again ');
    }

}

// static login method
userSchema.statics.login = async function(email, password){
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

module.exports = mongoose.model('User', userSchema)