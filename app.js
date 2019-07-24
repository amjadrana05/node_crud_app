const express = require('express')
const app = express()
const path = require('path')

//db connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crudapp', {useNewUrlParser: true});


//set the view engine as ejs
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

//Route
const productsRouter = require('./routes/products')
app.use('/products', productsRouter)


app.listen(3000, ()=>{
  console.log(`App runging in port http://localhost:3000/products`)
})