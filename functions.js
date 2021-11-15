require('dotenv').config()

const auth = (apiKey) =>
{
    return apiKey === process.env.API_KEY
}

const validateName = (req, res, next) =>
{
    const { name } = req.body
    const regex = new RegExp(/[a-zA-Z]/)

    if(name && regex.test(name))
    {
        next()
    } else
    {
        res.status(406).send({ msg: 'Inappropriate name' })
    }
}

const insertScore = async (DTO, knex) =>
{
    const columns = Object.keys(DTO);
    const rows = Object.values(DTO);

    const sqlQuery = `
        INSERT INTO scores (${columns.join(',')})
        VALUES (${rows.map(value => `'${value}'`).join(",")})
    `;

    let request;
    try {
        request = await knex.raw(sqlQuery);
    } catch (error) {
        console.error('error : ', error);
        return false;
    }

    return request

}

const getBestScores = async (limit, knex) =>
{
    const sqlQuery = `
        SELECT name, score
        FROM scores
        ORDER BY score DESC
        LIMIT ${limit}
    `

    let request
    try
    {
        request = await knex.raw(sqlQuery)
    } catch (error)
    {
        console.error('error: ', error)
        return false
    }

    return request
}

module.exports.validateName = validateName
module.exports.auth = auth
module.exports.insertScore = insertScore
module.exports.getBestScores = getBestScores