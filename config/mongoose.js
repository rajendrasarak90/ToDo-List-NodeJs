const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1/todo_list_db');
// const db = mongoose.connection;
// // error
// db.on('error',console.error.bind(console,'erroe connecting to db'));
// // up and running then message
// db.once('open',function(){
//     console.log('Successfully connected to the database')
// })



// replace the uri string with your connection string
const db = "mongodb+srv://rajendrasarak622:2FWW3BrZS2Q8pltl@cluster1.h8vxdpk.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Successfully connected to the database');
}).catch((err)=> console.log('Failed to connect to the database', err));