const express = require('express');
const app = express();
const axios = require('axios');
const cheerio = require('cheerio');


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
getPortfolioFL(null, result => console.log(result));

app.listen(3001, console.log('Сервер работает на порту 3001'));