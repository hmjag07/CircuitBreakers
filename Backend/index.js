require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const bodyParser = require('body-parser')
const userRoutes = require('./src/routes/userRoute')
const app = express();
connectDB(); 

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/user', userRoutes)
const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log('server running on 3001');
});

app.get('/', (req,res)=> {
    res.send("WELCOME TO home PAGEE !!!");
})