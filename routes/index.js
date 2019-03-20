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
    title: 'my webstore'
  })
})
// lista de productos(14)
const items = [
  { id: 1, name: 'product 01' },
  { id: 2, name: 'product 02' },
  { id: 3, name: 'product 03' },
  { id: 4, name: 'product 04' },
  { id: 5, name: 'product 05' },
  { id: 6, name: 'product 06' },
  { id: 7, name: 'product 07' }
]
router.get('/products', (req, res, next) => {
  res.render('products', {
    title: 'List of product',
    items: items
  })
})
// agregamos una nueva ruta que nos trae y recibimos del servidor(15)
router.post('/new-product', (req, res, next) => {

  console.log(req.body)
  // const newItem=req.body.newItem
  //  items.push({
  //    id:items.length+1,
  //    name: newItem
  //  })
//una vez alamacenado respndemos algo al navegador.(16)
//  res.redirect("/products")
})

// PERO AUNQUE ES MUY LEGIBLE, CUANDO QUERAMOS AGREGAR MAS RUTAS SE VA VOLVER
// POCO MANEJABLE VAMOSA SEPARAR LA LOGICA EN LA CARPETA CONTROLLERS
module.exports = router
