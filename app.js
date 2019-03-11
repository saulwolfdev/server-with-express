const express = require("express")
const path = require("path")
const app = express()


//SETTINGS
app.set("port", process.env.PORT || 3000)

//path lo usamos para decirle
//a node donde esta la vistas con "__dirname"
//path.join= une direcctorios

app.set("views", path.join(__dirname, "views"))
app.set("view engine","ejs")



//MIDDLEWARES



//ROUTES



//FILES STATICS




//START SERVER
app.listen(app.get("port"), () => {
    console.log("Server port OK", app.get("port"))
})