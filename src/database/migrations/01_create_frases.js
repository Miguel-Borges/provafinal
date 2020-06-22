exports.up = function(knex){
    
    return knex.schema.createTable("frases" , table => {

        table.increments ("id").primary()
        table.string ("autor").notNullable()
        table.string ("frase").notNullable()
    
    })
}
exports.down = function(knex){
    return knex.schema.dropTable("frases")
}