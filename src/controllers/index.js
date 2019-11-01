

// lista de productos(14)
const items = [
    { id: 1, name: 'product 01' },
    { id: 2, name: 'product 02' },
    { id: 3, name: 'product 03' }
  ]
const index=(req, res) => {
    res.render('index', {
      title: 'my webstore'
    })
  }

const product=(req, res, next) => {
    res.render('products', {
      title: 'List of product',
      items: items
    })
  }
  const newProduct=(req, res, next) => {

    const { newItem } = req.body
    items.push({
      id:items.length + 1,
      name:newItem
    })
    res.redirect("./products")
    }
  module.exports={
    index:index,
    product,
    newProduct
}