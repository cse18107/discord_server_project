const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    mail:{
        type: String,
        unique: true,
    },
    username:{
        type:String,
    },
    password: {
        type: String,
    }
});

const User = mongoose.model('user',userSchema);

export module = User;