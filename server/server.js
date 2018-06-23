const express      = require('express');
const constants    = require('./constant/constants');
const bodyParser   = require('body-parser');
const app          = express();
const apiRoutes    = express.Router();
const mail         = require('./routes/mail');
const projectAdmin = require('./routes/projectAdmin');
const categories   = require('./routes/categories');
const project      = require('./routes/project');
const users        = require('./routes/user');
const jwt          = require('jsonwebtoken');
const path         = require('path');


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
app.use(function (req, res, next) {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	
	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-access-token, x-api-key');
	res.setHeader('Access-Control-Max-Age', 0);
	res.setHeader('Cache-Control', 'max-age=0');
	
	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	
	res.setHeader('Access-Control-Allow-Credentials', true);
	if (req.method === 'OPTIONS') {
		res.sendStatus(200);
	} else {
		next();
	}
});

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(constants.API_PREFIX, mail);
app.use(constants.API_PREFIX, users);
app.use(constants.API_PREFIX, project);

apiRoutes.use((req, res, next) => {
	const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['x-api-key'];
	if (token) {
		jwt.verify(token, constants.TOKEN, (err, decoded) => {
			if (err) {
				return res.json({success: false, message: 'Failed to authenticate token.'})
			} else {
				req.decoded = decoded;
				next();
			}
		});
	} else {
		return res.status(403).send({success: false, message: 'No token provided'});
	}
	
});

app.use(constants.API_PREFIX, apiRoutes);
app.use(`${constants.API_PREFIX}/admin`, projectAdmin);
app.use(`${constants.API_PREFIX}/admin`, categories);

app.listen(8080, function () {
	console.log('Example app listening on port 8080!')
});