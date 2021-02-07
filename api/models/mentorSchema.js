const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mentorSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId, //tipo do dado
        auto: true, //autogerado?
        required: true //é obrigatório?
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required: true
    },
   area:{
        type: String,
        required: true
    },
    colaboradores:{
        type: String,
        required: false
    },
    senha:{
        type: String,
        required: true
    },
   
},
{
    collection: "mentor",
    versionKey: false
   
  }
);


const mentorCollection = mongoose.model('mentor', mentorSchema)

module.exports = {mentorCollection}
