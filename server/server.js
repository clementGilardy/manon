const express     = require('express');
const bodyParser  = require('body-parser');

const app         = express();
const router      = require('./routes/routers');

app.use(bodyParser.urlencoded({extended: true}));
app.use('/',router);




app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
});