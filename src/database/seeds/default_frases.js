 module.exports = {
    async  seed (knex){
    await knex("frases").insert([

        {frase:"Os problemas são oportunidades para se mostrar o que sabe", autor:"Duke Ellington"},
        {frase:"Nossos fracassos, às vezes, são mais frutíferos do que os êxitos", autor:"Henry Ford"},
        {frase:"Tente de novo. Fracasse de novo. Mas fracasse melhor", autor:"Samuel Beckett"},
        {frase:"É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo", autor:"Sócrates"},
        {frase:"O verdadeiro heroísmo consiste em persistir por mais um momento, quando tudo parece perdido", autor:"W. F. Grenfel"},
        {frase:"Cada cliente é como se fosse primeiro e único", autor:"Norman Bawes"},
        {frase:"Mesmo que já tenhas feito uma longa caminhada, há sempre um novo caminho a fazer", autor:"Santo Agostinho"},
        {frase:"Vender é construir uma ponte entre você e seu cliente e fazê-lo atravessar para o seu lado", autor:"Ciclo dos Profissionais de Venda"},
        {frase:"Na prosperidade, nossos amigos nos conhecem; na adversidade, nós é que conhecemos nossos amigos", autor:"Churton Collins"},
        {frase:"Nada acontece a menos que sonhemos antes", autor:"Carl Sandburg"}

    ])
    
} }
    