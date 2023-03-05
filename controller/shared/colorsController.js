const colorModel =  require('../../model/shared/colorsModel')

// create a new color
exports.CreateColor = (req,res) => {
    const color = colorModel(req.body);

    color.save((err,data)=>{
        if(err){
            res.status(401).json({
                    message:err.message
            })
        }else{
            res.status(200).json({
                    message:"color created successfully",
                    data:data
            })
        }
    })
}

//get all colors

exports.GetAllColors = (req, res) => {
        colorModel.find((err,data)=>{
                if(err){
                    res.status(401).json({
                        message :err.message
                    })
                }else{
                        res.status(200).json({
                                message:"colors retrieve successfully",
                                data:data
                        });
                }
        })
}

//get color by id
exports.GetColorById = (req, res) => {
        colorModel.findById(req.params.id,(err,data)=>{
            if(err){
                res.status(401).json({
                        message :err.message
                })
            }else{
                res.status(200).json({
                        message: "color retrieve successfully",
                        data:data
                })
            }
        })
}
//update color
exports.UpdateColor = (req, res) => {
        colorModel.findById(req.params.id,req.body,(err,data)=>{
                if (err) {
                        res.status(401).json({
                            message:err.message
                        })
                }else{
                        res.status(200).json({
                            message: "colors Update successfully",
                            data:data
                        })
                }
        })
}

//delete color by id

exports.deleteColor = (req,res)=>{
    colorModel.findByIdAndDelete(req.params.id,(err,data)=>{
        if (err) {
            res.status(401).json({
                message:err.message
            })
    }else{
            res.status(200).json({
                message: "colors Deleted successfully",
                data:data
            })
    }
    })
}
