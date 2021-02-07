const express = require("express");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

server.post("/candidate", (req, res) => {
  return res.json();
});

server.post("/company", (req, res) => {
  return res.json();
});

server.post("/mentor", (req, res) => {
  return res.json();
});

server.post("/login", (req, res) => {
  const returnCandidato = {
    name: "Felipe Silva",
    email: "felipe.silva@gmail.com",
    phone: "11999213345",
    escolaridade: "Médio Completo",
    instituicao: "UFRJ",
    curso: "Ciências da Computação",
    area: "T.I.",
  };

  return res.json({ ...returnCandidato });
});

server.listen(9000);
