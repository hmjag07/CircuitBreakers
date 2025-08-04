const socketIo = require('socket.io');

let io;


 //Initializes Socket.IO for real-time notifications
 
const initializeSocket = (server) => {
    io = socketIo(server, {
        cors: { origin: '*' }
    });

    io.on('connection', (socket) => {
        console.log('User connected:', socket.id);

        socket.on('joinRoom', (userId) => {
            socket.join(userId); // Users join a room based on their ID
        });

        socket.on('disconnect', () => {
            console.log('User disconnected:', socket.id);
        });
    });
};

/**
 * Sends a real-time notification to a specific user
 * @param {string} userId - The user's ID
 * @param {object} data - The notice details
 */
const sendRealTimeNotification = (userId, data) => {
    if (io) {
        io.to(userId).emit('newNotice', data);
    }
};

module.exports = { initializeSocket, sendRealTimeNotification };
