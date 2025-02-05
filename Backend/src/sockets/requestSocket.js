const { Server } = require('socket.io');

let io;
const initializeRequestSocket = (server) => {
    io = new Server(server, {
        cors: { origin: '*' }
    });

    io.on('connection', (socket) => {
        console.log(' New User connected:', socket.id);

        socket.on('disconnect', () => {
            console.log(' User disconnected:', socket.id);
        });
    });
};

module.exports = { initializeRequestSocket, emit: (event, data) => io.emit(event, data) };
