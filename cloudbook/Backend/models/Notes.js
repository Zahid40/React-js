const mongoose = require('mongoose')
const { Schema} = mongoose


const NotesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
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
const notes = mongoose.model('notes' , NotesSchema);
module.exports = notes
