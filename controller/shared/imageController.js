const multer = require('multer')
const path = require('path')
const imageModel = require('../../model/shared/imageModel')

//storage
const storage = multer.diskStorage({
    destination: "./uploads",

    //call back function
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

//save 
//uploads
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 9000000
    }
}).single('File')

exports.myData = [];

exports.uploadImage = (req, res) => {
    upload(req, res, (err) => {
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
                    // var x = googleController.uploadFile(req.file.path);
                    if (x != undefined || x != null) {
                        return res.status(200).json({
                            message: "Image uploaded successfully",
                            file: x
                        });
                    }
                    let abspath = path.resolve('../uploads', req.file.originalname);
                    const upload1 = new imageModel({
                        imageName: req.file.originalname,
                        imageUrl: abspath,
                        imageSize: req.file.size,
                        imageType: req.file.mimetype
                    })
                    upload1.save((err, data) => {
                        if (err) {
                            res.status(400).json({
                                msg: "err in saving file"
                            })
                        } else {
                            res.status(200).json({
                                msg: "File uploaded successfully",
                                file: `uploads/${req.file.originalname}`
                            })
                        }
                    })
                }
            }
        }
    })
}