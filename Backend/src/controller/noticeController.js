const Notice = require ('../models/noticeModel')
const jwt = require('jsonwebtoken');

const createNotice = async(req,res)=>{
    try{
        const {note}= req.body;

        const token = req.headers.authorization.split(' '[1]);
        const detoken= jwt.verify(token, process.env.SECRET);
        // const userId = detoken._id;
        const author = detoken.name;

        const newNotice = new Notice({
            author: author,
            date: new Date(),
            time: new Date().toLocaleTimeString(),
            note:note
        })
        const savedNotice = await newNotice.save();
        res.status(201).json(savedNotice);
    }catch(err){
        res.status(500).json({error: 'Failed to create Notice, please try again!'})
        }
};

const notices = async function(req,res){
    try{
        const note = await Notice.fetchAll();
        console.log("fetched:", note);
        res.json(note);
    }catch(err){
        res.status(500).json({err: "failed to fetch notices"});
    }
};
module.exports={ notices, createNotice} 