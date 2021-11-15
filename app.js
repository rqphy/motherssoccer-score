const express = require('express')
const app = express()

const knex = require('./database');
const tools = require('./functions')

const path = require('path')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000



// MIDDLEWARES
app.use('/:apiKey', (req, res, next) =>
{
    
    if (tools.auth(req.params.apiKey))
    {
        next()
    } else
    {
        res.status(406).send({msg: 'BAD API KEY'})
    }

})

// ROUTE
app.get('/', (req, res) =>
{
    res.sendFile(path.join(__dirname, '/404.html'))
})

app.get('/:apiKey/', (req, res) =>
{
    res.send('hello world')
})

app.get('/auth', (req, res) =>
{
    res.send('hello auth')
})


// LISTEN
app.listen(PORT)
console.log('Server running at http://localhost:' + PORT)