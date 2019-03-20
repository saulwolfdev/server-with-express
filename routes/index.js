const express = require('express')
// necesitamos usar un enrutador por eso vamos a
// usar un Objeto que nos ayude a defenir nuestras
// rutas express.Router()(7.1)
const router = express.Router()

//
// te voy a decir router cuando tengas la ruta inicial de mi aplicacion
// me vas responder con una funcion(12) cuando me respondas
// vas a usar 2 objetos una que viene del servidor(res) y la otras del navegador(req)!
// router.get("/", (req, res) => {
//     res.end("Hello Word this routes")
// })
// rederizamos un archico que se convertira en un html(13)

//importamos la logica por separado(16)
const indexControler=require("../controllers/index")
router.get('/',indexControler.index)


router.get('/products',indexControler.product)
// agregamos una nueva ruta que nos trae y recibimos del servidor(15)
router.post('/new-product',indexControler.newProduct)

// PERO AUNQUE ES MUY LEGIBLE, CUANDO QUERAMOS AGREGAR MAS RUTAS SE VA VOLVER
// POCO MANEJABLE VAMOSA SEPARAR LA LOGICA EN LA CARPETA CONTROLLERS
module.exports = router
