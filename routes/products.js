const Router = require('express').Router()
const {allProducts, addProduct, singelProduct} = require('../controllers/products')
const productModel = require('../models/products')

Router.get('/', (req, res) => {
  res.render('addproduct', {product: ''})
})
Router.get('/list', allProducts)
Router.get('/:id', singelProduct)

Router.get('/delete/:id', (req, res) => {
  productModel.findOneAndRemove({_id: req.params.id}, (err) =>{
    if(!err)
      res.redirect('/products/list')
    else
      console.log(`Error occured: ${err}`)
  })
})

Router.post('/', addProduct)

module.exports  = Router;