require('dotenv').config()

const auth = (apiKey) =>
{
    return apiKey === process.env.API_KEY
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

module.exports.auth = auth
module.exports.insertScore = insertScore