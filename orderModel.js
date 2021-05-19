import mongoose from 'mongoose';
const orderSchema= mongoose.Schema({
    side:{
        type:String,
        required:true
    },

    price:{
        type:float,
        required:true

    }
})

const Order = mongoose.model('Order', orderSchema)
