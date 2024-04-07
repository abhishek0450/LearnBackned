const mongoose = require('mongoose');

// Connection URL
const useNewUrl = 'mongodb://localhost:27017/test';
// Connect to the database
mongoose.connect(useNewUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const db=mongoose.connection;

//get the default connection
//moongoose maintains a default connection object that represents the connection to the database
db.on('connected',()=>{
    console.log('Mongoose default connection open to ' + useNewUrl);
});

db.on('error',(err)=>{
    console.log('Mongoose default connection error: ' + err);
});

db.on('disconnected',()=>{
    console.log('Mongoose default connection disconnected');
});

module.exports = db;

