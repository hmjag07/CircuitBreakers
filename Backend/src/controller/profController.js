const Professional = require('../models/profModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}

// fetch
const data = async function(req,res){
    try{
        const profs = await Professional.fetchAll();
        console.log("fetched:", profs);
        res.json(profs);
    }catch(err){
        res.status(500).json({err: "failed to fetch data"});
    }
}
// login user
const loginProf = async (req, res) => {

    try {
    const {email, password} = req.body
        console.log("Received email for prof:", email);

        const user = await Professional.login(email, password);

        // create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
        } catch(error){
        res.status(400).json({error: error.message})
        
        } 
    }

    


//signup user
    const signupProf = async (req, res) => {
        const {name, email, phone, profession, password} = req.body 
        
        try {
            const user = await Professional.signup(name, email, phone, profession, password)
        // create a token
            const token = createToken(user._id)
               
            res.status(200).json({name, email, token})
            } 
            catch(error){
            res.status(400).json({error: error.message})
            console.error('Signup Error:', error.message);
        
        } 
    }

module.exports = { signupProf, loginProf, data }