var livro = {titulo : "Senhor dos Aneis", autor : "J.R.R. Tolkien", anoPublicação : "1840"}
const livroInfos = Object.entries(livro);

livroInfos.forEach(info => {
    console.log(`${info[0].toUpperCase()} - ${info[1]}`)
})