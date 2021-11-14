const express = require('express')

const app = express()

// MIDDLEWARES
app.use('/', () =>
{
    console.log('auth')
})

// ROUTE
app.get('/', (req, res) =>
{
    res.send('hello world')
})


// LISTEN
app.listen(3000)