const { Timestamp } = require("bson");
const { default: mongoose } = require("mongoose");
const { type } = require("os");


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
    {Timestamp : true}
);


const messageModel = new mongoose.model('message',schema);

module.exports = messageModel;
