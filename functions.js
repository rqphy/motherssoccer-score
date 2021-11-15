require('dotenv').config()

const auth = (apiKey) =>
{
    return apiKey === process.env.API_KEY
}

module.exports.auth = auth