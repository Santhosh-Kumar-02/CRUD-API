// importing modules
import express from 'express'
import bodyParser from 'body-parser'

import usersRoutes from './routes/users.js'

// creating an express app
const app = express()

// creating a port
const PORT = 5000

app.use(bodyParser.json())

app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    console.log('connection established')
    res.send('<p>crud api</p>')
})

// listem for connection
app.listen(PORT, () => {
    console.log('server running on port ', PORT)
})