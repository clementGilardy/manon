const express   = require('express');
const constants = require('../constant/constants');
const router    = express.Router();
const database  = require('../database/database');
const fs        = require('fs');
const utils     = require('../utils/utils');
const ObjectId  = require('mongodb').ObjectId;


router.delete('/projects/:id', (req, res) => {
	database.del(constants.MONGO_TABLE.PROJECTS, {_id: ObjectId(req.params.id)}).then((result, err) => {
		if (err) {
			res.sendStatus(500).send({projetDelete: false});
		}
		else {
			console.log(result);
			res.send({projetDelete: true});
		}
	});
});

router.post('/projects', (req, res) => {
	const projet          = req.body;
	const minBuffer       = projet.miniature.img !== null ? Buffer.from(projet.miniature.img, constants.ENCODAGE) : null;
	let imageBuffer       = null;
	const projectToInsert = {
		titre: projet.titre,
		categorie: projet.categorie,
		description: projet.description,
		miniature: null,
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
		await fs.appendFile(constants.PATH_UPLOAD + projet.miniature.name + constants.DOT + projet.miniature.extension, minBuffer, (err) => {
			if (err) console.log(err);
			console.log('write success miniature');
			projectToInsert.miniature = {
				name: projet.miniature.name,
				extension: projet.miniature.extension,
				description: projet.miniature.description
			};
		});
		database.save(constants.MONGO_TABLE.PROJECTS, projectToInsert).then((result, err) => {
			if (err) {
				res.sendStatus(500);
			}
			else {
				res.send({projet: true});
			}
		});
	};
	start().then(() => {
		console.log('all is ok');
	}).catch((err) => {
		console.log(err);
	});
});

module.exports = router;