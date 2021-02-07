const candidate = require('../database/candidate.json')
const fs= require('fs')
const path= require('path')

const candidato = {

    index: (req,res)=> {
        res.send(candidate)
       // res.render('index',{candidate})
    },
        

    show :(req,res)=> {
        let id = req.params.id
        candidate.find(id)

    },
    Store: (req, res)=>{
        let {name, email, phone, about, escolaridade,
             instituicao, curso, area} = req.body;
        fs.readFileSync();

        //criando logica do ID
        let id = candidade.lenght + 1

        candidate.push({
            id:id,
            name: name,
            email: email,
            phone: phone,
            about: about,
            escolaridade: escolaridade,
            insittuicao:instituicao,
            curso: curso,
            area:area


        });
        candidate = JSON.stringify(candidate)

        fs.writeFileSync(path.join('database','candidate.json'),candidate)


            // res.redirect('/')
        
    },
    login: (
        req, res) =>{
        const { email, senha} = req.bady
    }
}

module.exports = candidato