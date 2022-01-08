const express = require("express")
const port = 3000
const app = express()
const fs = require('fs')
//const userRouter = require("./routes/users")

//app.use("/users", userRouter)

app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    //res.download('second.js')
    console.log(Date())
    console.log("Server is running on port", port)
    res.send("Hi")
    //res.render("contact.html", {text: 'Hello'})

})

app.listen(port)

