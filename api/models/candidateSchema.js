const mongoose = require('mongoose')
const Schema = mongoose.Schema

const candidatesSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId, //tipo do dado
        auto: true, //autogerado?
        required: true //é obrigatório?
    },
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required:true
    },
    about:{
        type: String,
        required: true
    },
    escolaridade:{
        type: String,
        required: true
    },
    instituicao:{
        type: String,
        required: false
    },
    curso:{
        type: String,
        required: true
    },
    area:{
        type: String,
        required: true
    },
    senha:{
        type: String,
        required: true
    }
},
{
    collection: "candidate",
    versionKey: false
   
  }
);


const candidateCollection = mongoose.model('cadidate', candidatesSchema)

module.exports = {candidateCollection}

