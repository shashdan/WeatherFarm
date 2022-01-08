const express = require("express")

const port = 3000
const app = express()
const fs = require('fs')

app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.get("/advisory", function(req, res){
})

app.post("/", function(req, res){
    const city = req.body.city
    console.log(city)
    //res.render("Advisory.ejs")
})

app.listen(port)

