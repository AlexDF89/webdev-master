function getPortfolioGit(req, res) {
  res.end(JSON.stringify(
    [
      {
        type: ['Games'],
        title: 'Memoji_game',
        src: './images/portfolio/memoji.png',
        desc: 'Игра memoji_game (напиши уже описание)',
        href: ``
      },
      {
        type: ['Games'],
        title: 'Checkers',
        src: './images/portfolio/shashki.jpg',
        desc: 'Игра checkers (напиши уже описание)',
        href: ``
      }
    ]
  ));
}

module.exports = getPortfolioGit;