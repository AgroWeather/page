const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('<h1>ArgWeather</h1>')
})

app.get('/api/:sensor/:value', (req, res) => {
	res.send({sensor: req.params.sensor, value: req.params.value})
})

var port = process.env.PORT || 3000

app.listen(port, console.log(`ecuchando en el puerto ${port}`))