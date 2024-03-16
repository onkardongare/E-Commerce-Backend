const {Category} = require('../model/category');

exports.fetchCategory = async(req,res) =>{
    try{
        const doc = await Category.find().exec();
        res.status(200).json(doc);
    }catch(err){
        res.status(200).json(err);
    }
}

exports.createCategory = async(req,res) =>{
    const category = new Category(req.body);
    try{
        const doc = category.save();
        res.satus(201).json(doc);
    }catch(err){
        res.status(400).json(err);
    }
}

