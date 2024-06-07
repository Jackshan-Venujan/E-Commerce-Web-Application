const ProductModel = require('../models/productModel');

exports.getProducts = async(req,res,next) => {
    // to retrive all data leave empty else have ti be specific enter name
    const products = await ProductModel.find({name:'something'});  


    res.json({
        success: true,
        products
    })
}

exports.getSingleProduct = (req,res,next) => {
    res.json({
        success: true,
        message: 'Get single products working!'
    })
}