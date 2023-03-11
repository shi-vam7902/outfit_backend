const outfitSchema = require("../../model/shared/outfitModel");
exports.addOutfit = (req, res) => {
  const outfits = new outfitSchema(req.body);
  outfits.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(201).json({
        message: "outfit Added",
        data: data,
      });
    }
  });
};
exports.getAllOutfits = (req, res) => {
  outfitSchema.find((err, data) => {
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
exports.deleteOutfitById = (req, res) => {
  console.log(req.params.id);

  outfitSchema.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(401).json({
        message: "outfit not deleted",
        error: err,
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          message: "outfit Deleted",
        });
      } else {
        res.status(404).json({
          message: "outfit Not Found",
        });
      }
    }
  });
};
exports.updateOutfitbyId = (req, res) => {
  outfitSchema.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Some thing went wrong",
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          message: "outfit Updated",
          data: data,
        });
      }
    }
  });
};
exports.getOutfitById = (req, res) => {
  outfitSchema.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(401).json({
        message: err.message,
      });
    } else {
      res.status(200).json({
        message: "OutFit retrieve successfully",
        data: data,
      });
    }
  });
};
