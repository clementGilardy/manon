const express   = require('express');
const constants = require('../constant/constants');
const router    = express.Router();
const database  = require('../database/database');
const ObjectId  = require('mongodb').ObjectId;

router.get('/categories', (req, res) => {
	database.find(constants.MONGO_TABLE.CATEGORIES, {}).then((result, err) => {
		if (err) {
			res.sendStatus(500);
		}
		res.send(result);
	});
});

router.post('/categories', (req, res) => {
	const categorie = {name: req.body.name};
	database.save(constants.MONGO_TABLE.CATEGORIES, categorie).then((result, err) => {
		if (err) {
			console.log(err);
		}
		
		res.send(result);
	});
});

router.get('/categories/:id', (req, res) => {
	const id = req.params.id;
	database.find(constants.MONGO_TABLE.CATEGORIES, {_id: ObjectId(id)}).then((result, err) => {
		if (err) {
			res.sendStatus(500);
		}
		res.send(result[0]);
	});
});

module.exports = router;