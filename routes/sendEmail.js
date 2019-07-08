const sendmail = require('sendmail')();

function sendEmail(req, res) {

  sendmail({

    from: 'info@webdev-master.ru',
    to: 'AlexDF89@yandex.ru',
    subject: 'webdev-master.ru',
    html: `Сообщение: ${req.body.mes} <br>
            Email: ${req.body.email} <br>
            Телефон: ${req.body.tel}`, 

  }, function(err, reply) {}); 

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({"ok" : true}));
}

module.exports = sendEmail;