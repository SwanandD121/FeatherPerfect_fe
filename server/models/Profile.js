const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    // this schema is created for additional user details 
    // it can be used in furture 
    gender: {
        type:String,
    },
    dateOfBirth: {
        type: String,
    },
    about: {
        type:String,
        trim:true,
    },
    contactNumber: {
        type:Number,
        trim:true,
    },

});

module.exports = mongoose.model("Profile", profileSchema);