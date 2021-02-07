const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companysSchema = new Schema({
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
    collection: "company",
    versionKey: false
   
  }
);


const companyCollection = mongoose.model('company', companysSchema)

module.exports = {companyCollection}

