const mongoose = require('mongoose');

module.exports.db_connection = async ()=>{
    try{
        const db = await mongoose.connect(process.env.database_link);
        if(db){
            console.log("Database is Sucessfully connected..........");
        }else{
            console.log('Database not connected');
        }
        return db;
    }catch(err){
        // console.log(err);
        console.log('Database not connected');
        return;
    }
}