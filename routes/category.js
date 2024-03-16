const express = require('express');
const {createCategory,fetchCategory} = require('../controller/category');
const router =  express.Router();

router.get('/',fetchCategory)
      .post('/',createCategory);

exports.router = router;