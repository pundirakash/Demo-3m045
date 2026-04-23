const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
    title:{
    type:String,
     required:true
    },
    author:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type: Number,
        min:0,
        required:true

    },
    category:{
        required:true,
        Enum:["Fiction","Non-Fiction"],
        type:String
    },
    inStock:{
        type:Boolean,
        default:true
    }

},{timestamps:true})

module.exports = mongoose.model("Book",bookSchema );