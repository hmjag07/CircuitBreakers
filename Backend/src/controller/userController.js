const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}


// login user
const loginUser = async (req, res) => {

    try {
    const {email, password} = req.body
        // console.log("Received email:", email);

        const user = await User.login(email, password);

        // create a token
        const token = createToken(user._id)

        res.status(200).json({user, token})
        } catch(error){
        res.status(400).json({error: error.message})
        
        } 
    }

    


//signup user
  const signupUser = async (req, res) => {
  const {name, email, phone, flat, wing, password} = req.body 
  // console.log('Received data controller:', req.body);

  try {
  const user = await User.signup(name, email, phone, flat, wing, password)

  // create a token
  const token = createToken(user._id)

  res.status(200).json({name, email, token})
  } catch(error){
  res.status(400).json({error: error.message})
  console.error('Signup Error:', error.message);

} 
}

module.exports = { signupUser, loginUser }