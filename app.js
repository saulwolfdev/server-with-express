const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const app = express()
const routes = require("./routes/index")

//SETTINGS
app.set("port", process.env.PORT || 3000)

//path lo usamos para decirle
//a node donde esta la vistas con "__dirname"
//path.join= une direcctorios

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")



//MIDDLEWARES
app.use((req, res, next) => {
    console.log(`${req.url} -- ${req.method}`)
    next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
//ROUTES

app.use(routes)

//FILES STATICS

app.use(express.static(path.join(__dirname, "public")))


//START SERVER
app.listen(app.get("port"), () => {
    console.log("Server port OK", app.get("port"))
})