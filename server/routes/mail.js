const express    = require('express');
const router     = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'gilardy.clement@gmail.com',
		pass: 'vetbopen36'
	}
});

router.post('/mail', (req, res) => {
	const contact     = req.body;
	const mailOptions = {
		from: contact.email,
		to: 'gilardy.clement@gmail.com',
		subject: 'Formulaire de contact ' + contact.prenom + ' ' + contact.nom,
		text: contact.message
	};
	transporter.sendMail(mailOptions, function (error) {
		if (error) {
			console.log(error);
			res.send({send: false});
		} else {
			res.send({send: true});
		}
	});
});

module.exports = router;