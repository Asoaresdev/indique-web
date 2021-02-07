const mentor = require('../database/mentor.json')
const fs= require('fs')
const path= require('path')

const mentorController = {

    index: (req,res)=> {
        res.send(company)
       // res.render('index',{candidate})
    },
        

    show: (req,res)=> {
        let id = req.params.id
        

    },
    Store: (req, res)=>{
        let {name, email, area, colaboradores,
             } = req.body;
        

        //criando logica do ID
        let id = mentor.lenght + 1

        mentor.push({
            id:id,
            name: name,
            email: email,
            phone: phone,
            area:area,
            colaboradores: colaboradores


        });
        mentor = JSON.stringify(mentor)

        fs.writeFileSync(path.join('database','mentor.json'), mentor)


            // res.redirect('/')
        
    },
    login: (
        req, res) =>{
        const { email, senha} = req.bady
    }
}

module.exports = mentorController 