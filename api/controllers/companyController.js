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
    store: ()

   Store: (req, res, next)=>{
        console.log(req.url)
        const companyBody = req.body
        const company = new companyS.companyCollection(companyBody)
    
        company.save((error) =>{
            if(error){
                return res.status(400).send(error)
            } else {
                return res.status(201).send(company)
            }
        })
    },
        
    
    login: (
        req, res) =>{
        const { email, senha} = req.bady
    }
}

module.exports = companyController