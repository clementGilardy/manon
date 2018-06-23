const express   = require('express');
const constants = require('../constant/constants');
const router    = express.Router();
const database  = require('../database/database');

router.post('/categories', (req, res) => {
	const categorie = {name: req.body.name};
	database.save(constants.MONGO_TABLE.CATEGORIES, categorie).then((result, err) => {
		if (err) {
			console.log(err);
		}
		
		res.send(result);
	});
});

module.exports = router;