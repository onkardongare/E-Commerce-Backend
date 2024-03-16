const express = require('express')
const {createProduct,fetchAllProduct} = require('../controller/product');


const router = express.Router();

router
      .get('/',fetchAllProduct)
      .post('/',createProduct);

exports.router = router