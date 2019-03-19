const express = require("express")
//definimos las vistas
const path = require("path")
//usamos este middlewares(10)
const bodyParser = require("body-parser")
//llamamos a expres
const app = express()
//importamos el objeto enrrutador de la carpeta routes (9)
const routes = require("./routes/index")

//SETTINGS(1) creamos un puerto por defecto
app.set("port", process.env.PORT || 3000)

//configuramos las vistas(3)
//path lo usamos para decirle
//a node donde esta la vistas con "__dirname"
//path.join= une direcctorios
app.set("views", path.join(__dirname, "views"))

//usamos el motor de plantillas que instalamos (4)ejs
app.set("view engine", "ejs")



//MIDDLEWARES solo lo usamos atra vez de app (5)
//tenemos que procesar las urls
app.use((req, res, next) => {
    //pedimos al url y el metodo con ${req.url} -- ${req.method}(6)
    console.log(`${req.url} -- ${req.method}`)
    next()
})
//usamos bodyparser(11) porque necesitamos entender la informacion que viene del
//navegador usamos sus metodos
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
//ROUTES
//definimos las rutas porque hemos creado una carpeta llamada routes (7)(routes)
//usamos las rutas(8)
app.use(routes)

//FILES STATICS
//le vamos a decir express que use un metodo llamado static y le diremos
//donde estan los archivos estaticos en la carpeta public.
app.use(express.static(path.join(__dirname, "public")))


//START SERVER(2)tenemos nuestro servidor definido en un puerto

app.listen(app.get("port"), () => {
    console.log("Server port OK", app.get("port"))
})