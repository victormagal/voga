const mail = require('nodemailer');

export default function sendMail(req, res) {
  const body = JSON.parse(req.body);
  
  const message = `
    Nome: ${body.nome}\r\n
    E-mail: ${body.email}\r\n
    Telefone: ${body.telefone}\r\n
    Mensagem: ${body.mensagem}
  `;

  let transporter = mail.createTransport({
    host: 'smtp.gmail.com',
    port: '587',
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    }
  });

  transporter.sendMail({
    from: body.email,
    to: `${process.env.NODEMAILER_USER}`,
    subject: 'Contato via site',
    text: body.message,
    html: message.replace(/\r\n/g, '<br />')
  })
  .then(response => { res.send(response) })
  .catch(error => { res.send(error) })
}
