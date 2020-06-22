const knex = require ("knex")
const connection = knex({
    client:"pg",
    connection:{
        host: "ruby.db.elephantsql.com",
        port: 5432,
        database: "klvczfqp",
        user: "klvczfqp",
        password: "b6TDe_m1eSbUsX8Gs9oFQhg2jXmhDdij"
        
    },
    useNullAsDefault: true
})
module.exports = connection