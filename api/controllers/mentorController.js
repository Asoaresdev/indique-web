const mentorS = require('../models/mentorSchema')
const fs= require('fs')
const path= require('path')

const mentorController = {

    index: (req,res)=> {
        res.send(mentorS)
       // res.render('index',{candidate})
    },
        

    show: (req,res)=> {
        let id = req.params.id
        

    },
    Store: (req,res)=>{
        console.log(req.url)
        const mentorBody = req.body
        const mentor= new mentorS.mentorCollection(mentorBody)
    
        candidate.save((error) =>{
            if(error){
                return res.status(400).send(error)
            } else {
                return res.status(201).send(mentor)
            }
        })
    },
        
    
    login: (
        req, res) =>{
        const { email, senha} = req.bady
    }
}

module.exports = mentorController 