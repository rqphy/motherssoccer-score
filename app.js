const express = require('express')
const app = express()

const knex = require('./database');
const tools = require('./functions')

const path = require('path')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000



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

app.use('/:apiKey/new', tools.validateName)

// ROUTE
app.get('/', (req, res) =>
{
    res.writeHead(302, {'Location': 'https://github.com/rqphy/motherssoccer-score'})
    res.end()
})

app.post('/:apiKey/new', async (req, res) =>
{
    const DTO = {
        name: req.body.name,
        score: req.body.score,
        date: Date.now()
    }
    
    const response = await tools.insertScore(DTO, knex)
    res.send(response[0].affectedRows ? 'created' : 'Error')

})

app.get('/:apiKey/list/:limit?', async (req, res) =>
{
    const response = await tools.getBestScores(req.params.limit ?? 5, knex)
    res.send(response[0])
})


// LISTEN
app.listen(PORT, () =>
{
    console.log('Server running at http://localhost:' + PORT)
})