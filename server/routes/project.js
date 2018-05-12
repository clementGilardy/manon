const express   = require('express');
const constants = require('../constant/constants');
const router    = express.Router();
const database  = require('../database/database');
const fs        = require('fs');
const utils     = require('../utils/utils');

router.get('/projects', (req, res) => {
	database.find(constants.MONGO_TABLE.PROJECTS).then((result, err) => {
		if (err)
			res.sendStatus(500);
		else
			res.send(result);
	});
});

router.post('/projects', (req, res) => {
	const projet          = req.body;
	let imageBuffer       = null;
	const projectToInsert = {
		titre: projet.titre,
		categorie: projet.categorie,
		description: projet.description,
		images: []
	};
	
	const start = async () => {
		await utils.asyncForEach(projet.images, async (image) => {
			imageBuffer = Buffer.from(image.img, constants.ENCODAGE);
			fs.appendFile(constants.PATH_UPLOAD + image.name + constants.DOT + image.extension, imageBuffer, (err) => {
				if (err) console.log(err);
				console.log('write success');
			});
			projectToInsert.images.push({name: image.name, extension: image.extension, description: image.description});
		});
		database.save(constants.MONGO_TABLE.PROJECTS, projectToInsert).then((result, err) => {
			if (err) {
				res.sendStatus(500);
			}
			else {
				res.send({projet: 'ajout du projet en base'});
			}
		});
	};
	start();
});

module.exports = router;