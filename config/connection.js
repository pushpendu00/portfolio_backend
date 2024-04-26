const mongoose = require('mongoose');

module.exports.db_connection = async ()=>{

    try{
        await mongoose.connect(process.env.database_link);
        console.log("Database is Sucessfully connected..........")
    }catch(err){
        // console.log(err);
        console.log('Database not connected');
        return;
    }
}