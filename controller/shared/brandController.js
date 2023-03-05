const brandModel =  require('../../model/shared/brandModel')

// create a new brand
exports.CreateBrand = (req,res) => {
    const brand = brandModel(req.body);

    brand.save((err,data)=>{
        if(err){
            res.status(401).json({
                    message:err.message
            })
        }else{
            res.status(200).json({
                    message:"brand created successfully",
                    data:data
            })
        }
    })
}

//get all brands

exports.GetAllBrands = (req, res) => {
        brandModel.find((err,data)=>{
                if(err){
                    res.status(401).json({
                        message :err.message
                    })
                }else{
                        res.status(200).json({
                                message:"brands retrieve successfully",
                                data:data
                        });
                }
        })
}

//get brand by id
exports.GetBrandById = (req, res) => {
        brandModel.findById(req.params.id,(err,data)=>{
            if(err){
                res.status(401).json({
                        message :err.message
                })
            }else{
                res.status(200).json({
                        message: "brand retrieve successfully",
                        data:data
                })
            }
        })
}
//update brand
exports.UpdateBrand = (req, res) => {
        brandModel.findById(req.params.id,req.body,(err,data)=>{
                if (err) {
                        res.status(401).json({
                            message:err.message
                        })
                }else{
                        res.status(200).json({
                            message: "brands Update successfully",
                            data:data
                        })
                }
        })
}

//delete brand by id

exports.deleteBrand = (req,res)=>{
    brandModel.findByIdAndDelete(req.params.id,(err,data)=>{
        if (err) {
            res.status(401).json({
                message:err.message
            })
    }else{
            res.status(200).json({
                message: "brands Deleted successfully",
                data:data
            })
    }
    })
}
