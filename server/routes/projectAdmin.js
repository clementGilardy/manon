const express   = require('express');
const constants = require('../constant/constants');
const router    = express.Router();
const database  = require('../database/database');
const fs        = require('fs');
const utils     = require('../utils/utils');
const path      = require('path');
const ObjectId  = require('mongodb').ObjectId;
const logger    = require('node-logger').createLogger('project.log');


router.delete('/projects/:id', (req, res) => {
	database.del(constants.MONGO_TABLE.PROJECTS, {_id: ObjectId(req.params.id)}).then((result, err) => {
		if (err) {
			res.sendStatus(500).send({projetDelete: false});
		}
		else {
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
			
			logger.info('path of file uploads : ');
			logger.info(path.join(__dirname, '..', constants.PATH_UPLOAD, image.name + constants.DOT + image.extension));
			fs.appendFile(path.join(__dirname, '..', constants.PATH_UPLOAD, image.name + constants.DOT + image.extension), imageBuffer, (err) => {
				if (err) {
					logger.error('picture not write');
					logger.error(err);
				}
				else {
					console.log('insertion des images');
					logger.info('picture write');
				}
			});
			projectToInsert.images.push({name: image.name, extension: image.extension, description: image.description});
		});
		await fs.appendFile(path.join(__dirname, '..', constants.PATH_UPLOAD, projet.miniature.name + constants.DOT + projet.miniature.extension), minBuffer, (err) => {
			if (err) {
				logger.error('picture not write miniature');
				logger.error(err);
			} else {
				logger.info('picture write miniature');
			}
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
				console.log('insertion du projet en base');
				res.send({add: true, project: result});
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