const express = require("express");

const router = express.Router();

let produtos = [
  {
    id: 1,
    nome: "Notebook Dell Inspiron",
    descricao: "Notebook Dell Inspiron com processador Intel Core i5, 8GB de RAM e 256GB de SSD.",
    preco: 3999.99,
    estoque: 10,
    categoria: "Eletrônicos"
  },
  {
    id: 2,
    nome: "Doki Doki Literature Club",
    descricao: "Jogo de aventura visual para PC com história emocionante e personagens cativantes.",
    preco: 20.99,
    estoque: 67,
    categoria: "Games"
  },
  {
    id: 3,
    nome: "Tablet Apple iPad",
    descricao: "Tablet Apple iPad com tela de 10.2 polegadas, 64GB de armazenamento e câmera de 12MP.",
    preco: 2499.99,
    estoque: 20,
    categoria: "Eletrônicos"
  }
];

router.get("/", (req, res) => {

  res.render("produtos/index", {
    produtos: produtos,
    currentPath: req.originalUrl || req.path
  });

});

router.get("/cadastrar", (req, res) => {

  res.render("produtos/form-cadastro", { currentPath: req.originalUrl || req.path });

});

router.post("/", (req, res) => {
  const { nome, descricao, preco, estoque, categoria } = req.body;
  const novoProduto = {
    id: produtos.length + 1,
    nome: nome,
    descricao: descricao,
    preco: preco,
    estoque: estoque,
    categoria: categoria
  };
  produtos.push(novoProduto);
  res.redirect("/produtos");
});

router.get("/excluir/:id", (req, res) => {
  let id = parseInt(req.params.id);
  produtos = produtos.filter(p => p.id !== id);
  res.redirect("/produtos");
});

router.get("/editar/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let produto = produtos.find(p => p.id === id);

  if(!produto) {
    return res.redirect("/produtos");
  }

  res.render("produtos/editar", { produto, currentPath: req.originalUrl || req.path });
});

router.post("/editar/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.redirect("/produtos");
  }

  const { nome, descricao, preco, estoque, categoria } = req.body;

  produto.nome = nome;
  produto.descricao = descricao;
  produto.preco = preco;
  produto.estoque = estoque;
  produto.categoria = categoria;

  res.redirect("/produtos");
});

module.exports = router;