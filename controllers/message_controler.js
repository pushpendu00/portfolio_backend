const messageModel = require('../models/messageModels');


module.exports.allMessage = (req,res)=>{
    try {
        return res.send({
            status : 200,
            message : "All messages",
        })
    } catch (error) {
        return res.send({
            status : 404,
        })
    }
}


module.exports.add_message = async(req,res)=>{
    try {
        console.log(req.body);
        return res.send({
            status : 200,
            message : "sucessfully",
        })
    } catch (error) {
        return res.send({
            status : 404,
        })
    }
}