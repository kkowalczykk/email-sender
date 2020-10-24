const router = require('express').Router();
const nodemailer = require('nodemailer');

// Configure nodemailer transport
let transport = nodemailer.createTransport({
      host: 'mail.CBA.pl', // SMTP SERVER
      port: 587,
      auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
      }
});

router.post('/', async (req, res) => {
      try {
            const { message } = req.body;

            const mail = {
                  from: process.env.SMTP_USER,
                  to: ['kovalczyk97@gmail.com'],
                  subject: 'New message from kkowalczykk.github.io',
                  text: message
            }
            transport.sendMail(mail, function (err, info) {
                  if (err) {
                        console.log(err)
                        return res.status(500).json({ error: err.message });
                  } else {
                        console.log(info);
                        return res.status(200).json({ response: info });
                  }
            });
      } catch (err) {
            res.status(500).json({ error: err.message });
      }
});

module.exports = router;