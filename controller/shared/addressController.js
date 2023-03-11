const addressSchema = require("../../model/shared/addressModel");
exports.addAddress = (req, res) => {
  const address = new addressSchema(req.body);
  address.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(201).json({
        message: "address Added",
        data: data,
      });
      console.log(data);
    }
  });
};
exports.getAllAddress = (req, res) => {
  addressSchema.find((err, data) => {
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
exports.deleteAddressById = (req, res) => {
  console.log(req.params.id);

  addressSchema.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(401).json({
        message: "address not deleted",
        error: err,
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          message: "address Deleted",
        });
      } else {
        res.status(404).json({
          message: "address Not Found",
        });
      }
    }
  });
};
exports.updateAddressbyId = (req, res) => {
  addressSchema.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Some thing went wrong",
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          message: "address Updated",
          data: data,
        });
      }
    }
  });
};
exports.getAddressById = (req, res) => {
  addressSchema.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(401).json({
        message: err.message,
      });
    } else {
      res.status(200).json({
        message: "Address retrieve successfully",
        data: data,
      });
    }
  });
};
