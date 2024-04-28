const ipSddressModel = require("../models/ipAddressModel");



module.exports.all_ip_address = async (req,res)=>{
    try {
        const all_ipadress = await ipSddressModel.find();
        return res.send({
            status : 200,
            message : "All ip address",
            all_ipadress
        })
    } catch (error) {
        return res.send({
            status : 404,
            message : "Server Error"
        })
    }
}


module.exports.add_ip_address = async(req,res)=>{
    try {
        const {ip} = req.body;
        // console.log(ip);
        const isIpPresent = await ipSddressModel.findOne({ip});

        if(isIpPresent){
            await ipSddressModel.findByIdAndUpdate({_id : isIpPresent._id},{
                $inc : {
                    count : 1,
                }
            });
            return res.send({
                status : 200,
                message : "sucessfully",
            })
        }
        const new_sms = new ipSddressModel({
            ip
        });
        await new_sms.save();
        return res.send({
            status : 200,
            message : "sucessfully",
        })
    } catch (error) {
        // console.log(error);
        return res.send({
            status : 404,
            message : "Server Error"
        })
    }
}