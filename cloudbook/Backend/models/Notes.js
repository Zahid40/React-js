const { Schema, model } = require("mongoose")

const mongoose = required('mongoose')

const NotesSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
    },
    date:{
        type:Date,
        default : Date.now
    }
})
model.exports = mongoose.model('notes' , NotesSchema);