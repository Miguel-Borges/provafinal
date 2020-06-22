const connection = require ("../database/connection")
module.exports = {

    async index (req,res){
    const id = Math.floor(Math.random() * (10 - 1 + 1)) + 1
     const frase = await connection("frases").where ("id", id).select("*").first()

         return res.json(frase)
    //console.log(id)

    }
}
