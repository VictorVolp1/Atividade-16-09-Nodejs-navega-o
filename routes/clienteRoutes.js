const express = require("express");

const router = express.Router();

let clientes = [
  {
    id: 1,
    nome: "Caio Rodrigo",
    email: "CaioRodrigo@email.com",
    telefone: "11 6769-6767",
    cidade: "São Paulo"
  },
  {
    id: 2,
    nome: "Lauro Gato",
    email: "LauroGato@email.com",
    telefone: "11 6769-6768",
    cidade: "Belterra"
  },
  {
    id: 3,
    nome: "Maria Silva",
    email: "MariaSilva@email.com",
    telefone: "11 6769-6769",
    cidade: "Santo Amaro"
  }
];

router.get("/", (req, res) => {

  res.render("clientes/index", {
    clientes: clientes
  });

});

router.get("/cadastrar", (req, res) => {

  res.render("clientes/form-cadastro");

});

router.post("/", (req, res) => {
  const { nome, email, telefone, cidade } = req.body;
  const novoCliente = {
    id: clientes.length + 1,
    nome: nome,
    email: email,
    telefone: telefone,
    cidade: cidade
  };
  clientes.push(novoCliente);
  res.redirect("/clientes");
});

module.exports = router;