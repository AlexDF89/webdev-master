function getPortfolioGit(req, res) {
  res.set('Content-Type', 'application/json; charset: utf-8');
  res.end(JSON.stringify(
    [
      {
        type: ['Games'],
        title: 'Memoji_game',
        src: './images/portfolio/memoji.png',
        desc: `Игра memoji_game изначально создавалась в качестве финального проекта для прохождения специализации от Яндекса и МФТИ "Разработка интерфейсов: вёрстка и JavaScript" на [coursera.org](https://www.coursera.org/specializations/razrabotka-interfeysov). Первый вариант игры был сделан на чистом html, css и JavaScript без использования библиотек и фреймворков. Игра работала исключительно на клиенте, без какого-либо бэкенда.
        В дальнейшем логика была перенесена на node.js, а frontend на react.js.`,
        href: 'http://memoji.webdev-master.ru'
      },
      {
        type: ['Games'],
        title: 'Checkers',
        src: './images/portfolio/shashki.jpg',
        desc: `Шашки – это настольная игра для двух участников, в которую играют на специально расчерченном поле (доске) с помощью разноцветных фишек (шашек).<br>
        Цель игры состоит в том, чтобы захватить все шашки соперника или в том, чтобы лишить их права передвижения.<br>
        Запустив проект на рабочем сервере, вы сможете играть в шашки с друзьями по сети.`,
        href: 'http://checkers.webdev-master.ru'
      }
    ]
  ));
}

module.exports = getPortfolioGit;