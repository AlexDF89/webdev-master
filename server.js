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
  res.end(JSON.stringify([
    {
      type: ['Github'],
      title: 'Портфолио Github 1',
      src: '',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at rem omnis odio ad vero amet delectus. Sequi culpa deserunt commodi eius corporis vero placeat consequatur facere tempore, necessitatibus minus cupiditate expedita vel, suscipit dolorum officiis temporibus quaerat non?'
    },
    {
      type: ['Games', 'Github'],
      title: 'Портфолио Games 1',
      src: '',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta harum ipsa temporibus dolorem odit quis velit vero at, distinctio aut. Deserunt hic animi saepe sunt at reiciendis id voluptate officiis in tempora nobis vel qui nihil, excepturi facilis obcaecati praesentium unde est sint temporibus fuga atque recusandae? Vero, non ratione!'
    },
    {
      type: ['Github'],
      title: 'Портфолио Github 2',
      src: '',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit repellat, eos qui maiores esse repudiandae ut dicta! Recusandae nobis maiores aut quia possimus, obcaecati iure quae labore accusamus blanditiis! Explicabo ad possimus excepturi in error, iste aliquam ab eligendi quod hic? Harum numquam consequuntur officia dolor quia ipsam culpa nemo aspernatur. Dolore incidunt ipsum sit nesciunt ratione? Iure neque atque earum vel adipisci eligendi ipsum? Neque qui quibusdam vel adipisci!'
    },
    {
      type: ['Games', 'Github'],
      title: 'Портфолио Games 2',
      src: '',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit repellat, eos qui maiores esse repudiandae ut dicta! Recusandae nobis maiores aut quia possimus, obcaecati iure quae labore accusamus blanditiis! Explicabo ad possimus excepturi in error, iste aliquam ab eligendi quod hic? Harum numquam consequuntur officia dolor quia ipsam culpa nemo aspernatur.'
    }
  ]));
});

app.listen(3001, console.log('Сервер работает на порту 3001'));