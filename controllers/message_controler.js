const messageModel = require('../models/messageModels');


module.exports.allMessage = async (req,res)=>{
    try {
        const all_message = await messageModel.find();
        return res.send({
            status : 200,
            message : "All messages",
            all_message
        })
    } catch (error) {
        return res.send({
            status : 404,
            message : "Server Error"
        })
    }
}


module.exports.add_message = async(req,res)=>{
    try {
        const {name,phone,message} = req.body;
        const new_sms = new messageModel({
            name,phone,message
        });
        await new_sms.save();
        return res.send({
            status : 200,
            message : "sucessfully",
        })
    } catch (error) {
        console.log(error)
        return res.send({
            status : 404,
            message : "Server Error"
        })
    }
}