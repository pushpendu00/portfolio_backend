const express = require('express');
require('dotenv').config();
require('./config/connection').db_connection();

const app = express();
const port = process.env.port || 4000;



app.use('/',require('./router/index'));


app.listen(port,(req,res)=>{
    try {
        console.log(`Server is Running on port ${port}`);
    } catch (error) {
        return res.send({
            status : 404,
        })
    }
})



