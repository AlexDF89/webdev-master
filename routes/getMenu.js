function getMenu(req, res) {

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
  
}

module.exports = getMenu;