const designerSchema = require("../../model/shared/designerModel");
exports.addDesigner = (req, res) => {
  const designer = new designerSchema(req.body);
  designer.save((err, data) => {
    if (err) {
      console.log(err);
      res.status(401).json({
        messge:"Designer Not Added",
        data:data
      })
    } else {
      res.status(201).json({
        message: "designer Added",
        data: data,
      });
    }
  });
};
exports.getAllDesigners = (req, res) => {
  designerSchema.find((err, data) => {
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
exports.deleteDesignerById = (req, res) => {
  console.log(req.params.id);

  designerSchema.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(401).json({
        message: "Designer not deleted",
        error: err,
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          message: "designer Deleted",
        });
      } else {
        res.status(404).json({
          message: "designer Not Found",
        });
      }
    }
  });
};
exports.updateDesignerbyId = (req, res) => {
  designerSchema.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Some thing went wrong",
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          message: "designer Updated",
          data: data,
        });
      }
    }
  });
};
