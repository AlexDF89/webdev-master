
const express = require('express');
const app = express();

const {
  startPage,
  publicFiles,
  getMenu,
  getPortfolioFL,
  getPortfolioGit,
  getPortfolioGames } = require('./routes')

app.get('/', (req, res) => {

  startPage(req, res);

});

app.get(/\.(css|js|jpeg|jpg|png|svg)/, (req, res) => {
	publicFiles(req, res);
});

app.get('/api/getMenu', (req, res) => {

  getMenu(req, res);

});

app.get('/api/getPortfolioFL', (req, res) => {
  
  getPortfolioFL(req, res);

});

app.get('/api/getPortfolioGit', (req, res) => {

  getPortfolioGit(req, res);

});

app.get('/api/getPortfolioGames', (req, res) => {

  getPortfolioGames(req, res);

});

app.get('/api/HelloFromFar', (req, res) => {

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({"body":"Привет от сайта webdev-master.ru"}));

});

app.listen(3000, console.log('Сервер работает на порту 3000'));