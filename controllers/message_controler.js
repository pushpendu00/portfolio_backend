



module.exports.allMessage = (req,res)=>{
    try {
        return res.send({
            status : 200
        })
    } catch (error) {
        return res.send({
            status : 404,
        })
    }
}


module.exports.add_message = async(req,res)=>{
    try {

        return res.send({
            status : 200,
        })
    } catch (error) {
        return res.send({
            status : 404,
        })
    }
}