const Resi = require('../models/userModel')
const Notice = require('../models/noticeModel');
const jwt = require('jsonwebtoken');

const createNotice = async (req, res) => {
  try {
    const { note } = req.body;
console.log("Incoming request body:", req.body);

    if (!req.headers.authorization) {
      return res.status(401).json({ error: 'Authorization missing' });
    }

    // extract token from "Bearer <token>"
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET);
console.log("decoded", decodedToken);

    // use decoded token data for author: prefer _id, otherwise use name?
    const author = decodedToken._id || decodedToken.name;

    const newNotice = new Notice({
      author: author,
      date: new Date().toLocaleDateString("en-GB"),
      time: new Date().toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
      }),
      note: note
    });
    

    const savedNotice = await newNotice.save();
    res.status(201).json(savedNotice);
  } catch (err) {
    console.error("Error in createNotice:", err);
    res.status(500).json({ error: 'Failed to create Notice, please try again!' });
  }
};

const notices = async (req, res) => {
  try {
    const allNotices = await Notice.find().populate('author', 'name');
    console.log("Fetched notices:", allNotices);
    res.json(allNotices);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch notices" });
  }
};

module.exports = { notices, createNotice };
