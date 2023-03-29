const adminModel = require('../../model/admin/adminModel');
const bcrypt = require('bcrypt');
const generateToken = require('../../util/token/generateToken');
const authTokenModel = require('../../model/authTokenModel');
const generatePublicKey = require('../../util/generatePublicKey')

//add admin
exports.AddAdmin = (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const adminObj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,
        role: req.body.role,
        status: "active"
    };
    const admin = adminModel(adminObj);

    admin.save((err, data) => {
        if (err) {
            res.status(400).json({
                message: err.message
            })
        } else {
            if (data != null || data != undefined) {
                const token = generateToken.generateToken(data);
                const obj = {
                    token: token,
                    user: data._id,
                    secret: "secret",
                    publicKey: generatePublicKey.generatePublicKey(16)

                }
                const tokenData = new authTokenModel(obj);
                tokenData.save((err, data) => {
                    if (err) {
                        res.status(500).json({
                            msg: "Error in Adding Admin"
                        })
                    } else {

                        res.status(201).json({
                            data: data,
                            msg: "Data Added Successfully..",

                        })
                    }
                })
            }
        }
    })
}
//Get admins
exports.getAllAdmin = (req, res) => {
    adminModel.find().populate("role").exec((err, data) => {
        if (err) {
            res.status(400).json({
                message: err.message

            })
        } else {
            res.status(200).json({
                message: "Admin Retrieve successfully",
                data: data
            })
        }
    })
}
//Get Admin by Id
exports.getAdminById = (req, res) => {
    adminModel.findById(req.params.id).populate("role").exec((err, data) => {
        if (err) {
            res.status(400).json({
                message: err.message

            })
        } else {
            res.status(200).json({
                message: "Admin Retrieve successfully",
                data: data
            })
        }
    })
}
//Delete Admin
exports.deleteAdmin = (req, res) => {
    adminModel.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            res.status(400).json({
                message: err.message

            })
        } else {
            res.status(200).json({
                message: "Admin Deleted successfully",
                data: data
            })
        }
    })
}
//Block Admin
exports.BlockAdmin = (req, res) => {
    adminModel.findByIdAndUpdate(req.params.id, { status: "blocked" }, (err, data) => {
        if (err) {
            return res.status(400).json({
                message: err.message,

            })
        } else {
            return res.status(200).json({
                message: "Admin blocked successfully",

            })
        }
    })
}
//update Admin
exports.UpdateAdmin = (req, res) => {
    adminModel.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) {
            return res.status(400).json({
                message: err.message,

            })
        } else {
            return res.status(200).json({
                message: "Admin Update successfully",

            })
        }
    })
}
//login Admin
exports.LoginAdmin = (req, res) => {
    adminModel.findOne({ email: req.body.email }).populate("role").exec((err, data) => {
        if (err) {
            return res.status(400).json({
                message: err.message,

            })
        } else {
            if (data) {
                if (bcrypt.compareSync(req.body.password, data.password)) {

                    const refreshToken = generateToken.generateToken(data);

                    //Get The Token Data
                    authTokenModel.findOne({ user: data._id }, (err, data) => {

                        if (err) {
                            return res.status(400).json({
                                message: err.message,
                            })
                        } else {
                            //Update Refresh Token
                            authTokenModel.findByIdAndUpdate(data._id, { token: refreshToken }, (err, data) => {
                                if (err) {
                                    return res.status(400).json({
                                        message: err.message,
                                    })
                                } else {
                                    return res.status(200).json({
                                        message: "Admin Login successfully",
                                        token:refreshToken
                                       
                                    })
                                }
                            })

                        }
                    })
                }
                else {
                    return res.status(400).json({
                        message: "Invalid Credentials",

                    })
                }
            } else {
                return res.status(400).json({
                    message: "Invalid Credentials",

                })
            }
        }
    })
}