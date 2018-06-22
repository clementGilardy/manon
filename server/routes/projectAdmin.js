const express   = require('express');
const constants = require('../constant/constants');
const router    = express.Router();
const database  = require('../database/database');
const fs        = require('fs');
const utils     = require('../utils/utils');
const path      = require('path');
const ObjectId  = require('mongodb').ObjectId;

async function queryGet(idProject) {
	return database.find(constants.MONGO_TABLE.PROJECTS, {_id: ObjectId(idProject)});
}

router.delete('/projects/:id', async (req, res) => {
	const id = req.params.id;
	if (id === null || id === 'NULL') {
		database.del(constants.MONGO_TABLE.PROJECTS, {_id: id}).then((result, err) => {
			if (err) {
				res.sendStatus(500).send({projetDelete: false});
			}
			res.send({projetDelete: true});
		});
	} else {
		// récupération du projet avant suppression
		const projects = await queryGet(id);
		const project  = projects[0];
		database.del(constants.MONGO_TABLE.PROJECTS, {_id: ObjectId(id)}).then(async (result, err) => {
			if (err) {
				res.sendStatus(500).send({projetDelete: false});
			}
			// suppression des images
			const linkMiniature = path.join(__dirname, '..', 'uploads', project.miniature.name + '.' + project.miniature.extension);
			fs.unlink(linkMiniature);
			project.images.forEach((image) => {
				let linkImage = path.join(__dirname, '..', 'uploads', image.name + '.' + image.extension);
				fs.unlink(linkImage);
			});
			// send response
			res.send({projetDelete: true});
		});
	}
});

router.post('/projects', (req, res) => {
	const projet          = req.body;
	const minBuffer       = projet.miniature.img !== null ? Buffer.from(projet.miniature.img, constants.ENCODAGE) : null;
	let imageBuffer       = null;
	const projectToInsert = {
		titre: projet.titre,
		categorie: projet.categorie,
		description: projet.description,
		createAt: projet.createAt,
		miniature: null,
		images: []
	};
	
	const start = async () => {
		await utils.asyncForEach(projet.images, async (image) => {
			imageBuffer = Buffer.from(image.img, constants.ENCODAGE);
			fs.appendFile(path.join(__dirname, '..', constants.PATH_UPLOAD, image.name + constants.DOT + image.extension), imageBuffer, (err) => {
				if (err) {
					console.log(err);
				}
				else {
					console.log('insertion des images');
				}
			});
			projectToInsert.images.push({name: image.name, extension: image.extension, description: image.description});
		});
		await fs.appendFile(path.join(__dirname, '..', constants.PATH_UPLOAD, projet.miniature.name + constants.DOT + projet.miniature.extension), minBuffer, (err) => {
			if (err) {
				console.log(err);
			}
			projectToInsert.miniature = {
				name: projet.miniature.name,
				extension: projet.miniature.extension,
				description: projet.miniature.description
			};
		});
	};
	start().then(() => {
		database.save(constants.MONGO_TABLE.PROJECTS, projectToInsert).then((result, err) => {
			if (err) {
				res.sendStatus(500);
			}
			else {
				console.log('insertion du projet en base');
				res.send({add: true, project: result});
			}
		});
	}).catch((err) => {
		console.log(err);
	});
});

module.exports = router;