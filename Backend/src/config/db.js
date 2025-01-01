const mongo = require('mongoose');
const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParse: true,
            useUnifiedTopology: true,
        });  
        console.log('mongo connected successfully')
    }catch(err){
        console.log('connection error:', err.message);
        process.exit(1);
    }

};

module.export= connectDB;
