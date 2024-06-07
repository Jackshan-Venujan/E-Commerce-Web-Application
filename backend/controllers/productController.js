const ProductModel = require('../models/productModel');

//Get Products API - /api/v1/product
exports.getProducts = async(req,res,next) => {
    // to retrive all data leave empty else have ti be specific enter name
    const products = await ProductModel.find({});  


    res.json({
        success: true,
        products
    })
}


//Get Single Products API - /api/v1/product/:id
exports.getSingleProduct = async(req,res,next) => {
    try{
        //console.log(req.params.id,'ID')
        const product = await ProductModel.findById(req.params.id);
        res.json({
            success: true,
            product
    })

    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Unable to find the product, Check the product ID'                       //error.message
    })
    }
    
    
}