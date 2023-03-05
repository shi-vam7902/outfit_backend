const sizeModel = require('../../model/shared/sizeModel')

//create Size
exports.createSize = (req,res)=>{

        const size = sizeModel(req.body)
    size.save((err,data)=>{
        if(err){
            res.status(400).json({
                msg:'Err in Create Size'
            })
        }else{
            res.status(201).json({
                msg:'Size Created',
                data:data
            })
        }
    })
}
//get All Size
exports.getAllSize = (req, res) => {
    sizeModel.find((err, data) => {
        if (err) {
            res.status(500).json({
                msg: "Data Err.."
            })
        } else {
            res.status(201).json({
                data: data,
                msg: "Size retrieved successfully"
            })
        }
    })
}
//Delete Size
exports.deleteSize = (req, res) => {
    const id = req.params.id;
    sizeModel.findByIdAndDelete((err, data) => {
        if (err) {
            res.status(500).json({
                msg: "Data Err.."
            })
        } else {
            if (data != null || data !== undefined) {
                res.status(200).json({
                    data: data,
                    msg: "size delete successfully"
                })
            } else {
                res.status(404).json({
                    msg: "Size Not Found.."
                })
            }
        }
    })
};
//Update Size

exports.updateSize = (req, res) => {
    const id = req.params.id;
    sizeModel.findOneAndUpdate(id, req.body, (err, data) => {
        if (err) {
            res.status(500).json({
                msg: "Size Updating Error.."
            })
        } else {
            if (data != null || data != undefined) {
                res.status(200).json({
                    data: data,
                    msg: "Size Updated Successfully.."
                })
            } else {
                res.status(404).json({
                    msg: "Size Not Found.."
                })
            }
        }

    });
};

//GetSizeById

exports.getSizeById = (req, res) => {
    const id = req.params.id
    sizeModel.findById(id, (err, data) => {
        if (err) {

            res.status(500).json({
                msg: "Err Faceting Data"
            })
        } else {
            if (data != null || data != undefined) {
                res.status(200).json({
                    data: data,
                    msg: "Size Faceting Successfully.."
                })
            } else {
                res.status(404).json({
                    msg: "Size Not Found.."
                })
            }
        }
    })
}