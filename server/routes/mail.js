const express    = require('express');
const router     = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	host: 'mail.gandi.net',
	port: 465,
	secure: true,
	auth: {
		user: 'contact@manon-delage.fr',
		pass: 'Vetbopen_369'
	}
});

router.post('/mail', (req, res) => {
	const contact     = req.body;
	const mailOptions = {
		from: 'contact@manon-delage.fr',
		to: 'manon.delage@orange.fr',
		subject: contact.email + contact.prenom + ' ' + contact.nom,
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