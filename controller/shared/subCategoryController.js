const subCategorySchema = require("../../model/shared/subCategoryModel");
exports.addSubCategory = (req, res) => {
  const subCategories = new subCategorySchema(req.body);
  subCategories.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(201).json({
        message: "subCategory Added",
        data: data,
      });
    }
  });
};
exports.getAllSubCategories = (req, res) => {
  subCategorySchema.find((err, data) => {
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
exports.deleteSubCategoryById = (req, res) => {
 console.log(req.params.id);

  subCategorySchema.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(401).json({
        message: "subCategory not deleted",
        error: err,
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          message: "subCategory Deleted",
        });
      } else {
        res.status(404).json({
          message: "subCategory Not Found",
        });
      }
    }
  });
};
exports.updateSubCategorybyId = (req, res) => {
  subCategorySchema.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Some thing went wrong",
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          message: "subCategory Updated",
          data: data,
        });
      }
    }
  });
};
exports.getAllSubCategoriesById = (req, res) => {
  subCategorySchema.findById(req.params.id,(err,data)=>{
      if(err){
          res.status(401).json({
                  message :err.message
          })
      }else{
          res.status(200).json({
                  message: "Feedback retrieve successfully",
                  data:data
          })
      }
  })
}
