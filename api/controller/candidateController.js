const candidate = require('../database/candidate.json')

const candidato = {
    create: (req, res)=>{
        const {name, email, phone, about, escolaridade,
             instituicao, curso, area} = req.body;
    },
    login: (req, res) =>{
        const { email, senha} = req.bady
    }
}

module.exports = candidato