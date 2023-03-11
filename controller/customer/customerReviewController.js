const customerReviewSchema = require("../../model/customer/customerReviewModel");
exports.addCustomerReview = (req, res) => {
  console.log("....", req.body);

  const customerReviews = new customerReviewSchema(req.body);

  customerReviews.save((err, data) => {
    if (err) {
      res.status(401).json({
        message: "something went wrong",
        error: err,
      });
    } else {
      console.log(data);
      res.status(200).json({
        message: "customerReview Added Succesfully",
        data: data,
      });
    }
  });
};
exports.getAllCustomerReviews = (req, res) => {
  customerReviewSchema.find((err, data) => {
    if (err) {
      res.status(400).json({
        message: "something went wrong",
      });
    } else {
      console.log(data);
      res.status(200).json({
        message: "customerReviews Retrived",
        data: data,
      });
    }
  });
};

exports.deleteCustomerReviewById = (req, res) => {
  console.log("indelete by id");

  console.log(req.params.id);

  customerReviewSchema.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error Deleting Data",
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          data: data,
          message: "customerReview Deleted Succesfully",
        });
      } else {
        res.status(404).json({
          message: "customerReview not Found",
        });
      }
    }
  });
};

exports.getCustomerReviewById = (req, res) => {
  console.log(req.params.id);
  customerReviewSchema.findById(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(404).json({
        message: "customerReviewNot not found",
      });
    } else {
      res.status(200).json({
        message: "customerReviews retrived",
        data: data,
      });
    }
  });
};
exports.updateCustomerReviewbyId = (req, res) => {
  customerReviewSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err, data) => {
      if (err) {
        res.status(400).json({
          message: "Some thing went wrong",
        });
      } else {
        if (data != null || data != undefined) {
          res.status(200).json({
            message: "customerReview Updated",
            data: data,
          });
        }
      }
    }
  );
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
//feedBack By Id
exports.getReviewById = (req, res) => {
  customerReviewSchema.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(401).json({
        message: err.message,
      });
    } else {
      res.status(200).json({
        message: "Review retrieve successfully",
        data: data,
      });
    }
  });
};
