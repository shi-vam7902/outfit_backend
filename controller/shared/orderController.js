const orderModel =  require('../../model/shared/orderModel')

// create a new order
exports.CreateOrder = (req,res) => {
    const order = orderModel(req.body);

    order.save((err,data)=>{
        if(err){
            res.status(401).json({
                    message:err.message
            })
        }else{
            res.status(200).json({
                    message:"Order created successfully",
                    data:data
            })
        }
    })
}

//get all orders

exports.GetAllOrders = (req, res) => {
        orderModel.find((err,data)=>{
                if(err){
                    res.status(401).json({
                        message :err.message
                    })
                }else{
                        res.status(200).json({
                                message:"Orders retrieve successfully",
                                data:data
                        });
                }
        })
}

//get order by id
exports.GetOrderById = (req, res) => {
        orderModel.findById(req.params.id,(err,data)=>{
            if(err){
                res.status(401).json({
                        message :err.message
                })
            }else{
                res.status(200).json({
                        message: "Order retrieve successfully",
                        data:data
                })
            }
        })
}
//update order
exports.UpdateOrder = (req, res) => {
        orderModel.findById(req.params.id,req.body,(err,data)=>{
                if (err) {
                        res.status(401).json({
                            message:err.message
                        })
                }else{
                        res.status(200).json({
                            message: "Orders Update successfully",
                            data:data
                        })
                }
        })
}

//delete order by id

exports.deleteOrder = (req,res)=>{
    orderModel.findByIdAndDelete(req.params.id,(err,data)=>{
        if (err) {
            res.status(401).json({
                message:err.message
            })
    }else{
            res.status(200).json({
                message: "Orders Deleted successfully",
                data:data
            })
    }
    })
}
