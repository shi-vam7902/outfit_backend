const styleModel =  require('../../model/shared/styleModel')

// create a new style
exports.CreateStyle = (req,res) => {
    const style = styleModel(req.body);

    style.save((err,data)=>{
        if(err){
            res.status(401).json({
                    message:err.message
            })
        }else{
            res.status(200).json({
                    message:"style created successfully",
                    data:data
            })
        }
    })
}

//get all styles

exports.GetAllStyles = (req, res) => {
        styleModel.find((err,data)=>{
                if(err){
                    res.status(401).json({
                        message :err.message
                    })
                }else{
                        res.status(200).json({
                                message:"styles retrieve successfully",
                                data:data
                        });
                }
        })
}

//get style by id
exports.GetStyleById = (req, res) => {
        styleModel.findById(req.params.id,(err,data)=>{
            if(err){
                res.status(401).json({
                        message :err.message
                })
            }else{
                res.status(200).json({
                        message: "style retrieve successfully",
                        data:data
                })
            }
        })
}
//update style
exports.UpdateStyle = (req, res) => {
        styleModel.findById(req.params.id,req.body,(err,data)=>{
                if (err) {
                        res.status(401).json({
                            message:err.message
                        })
                }else{
                        res.status(200).json({
                            message: "styles Update successfully",
                            data:data
                        })
                }
        })
}

//delete style by id

exports.deleteStyle = (req,res)=>{
    styleModel.findByIdAndDelete(req.params.id,(err,data)=>{
        if (err) {
            res.status(401).json({
                message:err.message
            })
    }else{
            res.status(200).json({
                message: "styles Deleted successfully",
                data:data
            })
    }
    })
}
