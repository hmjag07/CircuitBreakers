const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const cors = require('cors');
const bodyParser = require('body-parser')
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const userRoute = require('./src/routes/userRoute')
const profRoute = require('./src/routes/profRoute')
const requestRoutes = require('./src/routes/reqRoute.js')
const app = express();
const { initializeRequestSocket } = require('./src/sockets/requestSocket.js');


dotenv.config();
connectDB(); 

const authMiddleware = require('./src/middleware/authMiddleware');

const server = http.createServer(app);
initializeRequestSocket(server);

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log(`server running on : ${PORT}`);
});

app.use('/api/requests', requestRoutes);
app.use('/api', userRoute)


app.use('/data', profRoute);


app.use('/api/requests', requestRoutes);