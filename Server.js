const express = require('express');
require('dotenv').config();
require('./config/connection').db_connection();
const cors = require('cors');


const app = express();
const port = process.env.port || 4000;

app.use(cors({
    origin : [process.env.origin],
    methods : ['POST']
}))

app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.use('/',require('./routes/index'));


app.listen(port,(req,res)=>{
    try {
        console.log(`Server is Running on port ${port}`);
    } catch (error) {
        return res.send({
            status : 404,
        })
    }
})



