const fs = require("fs")

function getTodosFavoritos () {
    return  JSON.parse(fs.readFileSync("favoritos.json"))
}

function deleteFavoritoPorId (id) {
    const livros = JSON.parse(fs.readFileSync("favoritos.json"))
    const livroFiltrado = livros.filter(livro => livro.id !== id)

    fs.writeFileSync("favoritos.json", JSON.stringify(livroFiltrado))
}

function inserirFavorito (id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    const livroInserido = livros.find(livro => livro.id === id)
    const favoritosAtualizado = [...favoritos, livroInserido]

    fs.writeFileSync("favoritos.json", JSON.stringify(favoritosAtualizado))
}

module.exports = {
    getTodosFavoritos,
    deleteFavoritoPorId,
    inserirFavorito
}