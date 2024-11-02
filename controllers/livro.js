const { post } = require("../routes/livro")
const { getTodosLivros, getLivroPorId, inserirLivro, editarLivro, deleteLivroPorId} = require("../service/livro")

function getLivros (req, res) {
    try{
        const livros = getTodosLivros()
        res.send(livros)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function getLivro (req, res) {
    try{
        const id = req.params.id 

        if(id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        }else{
            res.status(422)
            res.send("ID inválido. ID tipo NÚMERO")
        }

    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function postLivro (req, res) {
    try {
        const novoLivro = req.body

        if(req.body.id && req.body.nome){
            inserirLivro(novoLivro)
            res.status(201)
            res.send("Livro inserido com sucesso")
        }else{
            res.status(422)
            res.send("E necessário de um: ID e NOME.")
        }

    }catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro (req, res) {
    try {
        const id = req.params.id
        const body = req.body

        if(req.body.id && req.body.nome){
            editarLivro(body, id)
            res.send("Livro editado com sucesso")
        }else{
            res.status(422)
            res.send("ID inválido. ID tipo NÚMERO")
        }

    }catch(error) {
        res.status(500)
        res.send(error.message)    
    }
}

function deleteLivro (req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deleteLivroPorId(id)
            res.send("Livro deletado com sucesso")
        }else{
            res.status(422)
            res.send("E necessário de um ID.")
        }
        
    }catch(error) {
        res.status(500)
        res.send(error.message)    
    }
}

module.exports ={
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}