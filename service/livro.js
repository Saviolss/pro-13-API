const fs = require("fs")

function getTodosLivros () {
    return  JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId (id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livrosFiltrados = livros.filter(livro => livro.id === id)[0]
    return livrosFiltrados
}

function inserirLivro (novoLivro) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const listaAtualizada = [...livros, novoLivro]
    fs.writeFileSync("livros.json", JSON.stringify(listaAtualizada))
}

function editarLivro (modificacoes, id) {
    let livrosAtualizados = JSON.parse(fs.readFileSync("livros.json"))
    const indice = livrosAtualizados.findIndex(livro => livro.id === id)
    const livroEditado = {...livrosAtualizados[indice], ...modificacoes} 
    livrosAtualizados[indice] = livroEditado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtualizados))
}

function deleteLivroPorId (id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrado = livros.filter(livro => livro.id !== id)
    fs.writeFileSync("livros.json", JSON.stringify(livroFiltrado))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    deleteLivroPorId,
    inserirLivro,
    editarLivro
}