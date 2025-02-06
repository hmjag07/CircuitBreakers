const dotenv= require('dotenv');
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const bodyParser = require('body-parser')
const userRoute = require('./src/routes/userRoute')
const profRoute = require('./src/routes/profRoute')
const requestRoutes = require('./src/routes/reqRoute.js')
const app = express();
const { initializeRequestSocket } = require('./src/sockets/requestSocket.js');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');


dotenv.config();
connectDB(); 
// const server = http.createServer(app);
// initializeRequestSocket(server);

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// app.use(helmet());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.use('/api/requests', requestRoutes);
app.use('/api', userRoute)
const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log(`server running on : ${PORT}`);
});

app.use('/data', profRoute);