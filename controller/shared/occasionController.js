const occasionModel =  require('../../model/shared/occasionModel')

// create a new occasion
exports.CreateOccasion = (req,res) => {
    const occasion = occasionModel(req.body);

    occasion.save((err,data)=>{
        if(err){
            res.status(401).json({
                    message:err.message
            })
        }else{
            res.status(200).json({
                    message:"occasion created successfully",
                    data:data
            })
        }
    })
}

//get all occasions

exports.GetAllOccasions = (req, res) => {
        occasionModel.find((err,data)=>{
                if(err){
                    res.status(401).json({
                        message :err.message
                    })
                }else{
                        res.status(200).json({
                                message:"occasions retrieve successfully",
                                data:data
                        });
                }
        })
}

//get occasion by id
exports.GetOccasionById = (req, res) => {
        occasionModel.findById(req.params.id,(err,data)=>{
            if(err){
                res.status(401).json({
                        message :err.message
                })
            }else{
                res.status(200).json({
                        message: "occasion retrieve successfully",
                        data:data
                })
            }
        })
}
//update occasion
exports.UpdateOccasion = (req, res) => {
        occasionModel.findByIdAndUpdate(req.params.id,req.body,(err,data)=>{
                if (err) {
                        res.status(401).json({
                            message:err.message
                        })
                }else{
                        res.status(200).json({
                            message: "occasions Update successfully",
                            data:data
                        })
                }
        })
}

//delete occasion by id

exports.deleteOccasion = (req,res)=>{
    occasionModel.findByIdAndDelete(req.params.id,(err,data)=>{
        if (err) {
            res.status(401).json({
                message:err.message
            })
    }else{
            res.status(200).json({
                message: "occasions Deleted successfully",
                data:data
            })
    }
    })
}
