import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    unit: {
        type: [Number], 
        required: true
    },
    images: {
        type: Array, 
        required: true
    },
    date:{
        type:Number,
        required:true
    }
},{timestamps:true})


const  productModel = mongoose.model('product', productSchema);
export  default productModel;
