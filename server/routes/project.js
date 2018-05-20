const express   = require('express');
const constants = require('../constant/constants');
const router    = express.Router();
const database  = require('../database/database');

router.get('/projects', (req, res) => {
	database.find(constants.MONGO_TABLE.PROJECTS, {}).then((result, err) => {
		if (err) {
			res.sendStatus(500);
		}
		else {
			res.send(result);
		}
	});
});

module.exports = router;