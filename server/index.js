const express = require("express")
const cors= require("cors")
const path = require("path")

const ctrl = require("./controllers/controller")

const app = express()

app.use(express.static("public"))

app.use(cors())

app.use(express.json())

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'))
})

app.get('/manitou-springs', ctrl.getManitou)
app.get('/belton-lake', ctrl.getBelton)
app.get('/samana', ctrl.getSamana)
app.get('/loco', ctrl.getLoco)
app.post('/contact', ctrl.postContact)

const port = process.env.PORT || 4500

app.listen(port, () => console.log(`Server running on ${port}`))