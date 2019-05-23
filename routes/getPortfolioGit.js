const axios = require('axios');
const cheerio = require('cheerio');

function getPortfolioGit(req, res) {

  res.set('Content-Type', 'application/json; charset: utf-8');
  getPortfolio(null, result => res.end(JSON.stringify(result)));

}

function getPortfolio(err, cb) {

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

module.exports = getPortfolioGit;