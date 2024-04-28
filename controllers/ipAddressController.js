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
            let updateIp = await ipSddressModel.findByIdAndUpdate({_id : isIpPresent._id},{
                $inc : {
                    count : 1,
                }
            });
            return res.send({
                status : 200,
                message : "sucessfully",
                ipDetails : updateIp,
            })
        }
        const new_ip = new ipSddressModel({
            ip
        });
        let updateIp = await new_ip.save();
        return res.send({
            status : 200,
            message : "sucessfully",
            ipDetails : updateIp,
        })
    } catch (error) {
        // console.log(error);
        return res.send({
            status : 404,
            message : "Server Error"
        })
    }
}

module.exports.follow_unfollow = async(req,res)=>{
    try {
        const {ipAddress,status} = req.body;
        // console.log(ipAddress);
        let ipDetails = await ipSddressModel.findOneAndUpdate({ip : ipAddress},{
            follow : status
        })
        let updateIp = await ipSddressModel.findById({_id : ipDetails._id})
        // console.log("update = ",updateIp);
        return res.send({
            status : 200,
            message : "sucessfully",
            updateIp
        })
    } catch (error) {
        console.log(error)
        return res.send({
            status : 404,
            message : "Server Error"
        })
    }
}