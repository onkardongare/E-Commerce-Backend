const express = require('express');
const {Product} = require('../model/product')


exports.createProduct = async(req,res)=>{

    const product = new Product(req.body);

    try{
        const doc = await product.save();
        res.status(200).json(doc);

    }catch(err){
        res.status(400).json(err);
    }
}

exports.fetchAllProduct = async(req,res)=>{

 let query = Product.find({});
 let totalProductsQuery = Product.find({});

 if(req.query.category){
    query = query.find({category:req.query.category})
 }

 if(req.query.brand){
    query = query.find({brand:req.query.brand})
 }

 if(req.query._sort && req.query._order){
    query = query.sort({[req.query._sort]:req.query._order})

 }
 if(req.query._page && req.query._limit){
    const pageSize = req.query._limit;
    const page = req.query._page;
    query =  query.skip(pageSize*(page - 1)).limit(pageSize);
 }
    try{
        const doc = await query;
        res.status(200).json(doc);

    }catch(err){
        res.status(400).json(err);
    }
}