const candidateS = require('../models/candidateSchema')
const fs= require('fs')
const path= require('path')
const bcrypt  = require('bcrypt')

let candidateJson = path.join('candidate.json')
let Hash = bcrypt.hashSync("1234", 10)

const candidateController = {

    index: (req,res)=> {
        candidateS.candidateCollection.find((error,candidate)=>{
            if(error){
                return res.status(500).send(error)
            }else{ 
                return res.status(200).send(candidate)}
        })},
        

    show :(req,res)=> {
        let id = req.params.id
       let candidato  = candidate.find(candidato => candidato.id ==id
         )
         res.send(candidato)

    },

    Store : (req,res)=>{
        console.log(req.url)
        const candidateBody = req.body
        const candidate = new candidateS.candidateCollection(candidateBody)
    
        candidate.save((error) =>{
            if(error){
                return res.status(400).send(error)
            } else {
                return res.status(201).send(candidate)
            }
        })
    },
    


       
    
    login: (req, res) =>{
        const { email, senha} = req.bady
        let candidateSalvo = fs.readFileSync(candidateJson, {encoding:"utf -8"});
        candidateSalvo = JSON.parse(candidateSalvo)
        if(email!= candidateSalvo.email){
            return res.send( ' usuario Invalido')
        }
        if(!bcrypt.compareSync(senha , candidateSalvo.senha)){
            return res.send("senha invalida")
        }

    }   
}

module.exports = candidateController