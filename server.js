const express = require('express')
const app = express()

const PORT = 3000
// const baseUrl =  http://somosicev.com/icevchallenge

const routes = require('./routes')

app.get('/api', (req, res) => {
	res.send('eae')
})

app.use('/', routes)

app.listen(PORT || 3001, () => {
	console.log('listening on port 3000')
})
