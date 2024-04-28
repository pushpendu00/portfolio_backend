
const { default: mongoose } = require("mongoose");


const schema = mongoose.Schema(
    {
        ip : {
            type : String
        },
        follow : {
            type : Boolean,
            default : false
        }
    },
    {timestamps : true}
);


const followModel = new mongoose.model('follow',schema);

module.exports = followModel;
