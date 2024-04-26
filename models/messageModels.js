
const { default: mongoose } = require("mongoose");


const schema = mongoose.Schema(
    {
        name : {
            type : String
        },
        phone : {
            type : String
        },
        message : {
            type : String
        },
    },
    {timestamps : true}
);


const messageModel = new mongoose.model('message',schema);

module.exports = messageModel;
