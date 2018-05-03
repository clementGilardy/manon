const express  = require('express');
const router   = express.Router();
const database = require('../database/database');


router.post('/mail', (req, res) => {
	const mail = req.body;
	console.log('send mail');

	// database.save('docTest', {test: 'caac'}).then((result, err) => {
	// 	if (err)
	// 		res.sendStatus(500);
	// 	else
	// 		res.send(result.ops);
	// });
});

module.exports = router;