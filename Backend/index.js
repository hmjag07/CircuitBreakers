const dotenv= require('dotenv');
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const bodyParser = require('body-parser')
const userRoute = require('./src/routes/userRoute')
const app = express();

dotenv.config();
connectDB(); 

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api', userRoute)
const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log(`server running on : ${PORT}`);
});
