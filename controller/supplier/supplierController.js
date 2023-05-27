const supplierSchema = require("../../model/supplier/supplierModel");
exports.addSupplier = (req, res) => {
  const supplier = new supplierSchema(req.body);
  supplier.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data != null || data != undefined) {
        const token = generateToken.generateToken(data);
        res.status(200).json({
          message: "Supplier Added",
          data: data,
          token: token
        });
      }
    }
  });
};
exports.getAllSupplier = (req, res) => {
  supplierSchema.find((err, data) => {
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
exports.deleteSupplierById = (req, res) => {
  //   var id = req.params.id;
  console.log(req.params.id);

  supplierSchema.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(401).json({
        message: "Supplier not deleted",
        error: err,
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          message: "Supplier Deleted",
        });
      } else {
        res.status(404).json({
          message: "Supplier Not Found",
        });
      }
    }
  });
};
exports.updateSupplierbyId = (req, res) => {


  supplierSchema.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Some thing went wrong",
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          message: "Supplier Updated",
          data: data,
        });
      }
    }
  });
};
exports.getSupplierById = (req, res) => {
  supplierSchema.findById(req.params.id,(err,data)=>{
      if(err){
          res.status(401).json({
                  message :err.message
          })
      }else{
          res.status(200).json({
                  message: "supplier retrieve successfully",
                  data:data
          })
      }
  })
}
