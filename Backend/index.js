const dotenv= require('dotenv');
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const bodyParser = require('body-parser')
const userRoute = require('./src/routes/userRoute')
const profRoute = require('./src/routes/profRoute')
const app = express();
const authMiddleware = require('./src/middleware/authMiddleware');

dotenv.config();
connectDB(); 

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get('/resi/home', authMiddleware, (req,res)=>{
    res.json({ message: 'This is a protectedhome route', user: req.user });
});

app.use('/api', userRoute)
const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log(`server running on : ${PORT}`);
});

app.use('/data', profRoute);