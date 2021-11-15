const express = require('express')
const app = express()

const knex = require('./database');
const tools = require('./functions')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



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
app.get('/:apiKey/', (req, res) =>
{
    res.send('hello world')
})

app.get('/auth', (req, res) =>
{
    res.send('hello auth')
})


// LISTEN
app.listen(3000)