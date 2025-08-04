const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const requestRoutes = require('./routes/reqRoute');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const scheduleNoticeCleanup = require('./utils/scheduleNoticeDelete');
const { initializeNoticeSocket } = require('./src/sockets/noticeSocket');
const { initializeRequestSocket } = require('./src/sockets/requestSocket');
const errorHandler = require('./middleware/errorHandler');
const adminRoutes = require('./routes/adminRoute')

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
initializeRequestSocket(server);
initializeNoticeSocket(server);

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use('api/admin', adminRoutes);

app.use('/api/requests', requestRoutes);
const noticeRoutes = require('./routes/noticeRoute');
app.use('/api/notices', noticeRoutes);

// Start background job for auto-deleting notices
scheduleNoticeCleanup();



app.use(errorHandler);
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(` Server running on port ${PORT}`));
