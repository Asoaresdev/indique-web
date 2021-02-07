const candidate = require('../database/candidate.json')
const fs= require('fs')
const path= require('path')
const bcrypt  = require('bcrypt')

let candidateJson = path.join('candidate.json')
let Hash = bcrypt.hashSync("1234", 10)

const candidateController = {

    index: (req,res)=> {
        res.send(candidate)
       // res.render('index',{candidate})
    },
        

    show :(req,res)=> {
        let id = req.params.id
       let candidato  = candidate.find(candidato => candidato.id ==id
         )
         res.send(candidato)

    },
    Store: (req, res)=>{
        let {name, email, phone, about, escolaridade,
             instituicao, curso, area, senha} = req.body;
       

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
            area:area,
            senha:senhaC


        });
        candidate = JSON.stringify(candidate)
        let senhaC = bcrypt.hashSync(senha,10)

        fs.writeFileSync(path.join('database','candidate.json'),candidate)

     res.send(" usuario cadastrado com sucesso")
           
    },
    login: (
        req, res) =>{
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