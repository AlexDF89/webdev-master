const express = require('express');
const app = express();
const axios = require('axios');
const cheerio = require('cheerio');

app.get('/api/getMenu', (req, res) => {
  res.set('Content-Type', 'application/json; charset: utf-8');
  res.end(JSON.stringify([
    {
      id: '/',
      text: "Главная",
      active: true
    },
    {
      id: '/portfolio',
      text: "Портфолио",
      active: false
    },
    {
      id: '/contacts',
      text: "Контакты",
      active: false
    }
  ]));
});

app.get('/api/getPortfolioFL', (req, res) => {
  res.set('Content-Type', 'application/json; charset: utf-8');
  getPortfolioFL(null, result => res.end(JSON.stringify(result)));
});

app.get('/api/getPortfolioGit', (req, res) => {
  res.set('Content-Type', 'application/json; charset: utf-8');
  getPortfolioGit(null, result => res.end(JSON.stringify(result)));
});

app.listen(3001, console.log('Сервер работает на порту 3001'));


function getPortfolioFL(err, cb) {

  const result = [];
  let countPage = 0;

  axios({
      url: 'https://www.fl.ru/users/alexdf89/',
      method: 'GET'
    })
    .then(async (response) => {

      const $ = cheerio.load(response.data);
      const lengthFL = $('.portfolio-list .even a').length;

      await $('.portfolio-list .even a').each( function() {
        axios(({
          url: `https://www.fl.ru/${this.attribs.href}`,
          method: 'GET'
        }))
        .then(response => {
          const $ = cheerio.load(response.data);
          result[countPage] = {
            type: ['FL'],
            title: $('h1').text(),
            src: $('.qpr:nth-child(2) img').attr('src'),
            desc: $('.qpr:first-child div:nth-child(3)').text().trim(),
            href: `https://www.fl.ru${this.attribs.href}`
          };
          countPage++;

          if (countPage === lengthFL) cb(result);

        })
        .catch(err => console.error(err.message));
      });

    })
    .catch(err => console.error(err.message));
}
function getPortfolioGit(err, cb) {

  const result = [];
  let countPage = 0;

  axios({
      url: 'https://github.com/AlexDF89/',
      method: 'GET'
    })
    .then(async (response) => {

      const $ = cheerio.load(response.data);
      const lengthFL = $('.pinned-item-list-item-content a').length;

      await $('.pinned-item-list-item-content a').each( function() {
        axios(({
          url: `https://github.com${this.attribs.href}`,
          method: 'GET'
        }))
        .then(response => {
          const $ = cheerio.load(response.data);
          result[countPage] = {
            type: ['Github'],
            title: $('h1 strong a').text(),
            src: '',
            desc: $('.markdown-body.entry-content p:first-child').text().trim(),
            href: `https://github.com${this.attribs.href}`
          };
          countPage++;

          if (countPage === lengthFL) cb(result);

        })
        .catch(err => console.error(err.message));
      });

    })
    .catch(err => console.error(err.message));
}