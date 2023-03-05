const patternModel =  require('../../model/shared/patternModel')

// create a new pattern
exports.CreatePattern = (req,res) => {
    const pattern = patternModel(req.body);

    pattern.save((err,data)=>{
        if(err){
            res.status(401).json({
                    message:err.message
            })
        }else{
            res.status(200).json({
                    message:"pattern created successfully",
                    data:data
            })
        }
    })
}

//get all patterns

exports.GetAllPatterns = (req, res) => {
        patternModel.find((err,data)=>{
                if(err){
                    res.status(401).json({
                        message :err.message
                    })
                }else{
                        res.status(200).json({
                                message:"patterns retrieve successfully",
                                data:data
                        });
                }
        })
}

//get pattern by id
exports.GetPatternById = (req, res) => {
        patternModel.findById(req.params.id,(err,data)=>{
            if(err){
                res.status(401).json({
                        message :err.message
                })
            }else{
                res.status(200).json({
                        message: "pattern retrieve successfully",
                        data:data
                })
            }
        })
}
//update pattern
exports.UpdatePattern = (req, res) => {
        patternModel.findById(req.params.id,req.body,(err,data)=>{
                if (err) {
                        res.status(401).json({
                            message:err.message
                        })
                }else{
                        res.status(200).json({
                            message: "patterns Update successfully",
                            data:data
                        })
                }
        })
}

//delete pattern by id

exports.deletePattern = (req,res)=>{
    patternModel.findByIdAndDelete(req.params.id,(err,data)=>{
        if (err) {
            res.status(401).json({
                message:err.message
            })
    }else{
            res.status(200).json({
                message: "patterns Deleted successfully",
                data:data
            })
    }
    })
}
