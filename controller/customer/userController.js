const userSchema = require("../../model/customer/userModel");
exports.addUser = (req, res) => {
  console.log("....", req.body);

  const users = new userSchema(req.body);

  users.save((err, data) => {
    if (err) {
      res.status(401).json({
        message: "something went wrong",
        error: err,
      });
    } else {
      console.log(data);
      res.status(200).json({
        message: "User Added Succesfully",
        data: data,
      });
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
