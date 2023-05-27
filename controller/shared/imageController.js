const multer = require('multer')
const path = require('path')
const imageModel = require('../../model/shared/imageModel')
const googleController = require('../../controller/services/googleController')
// //storage
const storage = multer.diskStorage({

    //call back function
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

// //save 
// //uploads
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 9000000
    }
}).single('file')

// exports.myData = [];

exports.uploadImage = async (req, res) => {

    upload(req, res, async (err) => {

        if (err) {
            res.status(400).json({ message: err.message })
        } else {
            if (req.file == undefined) {

                res.status(400).json({ message: "No Image selected" })
            } else {
                if (req.file.size > 5000000) {
                    return res.status(402).json({
                        error: "Image Size Is to Large",
                    });
                } else {

                    var x = await googleController.uploadFile(req.file.path);
                    if (x != undefined || x != null) {
                        const upload1 = new imageModel({
                            imageName: req.file.originalname,
                            imageSize: req.file.size,
                            imageType: req.file.mimetype,
                            googleDriveId: x,
                            statusId: "64045642c5c8bb9b447992d1"
                        })
                        upload1.save((err, data) => {
                            if (err) {
                                res.status(400).json({
                                    msg: "Error in saving Image"
                                })
                            } else {
                                res.status(200).json({
                                    msg: "Image uploaded successfully",
                                })
                            }
                        })
                    }

                }
            }
        }
    })
}