const materialModel =  require('../../model/shared/materialModel')

// create a new material
exports.CreateMaterial = (req,res) => {
    const material = materialModel(req.body);

    material.save((err,data)=>{
        if(err){
            res.status(401).json({
                    message:err.message
            })
        }else{
            res.status(200).json({
                    message:"material created successfully",
                    data:data
            })
        }
    })
}

//get all materials

exports.GetAllMaterials = (req, res) => {
        materialModel.find((err,data)=>{
                if(err){
                    res.status(401).json({
                        message :err.message
                    })
                }else{
                        res.status(200).json({
                                message:"materials retrieve successfully",
                                data:data
                        });
                }
        })
}

//get material by id
exports.GetMaterialById = (req, res) => {
        materialModel.findById(req.params.id,(err,data)=>{
            if(err){
                res.status(401).json({
                        message :err.message
                })
            }else{
                res.status(200).json({
                        message: "material retrieve successfully",
                        data:data
                })
            }
        })
}
//update material
exports.UpdateMaterial = (req, res) => {
        materialModel.findByIdAndUpdate(req.params.id,req.body,(err,data)=>{
                if (err) {
                        res.status(401).json({
                            message:err.message
                        })
                }else{
                        res.status(200).json({
                            message: "materials Update successfully",
                            data:data
                        })
                }
        })
}

//delete material by id

exports.deleteMaterial = (req,res)=>{
    materialModel.findByIdAndDelete(req.params.id,(err,data)=>{
        if (err) {
            res.status(401).json({
                message:err.message
            })
    }else{
            res.status(200).json({
                message: "materials Deleted successfully",
                data:data
            })
    }
    })
}
