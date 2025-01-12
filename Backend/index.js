require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const bodyParser = require('body-parser')

const app = express();
connectDB(); 

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.listen(3001, ()=>{
    console.log('server running on 3001');
});
