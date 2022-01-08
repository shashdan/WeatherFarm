const express = require("express")
const port = 3000
const app = express()
const fs = require('fs')
//const userRouter = require("./routes/users")

//app.use("/users", userRouter)

app.set('view engine', 'ejs')
app.use(express.static("public"))
//app.use(express.urlencoded({ extended: true }))

// app.get("/", function (req, res) {
//     res.render("index")
// })

app.get("/tips", function (req, res) {
    res.render("TodaysTips.ejs")
})

app.listen(port)

