const express = require('express');
const path = require('path');
const Produto = require("./models/produto");
const cors= require('cors');
const app = express();
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/produto', async function(req, res){
  try {
    var produto = await Produto.select();
    res.json(produto.rows);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar produtos' });
  }
});

app.get('/produto/:codigo', async function(req, res){
  try {
    var produto = await Produto.selectOne(req.params.codigo);
    res.json(produto.rows);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar produtos' });
  }
});

app.post('/produto', async function(req, res){ console.log('inserido');
  try {
    var produtos = await Produto.insert(req.body);
    res.json(produtos.rows[0]);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar produtos' });
  }
});

app.post('/produto', async function(req,res){
  try{
    var produto = req.body
    var produto = await produto.insert(produto);
    res.json(produto.rows)
  }catch(error){
    console.log("error")
  }
})

app.delete('/produto', async function(req, res){
  try {
    var produto = await Produto.delete(req.body.codigo);
    res.json(produto.rows);
  } catch (error) {
    console.error('Erro ao atualizar pessoa:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao atualizar pessoa' });
  }
});

app.put('/produto', async function(req, res) {
  try {
    const produto = await Produto.update(req.body.codigo, req.body);
    res.json(produto);
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao atualizar o produto' });
  }
});



app.listen(3003, function() {
  console.log(`app de Exemplo escutando na porta! ${3003}`)
});
