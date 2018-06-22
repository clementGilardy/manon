const express   = require('express');
const constants = require('../constant/constants');
const router    = express.Router();
const database  = require('../database/database');
const fs        = require('fs');
const utils     = require('../utils/utils');
const path      = require('path');
const ObjectId  = require('mongodb').ObjectId;
const _         = require('lodash');

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
			deleteImage(project.miniature);
			project.images.forEach((image) => {
				deleteImage(image);
			});
			// send response
			res.send({projetDelete: true});
		});
	}
});

router.put('/projects', async (req, res) => {
	const updateProject = req.body;
	const request       = await queryGet(updateProject.id);
	const oldProject    = request[0];
	const newProject    = {
		id: updateProject.id,
		titre: updateProject.titre,
		categorie: updateProject.categorie,
		description: updateProject.description,
		miniature: null,
		images: []
	};
	
	// traitement des miniature
	newProject.miniature = treatMiniature(oldProject, updateProject);
	newProject.images    = treatImages(oldProject, updateProject);
	
	database.update(constants.MONGO_TABLE.PROJECTS, newProject).then((result, err) => {
		if (err) {
			console.log(err);
			res.sendStatus(500);
		}
		console.log(result);
		res.send({update: true});
	})
});

router.post('/projects', (req, res) => {
	const projet          = req.body;
	const minBuffer       = Buffer.from(projet.miniature.img, constants.ENCODAGE);
	let imageBuffer       = null;
	const projectToInsert = {
		titre: projet.titre,
		categorie: projet.categorie,
		description: projet.description,
		createAt: projet.createAt,
		miniature: {
			name: projet.miniature.name,
			extension: projet.miniature.extension,
			description: projet.miniature.description
		},
		images: []
	};
	
	projet.images.forEach((image) => {
		imageBuffer = Buffer.from(image.img, constants.ENCODAGE);
		uploadImage(image.name + constants.DOT + image.extension, imageBuffer);
		projectToInsert.images.push({name: image.name, extension: image.extension, description: image.description});
	});
	
	//upload miniature
	uploadImage(projet.miniature.name + constants.DOT + projet.miniature.extension, minBuffer);
	database.save(constants.MONGO_TABLE.PROJECTS, projectToInsert).then((result, err) => {
		if (err) {
			res.sendStatus(500);
		}
		else {
			console.log('insertion du projet en base');
			res.send({add: true, project: result});
		}
	});
});


function deleteImage(image) {
	fs.unlink(path.join(__dirname, '..', constants.PATH_UPLOAD, image.name + constants.DOT + image.extension));
}

function treatImages(oldProject, newProject) {
	const images = [];
	const sort   = sortImage(oldProject.images, newProject.images);
	sort.delete.forEach((image) => {
		deleteImage(image);
	});
	
	sort.keep.forEach((image) => {
		images.push(image);
	});
	
	sort.new.forEach((image) => {
		const imageBuffer = Buffer.from(image.img, constants.ENCODAGE);
		uploadImage(image.name + constants.DOT + image.extension, imageBuffer);
		images.push({name: image.name, extension: image.extension, description: image.description});
	});
	return images;
}

function sortImage(oldI, newI) {
	const newImage      = [];
	const imageToDelete = [];
	const keepImage     = [];
	
	oldI.forEach((image) => {
		if (_.find(newI, {name: image.name})) {
			keepImage.push(image);
		}
		
		if (!_.find(newI, {name: image.name})) {
			imageToDelete.push(image);
		}
	});
	
	newI.forEach((image) => {
		if (image.img !== null) {
			newImage.push(image);
		}
	});
	
	return {new: newImage, keep: keepImage, delete: imageToDelete};
}

function treatMiniature(oldProject, newProject) {
	let miniature = {};
	if (newProject.miniature.img === null) {
		miniature = oldProject.miniature;
	} else {
		const minBuffer = Buffer.from(newProject.miniature.img, constants.ENCODAGE);
		deleteImage(oldProject.miniature);
		uploadImage(newProject.miniature.name + constants.DOT + newProject.miniature.extension, minBuffer);
		miniature = {
			name: newProject.miniature.name,
			extension: newProject.miniature.extension,
			description: newProject.miniature.description
		};
	}
	
	return miniature;
}

function uploadImage(imageName, buffer) {
	fs.appendFile(path.join(__dirname, '..', constants.PATH_UPLOAD, imageName), buffer, (err) => {
		if (err) {
			console.log(err);
		}
	});
}

async function queryGet(idProject) {
	return database.find(constants.MONGO_TABLE.PROJECTS, {_id: ObjectId(idProject)});
}

module.exports = router;