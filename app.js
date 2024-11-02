const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors({origin: "*"}))

const rotaLivro = require("./routes/livro")
const rotaFavorito = require("./routes/favorito")
const port = 8000

app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavorito)

app.listen(port, ()=>{
    console.log(`porta ${port} em funcionamento`)
})