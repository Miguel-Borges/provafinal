const path = require ("path")
module.exports = {
    client:"pg",
    connection:{
        host: "ruby.db.elephantsql.com",
        port: 5432,
        database: "klvczfqp",
        user: "klvczfqp",
        password: "b6TDe_m1eSbUsX8Gs9oFQhg2jXmhDdij"
        
    },
    migrations:{
        directory : path.resolve(__dirname,"src","database","migrations")
    },
        seeds : {directory: path.resolve(__dirname,"src","database","seeds")},
    useNullAsDefault: true
}
