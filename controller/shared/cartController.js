const cartSchema = require("../../model/shared/cartModel");
exports.addCart = (req, res) => {
  console.log("....", req.body);

  const carts = new cartSchema(req.body);

  carts.save((err, data) => {
    if (err) {
      res.status(401).json({
        message: "something went wrong",
        error: err,
      });
    } else {
      console.log(data);
      res.status(200).json({
        message: "cart Added Succesfully",
        data: data,
      });
    }
  });
};
exports.getAllCarts = (req, res) => {
  cartSchema.find((err, data) => {
    if (err) {
      res.status(400).json({
        message: "something went wrong",
      });
    } else {
      console.log(data);
      res.status(200).json({
        message: "carts Retrived",
        data: data,
      });
    }
  });
};

exports.deleteCartById = (req, res) => {
  console.log("indelete by id");

  console.log(req.params.id);

  cartSchema.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error Deleting Data",
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          data: data,
          message: "cart Deleted Succesfully",
        });
      } else {
        res.status(404).json({
          message: "cart not Found",
        });
      }
    }
  });
};

exports.getCartById = (req, res) => {
  console.log(req.params.id);
  cartSchema.findById(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(404).json({
        message: "cartNot not found",
      });
    } else {
      res.status(200).json({
        message: "carts retrived",
        data: data,
      });
    }
  });
};
exports.updateCartbyId = (req, res) => {
  cartSchema.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) {
      res.status(400).json({
        message: "Some thing went wrong",
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          message: "cart Updated",
          data: data,
        });
      }
    }
  });
};
exports.getCartById = (req, res) => {
  cartSchema.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(401).json({
        message: err.message,
      });
    } else {
      res.status(200).json({
        message: "cart retrieve successfully",
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
