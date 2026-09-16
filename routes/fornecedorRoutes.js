const express = require("express");

const router = express.Router();

let fornecedores = [
  {
    id: 1,
    razaoSocial: " Google Brasil Internet Ltda.",
    cnpj: "12.345.678/0001-90",
    email: "contato@google.com",
    telefone: "11 6769-6767",
    cidade: "São Paulo"
  },
  {
    id: 2,
    razaoSocial: "Microsoft do Brasil Ltda.",
    cnpj: "12.345.678/0001-90",
    email: "contato@microsoft.com",
    telefone: "11 6769-6768",
    cidade: "São Paulo"
  },
  {
    id: 3,
    razaoSocial: "Pizzaria Borda Queimada Ltda.",
    cnpj: "12.345.678/0001-90",
    email: "contato@amazon.com",
    telefone: "11 6769-6769",
    cidade: "Xique-Xique"
  }
];

router.get("/", (req, res) => {

  res.render("fornecedores/index", {
    fornecedores: fornecedores
  });

});

router.get("/cadastrar", (req, res) => {

  res.render("fornecedores/form-cadastro");

});

router.post("/", (req, res) => {
  const { razaoSocial, cnpj, email, telefone, cidade } = req.body;
  const novoFornecedor = {
    id: fornecedores.length + 1,
    razaoSocial: razaoSocial,
    cnpj: cnpj,
    email: email,
    telefone: telefone,
    cidade: cidade
  };
  fornecedores.push(novoFornecedor);
  res.redirect("/fornecedores");
});

module.exports = router;