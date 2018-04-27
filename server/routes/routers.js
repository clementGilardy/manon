const express  = require('express');
const router   = express.Router();
const database = require('../database/database');


router.get('/', (req, res) => {
	// database.save('docTest', {test: 'caac'}).then((result, err) => {
	// 	if (err)
	// 		res.sendStatus(500);
	// 	else
	// 		res.send(result.ops);
	// });
});

module.exports = router;