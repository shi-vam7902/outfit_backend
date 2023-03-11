const sleeveModel =  require('../../model/shared/sleevesModel')

// create a new sleeve
exports.CreateSleeve = (req,res) => {
    const sleeve = sleeveModel(req.body);

    sleeve.save((err,data)=>{
        if(err){
            res.status(401).json({
                    message:err.message
            })
        }else{
            res.status(200).json({
                    message:"sleeve created successfully",
                    data:data
            })
        }
    })
}

//get all sleeves

exports.GetAllSleeves = (req, res) => {
        sleeveModel.find((err,data)=>{
                if(err){
                    res.status(401).json({
                        message :err.message
                    })
                }else{
                        res.status(200).json({
                                message:"sleeves retrieve successfully",
                                data:data
                        });
                }
        })
}

//get sleeve by id
exports.GetSleeveById = (req, res) => {
        sleeveModel.findById(req.params.id,(err,data)=>{
            if(err){
                res.status(401).json({
                        message :err.message
                })
            }else{
                res.status(200).json({
                        message: "sleeve retrieve successfully",
                        data:data
                })
            }
        })
}
//update sleeve
exports.UpdateSleeve = (req, res) => {
        sleeveModel.findByIdAndUpdate(req.params.id,req.body,(err,data)=>{
                if (err) {
                        res.status(401).json({
                            message:err.message
                        })
                }else{
                        res.status(200).json({
                            message: "sleeves Update successfully",
                            data:data
                        })
                }
        })
}

//delete sleeve by id

exports.deleteSleeve = (req,res)=>{
    sleeveModel.findByIdAndDelete(req.params.id,(err,data)=>{
        if (err) {
            res.status(401).json({
                message:err.message
            })
    }else{
            res.status(200).json({
                message: "sleeves Deleted successfully",
                data:data
            })
    }
    })
}
