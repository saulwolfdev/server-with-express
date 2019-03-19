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
router.get('/', (req, res) => {
  res.render('index', {
    title: "my webstore"
  })
})
router.get('/products', (req, res, next) => {
  res.render('products', {
    title: "List of product"
  })
})


// PERO AUNQUE ES MUY LEGIBLE, CUANDO QUERAMOS AGREGAR MAS RUTAS SE VA VOLVER
// POCO MANEJABLE VAMOSA SEPARAR LA LOGICA EN LA CARPETA CONTROLLERS
module.exports = router