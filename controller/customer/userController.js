const userSchema = require("../../model/customer/userModel");
const generateToken = require("../../util/token/generateToken");
const mailer = require('../../util/mailer');
const bcrypt = require('bcrypt');
const authTokenModel = require("../../model/authTokenModel");
const { generatePublicKey } = require("../../util/generatePublicKey");
exports.addUser = (req, res) => {

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  const userObj = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hash,
    roleId: req.body.roleId,
    status: req.body.statusId,
    phoneNo: req.body.phoneNo,
    gender: req.body.gender,
    addressId: req.body.addressId,
  };
  const users = new userSchema(userObj);

  users.save((err, data) => {
    if (err) {
      res.status(401).json({
        message: "something went wrong",
        error: err,
      });
    } else {
      if (data != null || data != undefined) {

        const token = generateToken.generateToken(data);
        mailer.sendMail(data.email);
        const obj = {
          token: token,
          user: data._id,
          secret: "secret",
          publicKey: generatePublicKey(16)

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
                  msg: "User Added Successfully..",

              })
          }
      })
        
      }
    }
  });
};
exports.getAllUsers = (req, res) => {
  userSchema.find((err, data) => {
    if (err) {
      res.status(400).json({
        message: "something went wrong",
      });
    } else {
      console.log(data);
      res.status(200).json({
        message: "Users Retrived",
        data: data,
      });
    }
  });
};

exports.deleteUserById = (req, res) => {
  console.log("indelete by id");
  
  console.log(req.params.id);

  userSchema.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error Deleting Data",
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          data: data,
          message: "User Deleted Succesfully",
        });
      } else {
        res.status(404).json({
          message: "User not Found",
        });
      }
    }
  });
};

exports.getUserById = (req, res) => {

  console.log(req.params.id);
  userSchema.findById(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(404).json({
        message: "userNot not found",
      });
    } else {
      res.status(200).json({
        message: "users retrived",
        data: data,
      });
    }
  });
};
exports.updateUserbyId = (req, res) => {
  userSchema.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) {
      res.status(400).json({
        message: "Some thing went wrong",
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          message: "User Updated",
          data: data,
        });
      }
    }
  });
};
//feedBack By Id
exports.getUserById = (req, res) => {
  userSchema.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(401).json({
        message: err.message,
      });
    } else {
      res.status(200).json({
        message: "User retrieve successfully",
        data: data,
      });
    }
  });
};

// exports.insertBulk = (req, res) => {
//   const students = new StudentSchema(req, res);
//   StudentSchema.insertMany(students, (err, data) => {
//     if (err) {
//       res.status(500).json({
//         message: err.message || "Some Error occured while creting",
//       });
//     } else {
//       res.status(201).json({
//         message: "Employee Created Succesfully",
//         data: data,
//       });
//     }
//   });
// };

//login Admin
exports.LoginUser = (req, res) => {

  userSchema.findOne({ email: req.body.email }).populate("roleId").exec((err, data) => {

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
                // //Update Refresh Token
                // authTokenModel.findByIdAndUpdate(data._id, { token: refreshToken }, (err, data) => {
                //     if (err) {
                //         return res.status(400).json({
                //             message: err.message,
                //         })
                //     } else {
                //         return res.status(200).json({
                //             message: "User Login successfully",
                //             token:refreshToken
                           
                //         })
                //     }
                // })
                return res.status(200).json({
                              message: "User Login successfully",
                              token:refreshToken,
                              data: data
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