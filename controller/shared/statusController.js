const statusSchema = require("../../model/shared/statusModel");
exports.addStatus = (req, res) => {
  const statuses = new statusSchema(req.body);
  statuses.save((err, data) => {
    if (err) {
      console.log(err);
      res.status(401).json({
        messge: "Status Not Added",
        data: data,
      });
    } else {
      res.status(201).json({
        message: "status Added",
        data: data,
      });
    }
  });
};
exports.getAllStatuses = (req, res) => {
  statusSchema.find((err, data) => {
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
exports.deleteStatusById = (req, res) => {
  console.log(req.params.id);

  statusSchema.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(401).json({
        message: "status not deleted",
        error: err,
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          message: "status Deleted",
        });
      } else {
        res.status(404).json({
          message: "status Not Found",
        });
      }
    }
  });
};
exports.updateStatusbyId = (req, res) => {
  statusSchema.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Some thing went wrong",
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          message: "status Updated",
          data: data,
        });
      }
    }
  });
};
exports.getStatusById = (req, res) => {
  statusSchema.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(401).json({
        message: err.message,
      });
    } else {
      res.status(200).json({
        message: "status retrieve successfully",
        data: data,
      });
    }
  });
};
