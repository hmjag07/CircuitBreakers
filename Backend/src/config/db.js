const mongoose = require('mongoose');
const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useCreateIndex: true,
          })
            .then(() => console.log('Connected to MongoDB'))
            .catch((error) => console.log('Connection error:', error.message));
    }catch(err){
        console.log('connection error:', err.message);
        process.exit(1);
    }

};

module.exports= connectDB;
