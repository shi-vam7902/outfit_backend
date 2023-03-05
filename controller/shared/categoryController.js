const categorySchema = require("../../model/shared/categoryModel");
exports.addCategory = (req, res) => {
  const categories = new categorySchema(req.body);
  categories.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(201).json({
        message: "category Added",
        data: data,
      });
    }
  });
};
exports.getAllCategories = (req, res) => {
  categorySchema.find((err, data) => {
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
exports.deleteCategoryById = (req, res) => {
 console.log(req.params.id);

  categorySchema.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(401).json({
        message: "category not deleted",
        error: err,
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          message: "category Deleted",
        });
      } else {
        res.status(404).json({
          message: "category Not Found",
        });
      }
    }
  });
};
exports.updateCategorybyId = (req, res) => {
  categorySchema.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Some thing went wrong",
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          message: "category Updated",
          data: data,
        });
      }
    }
  });
};
