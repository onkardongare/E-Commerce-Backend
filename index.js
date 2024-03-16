const express = require('express');
const ProductRouter = require('./routes/product');
const CategoryRouter = require('./routes/category');
const BrandRouter = require('./routes/brand');
const mongoose  = require('mongoose')
const server = express();

main().catch(err => console.log(err))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    console.log('database connected')
}

server.use(express.json()); // to parse req.body

server.use('/product',ProductRouter.router);
server.use('/category',CategoryRouter.router);
server.use('/brand',BrandRouter.router)

server.listen(8080,()=>{
    console.log("server stated")
})