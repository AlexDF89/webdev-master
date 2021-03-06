
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

const {
  startPage,
  publicFiles,
  getMenu,
  sendEmail,
  getPortfolioFL,
  getPortfolioGit,
  getPortfolioGames } = require('./routes')

app.get(/^(\/(portfolio|contacts)?)$/i, (req, res) => {

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

app.post('/api/sendForm', (req, res) => {

  sendEmail(req, res);

});

app.listen(3000, console.log('Сервер работает на порту 3000'));