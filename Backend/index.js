const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const requestRoutes = require('./routes/requestRoutes');
const cors = require('cors');
const bodyParser = require('body-parser')
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const userRoute = require('./src/routes/userRoute')
const profRoute = require('./src/routes/profRoute')
const { initializeRequestSocket } = require('./sockets/requestSocket');
const authMiddleware = require('./src/middleware/authMiddleware');

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
initializeRequestSocket(server);

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.listen(PORT, ()=>{
    console.log(server running on : ${PORT});
});

app.get('/resi/home', authMiddleware, (req,res)=>{
    res.json({ message: 'This is a protectedhome route', user: req.user });
});

app.use('/api', userRoute)
const PORT = process.env.PORT || 3001;


app.use('/data', profRoute);


app.use('/api/requests', requestRoutes);