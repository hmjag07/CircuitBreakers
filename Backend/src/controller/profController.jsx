const Proffesional = require('../models/profModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}
// login user
const loginProf = async (req, res) => {

    try {
    const {email, password} = req.body
        console.log("Received email:", email);

        const user = await Proffesional.login(email, password);

        // create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
        } catch(error){
        res.status(400).json({error: error.message})
        
        } 
    }

    


//signup user
    const signupProf = async (req, res) => {
        const {name, email, password} = req.body 
        
        try {
            const user = await Proffesional.signup(name, email, password)
        // create a token
            const token = createToken(user._id)
               
            res.status(200).json({name, email, token})
            } 
            catch(error){
            res.status(400).json({error: error.message})
        
        } 
    }

module.exports = { signupProf, loginProf }