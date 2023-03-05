const roleSchema = require("../model/roleModel");
exports.addrole = (req, res) => {
  const roles = new roleSchema(req.body);
  roles.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(201).json({
        message: "Role Added",
        data: data,
      });
    }
  });
};
exports.getAllRoles = (req, res) => {
  roleSchema.find((err, data) => {
    if (err) {
      res.status(401).json({
        message: "SomeThing Went Wrong",
      });
    } else {
      res.status(200).json({
        message: "data Retrived",
        data: data,
      });
    }
  });
};
exports.deleteRoleById = (req, res) => {
  var id = req.params.id;
  console.log(id);

  roleSchema.findByIdAndDelete(id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(401).json({
        message: "Role not deleted",
        error: err,
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          message: "Role Deleted",
        });
      } else {
        res.status(404).json({
          message: "Role Not Found",
        });
      }
    }
  });
};
exports.updateRolebyId = (req, res) => {
  

  roleSchema.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Some thing went wrong",
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          message: "Role Updated",
          data: data,
        });
      }
    }
  });
};
