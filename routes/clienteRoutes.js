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
    clientes: clientes,
    currentPath: req.originalUrl || req.path
  });

});

router.get("/cadastrar", (req, res) => {

  res.render("clientes/form-cadastro", { currentPath: req.originalUrl || req.path });

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

router.get("/excluir/:id", (req, res) => {
  let id = parseInt(req.params.id);
  clientes = clientes.filter(c => c.id !== id);
  res.redirect("/clientes");
});

router.get("/editar/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let cliente = clientes.find(c => c.id === id);

  if(!cliente) {
    return res.redirect("/clientes");
  }

  res.render("clientes/editar", { cliente, currentPath: req.originalUrl || req.path });
});

router.post("/editar/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let cliente = clientes.find(c => c.id === id);

  if (!cliente) {
    return res.redirect("/clientes");
  }

  const { nome, email, telefone, cidade } = req.body;

  cliente.nome = nome;
  cliente.email = email;
  cliente.telefone = telefone;
  cliente.cidade = cidade;

  res.redirect("/clientes");
});

module.exports = router;