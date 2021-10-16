const mongoose  = require('mongoose')
const userContactSchema = new mongoose.Schema({ 
    userName:String,
    email:String,
    number:Number,
    address:String,
    linkeddIn:String,
    facebook:String,
    instagram:String,
    github:String,
    countryCode:String,
    friends:[{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'UserContactModel'
        }
    }]
})

userContactModel = mongoose.model('UserContactModel', userContactSchema);

module.exports = userContactModel;