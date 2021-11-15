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

app.post('/:apiKey/', async (req, res) =>
{
    const DTO = {
        name: req.body.name,
        score: req.body.score,
        date: Date.now()
    }
    
    const response = await tools.insertScore(DTO, knex)
    res.send(response)

})

app.get('/auth', (req, res) =>
{
    res.send('hello auth')
})


// LISTEN
app.listen(PORT)
console.log('Server running at http://localhost:' + PORT)