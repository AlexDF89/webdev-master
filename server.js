
const express = require('express');
const app = express();

const { 
  startPage,
  publicFiles,
  getMenu,
  getPortfolioFL,
  getPortfolioGit } = require('./routes')

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

app.listen(3001, console.log('Сервер работает на порту 3001'));