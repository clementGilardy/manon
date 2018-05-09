const express   = require('express');
const constants = require('../constant/constants');
const router    = express.Router();
const database  = require('../database/database');


router.get('/projects', (req, res) => {
	database.find(constants.MONGO_TABLE.PROJECTS).then((result, err) => {
		if (err)
			res.sendStatus(500);
		else
			res.send(result);
	});
});

router.post('/projects', (req, res) => {
	database.save(constants.MONGO_TABLE.PROJECTS).then((result, err) => {
		if (err) {
			res.sendStatus(500);
		}
		else {
			// fixme ajout du projet en base + upload d'image
			console.log('ajout du projet en base');
		}
	});
});

module.exports = router;