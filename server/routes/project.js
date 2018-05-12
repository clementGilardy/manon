const express   = require('express');
const constants = require('../constant/constants');
const router    = express.Router();
const database  = require('../database/database');
const multer    = require('multer');
const upload    = multer({dest: '../uploads/'});
const fs        = require('fs');

router.get('/projects', (req, res) => {
	database.find(constants.MONGO_TABLE.PROJECTS).then((result, err) => {
		if (err)
			res.sendStatus(500);
		else
			res.send(result);
	});
});

router.post('/projects', (req, res) => {
	const projet = req.body;
	let buf      = null;
	
	projet.images.forEach((image) => {
		buf = Buffer.from(image.image, 'base64');
		fs.appendFile("server/uploads/"+image.name+".jpg", buf, (err) => {
			if (err) console.log(err);
			console.log('write success');
		});
		
	});
	// database.save(constants.MONGO_TABLE.PROJECTS).then((result, err) => {
	// 	if (err) {
	// 		res.sendStatus(500);
	// 	}
	// 	else {
	// 		// fixme ajout du projet en base + upload d'image
	// 		console.log('ajout du projet en base');
	// 	}
	// });
});

module.exports = router;