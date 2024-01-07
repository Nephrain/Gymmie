const { Pool } = require("pg")
const pool = new Pool({
    host: "db_c",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "gymmie"
})

module.exports = pool