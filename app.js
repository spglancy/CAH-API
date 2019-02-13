const express = require('express')
const app = express()
const data = require("./data.json")

mongoose.connect( config.mongoURL, { useNewUrlParser: true })
.catch(err =>{
    throw err;
})

app.get('/', (req, res) => {
    res.json(data.base.black[4])
})

// should be last get, will return an error message for requests to routes that do not exist
app.get('*', function (req, res) {
	res.send({
		message: 'This endpoint does not exist',
		error: 404,
	}, 404);
});

app.listen(config.port, () => {
    console.log(`App running on port ${config.port}`)
})