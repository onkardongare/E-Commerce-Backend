const express =require('express');
const router = express.Router();
const {createBrand,fetchBrand} = require('../controller/brand');

router.get('/',fetchBrand)
      .post('/',createBrand);

exports.router = router;