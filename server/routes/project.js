const express   = require('express');
const constants = require('../constant/constants');
const router    = express.Router();
const database  = require('../database/database');
const ObjectId  = require('mongodb').ObjectId;

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


router.get('/projects/limit/:limit', (req, res) => {
	database.findLimit(constants.MONGO_TABLE.PROJECTS,{}, req.params.limit).then((result, err) => {
		if (err) {
			res.sendStatus(500);
		} else {
			res.send(result);
		}
	});
});

router.get('/projects/:id', (req, res) => {
	const id = req.params.id;
	database.find(constants.MONGO_TABLE.PROJECTS, {_id: ObjectId(id)}).then((result, err) => {
		if (err) {
			res.sendStatus(500);
		}
		else {
			res.send(result[0]);
		}
	});
});

module.exports = router;