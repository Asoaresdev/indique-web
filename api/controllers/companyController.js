const companyS = require('../models/companySchema')
const moongoose = require('mongoose')
const fs= require('fs')
const path= require('path')
const bcrypt =(require('bcrypt'))
jwt = require('jsonwebtoken')


let compa
const companyController = {

    index: (req,res)=> {
        res.send(company)
       // res.render('index',{candidate})
    },
        

    show :(req,res)=> {
        let id = req.params.id
        

    },
    

   Store:async (req, res, )=>{
        console.log(req.url)
        const body = req.body
        body.senha = await bcrypt.hash(body.senha,12)
        const company = new companyS.companyCollection(body)
    
        company.save((error) =>{
            if(error){
                return res.status(400).send(error)
            } else {
                return res.status(201).send(company)
            }
        })
    },
        
    
    login: ( req, res) =>{
        
        const { email, senha} = req.bady
        
    
        if(email!= body.email){
            return res.send( ' usuario Invalido')
        }
        if(!bcrypt.compareSync(senha , body.senha)){
            return res.send("senha invalida")
        }

    }   
}
    


module.exports = companyController