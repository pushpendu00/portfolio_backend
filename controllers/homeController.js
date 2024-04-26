

module.exports.home = (req,res)=>{
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