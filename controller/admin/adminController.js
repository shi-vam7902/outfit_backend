const adminModel = require('../../model/admin/adminModel');
const bcrypt = require('bcrypt');
const generateToken = require('../../util/token/generateToken')
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
                console.log(token);
                res.status(200).json({
                    message: "Admin Added successfully",
                    message: data,
                    token:token
                })
            }
        }
    })
}
//get admins
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
//get Admin by Id
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
//delete Admin
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
        }
        else {
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
        }
        else {
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
                 
                    const token = generateToken.generateToken(data);
                    res.status(200).json({
                        message: "Admin Login successfully",
                        data: data,
                        token: token
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