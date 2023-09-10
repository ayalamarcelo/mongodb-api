require('dotenv').config()
const express = require('express')

const userController = require('./controllers/userController')
const app = express()
const PORT = process.eventNames.PORT || 8000

app.post('/user', userController.create);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})