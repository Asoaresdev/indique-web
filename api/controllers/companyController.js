const company = require('../database/company.json')
const fs= require('fs')
const path= require('path')

const companyController = {

    index: (req,res)=> {
        res.send(company)
       // res.render('index',{candidate})
    },
        

    show :(req,res)=> {
        let id = req.params.id
        

    },
    Store: (req, res)=>{
        let {name, email, phone, area, colaboradores,
             } = req.body;
        

        //criando logica do ID
        let id = company.lenght + 1

        company.push({
            id:id,
            name: name,
            email: email,
            phone: phone,
            area:area,
            colaboradores: colaboradores


        });
        company = JSON.stringify(company)

        fs.writeFileSync(path.join('database','company.json'),company)


            // res.redirect('/')
        
    },
    login: (
        req, res) =>{
        const { email, senha} = req.bady
    }
}

module.exports = companyController