const {Client} = require('pg')

const client = new Client({
    connectionString: ProcessingInstruction.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
})

module.exports = Client;
