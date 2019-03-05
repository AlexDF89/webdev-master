const express = require('express');
const app = express();
const axios = require('axios');
const cheerio = require('cheerio');

axios({
  url: 'https://www.fl.ru/users/alexdf89/',
  method: 'GET'
})
.then(response => {
  const $ = cheerio.load(response.data);
  $('.portfolio-list .even a').each(function() {
    console.log(this.attribs.href);
  });
})
.catch(err => console.error(err.message));

app.listen(3001, console.log('Сервер работает на порту 3001'));