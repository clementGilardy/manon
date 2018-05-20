const express   = require('express');
const constants = require('../constant/constants');
const router    = express.Router();
const database  = require('../database/database');
const jwt       = require('jsonwebtoken');


router.get('/users', (req, res) => {
	database.find(constants.MONGO_TABLE.USER).then((result, err) => {
		if (err) {
			res.sendStatus(500);
		}
		else {
			res.send(result);
		}
	});
});

router.post('/authenticate', (req, res) => {
	const filter = {
		login: req.body.login
	};
	database.find(constants.MONGO_TABLE.USER, filter).then((result, err) => {
		if (err) res.sendStatus(500);
		if (!result) {
			res.send({success: false, message: 'Authentification failed'});
		} else {
			if (result[0].password !== req.body.password) {
				res.send({success: false, message: 'Authentification falied. Wrong password'});
			} else {
				const payload = {
					admin: true
				};
				const token   = jwt.sign(payload, constants.TOKEN, {expiresIn: '24h'});
				res.send({success: true, message: 'Enjoy your token', token: token});
			}
		}
	});
});

// router.post('/users', (req, res) => {
// 	const user = {
// 		login: 'manond',
// 		password: 'deidara-7'
// 	};
// 	database.save(constants.MONGO_TABLE.USER, user).then((result, err) => {
// 		if (err) {
// 			res.sendStatus(500);
// 		}
// 		else {
// 			res.send({user: true});
// 		}
// 	});
// });

module.exports = router;