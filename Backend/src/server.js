const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const serviceRoutes = require('./routes/serviceRoutes');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { initializeServiceSocket } = require('./sockets/serviceSocket');

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
initializeServiceSocket(server);

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.use('/api/services', serviceRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(` Server running on port ${PORT}`));
