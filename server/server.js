const express    = require('express');
const constants  = require('./constant/constants');
const bodyParser = require('body-parser');
const app        = express();
const mail       = require('./routes/mail');
const project    = require('./routes/project');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
app.use(function (req, res, next) {
	
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', constants.URL_FRONT);
	
	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	
	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	
	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);
	
	// Pass to next layer of middleware
	next();
});
app.use(constants.API_PREFIC, mail);
app.use(constants.API_PREFIC, project);


app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
});