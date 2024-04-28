
const { default: mongoose } = require("mongoose");


const schema = mongoose.Schema(
    {
        ip : {
            type : String
        },
        count : {
            type : Number,
            default : 1
        }
    },
    {timestamps : true}
);


const ipSddressModel = new mongoose.model('ipAddress',schema);

module.exports = ipSddressModel;
