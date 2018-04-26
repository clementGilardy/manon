const express     = require('express');
const bodyParser  = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app         = express();
const router      = require('./routes/routers');

app.use(bodyParser.urlencoded({extended: true}));
app.use('/',router);

MongoClient.connect('mongodb://hawklm:Vetbopen_36@ds159459.mlab.com:59459/manon', (err, db) => {
	if (err) return console.log(err);
});


app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
});