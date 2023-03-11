const customerFeedBackSchema = require("../../model/customer/customerFeedBackModel");
//add feedback
exports.addCustomerFeedBack = (req, res) => {
  console.log("....", req.body);

  const customerFeedBacks = new customerFeedBackSchema(req.body);

  customerFeedBacks.save((err, data) => {
    if (err) {
      res.status(401).json({
        message: "something went wrong",
        error: err,
      });
    } else {
      console.log(data);
      res.status(200).json({
        message: "customerFeedBack Added Succesfully",
        data: data,
      });
    }
  });
};
exports.getAllCustomerFeedBacks = (req, res) => {
  customerFeedBackSchema.find((err, data) => {
    if (err) {
      res.status(400).json({
        message: "something went wrong",
      });
    } else {
      console.log(data);
      res.status(200).json({
        message: "customerFeedBacks Retrived",
        data: data,
      });
    }
  });
};
//delete by id
exports.deleteCustomerFeedBackById = (req, res) => {
  console.log("indelete by id");

  console.log(req.params.id);

  customerFeedBackSchema.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error Deleting Data",
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          data: data,
          message: "customerFeedBack Deleted Succesfully",
        });
      } else {
        res.status(404).json({
          message: "customerFeedBack not Found",
        });
      }
    }
  });
};
// get by id
exports.getCustomerFeedBackById = (req, res) => {
  console.log(req.params.id);
  customerFeedBackSchema.findById(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(404).json({
        message: "customerFeedBackNot not found",
      });
    } else {
      res.status(200).json({
        message: "customerFeedBacks retrived",
        data: data,
      });
    }
  });
};
// update by id
exports.updateCustomerFeedBackbyId = (req, res) => {
  customerFeedBackSchema.findByIdAndUpdate(
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
            message: "customerFeedBack Updated",
            data: data,
          });
        }
      }
    }
  );
};
//feedBack By Id
exports.getFeedBackById = (req, res) => {
  customerFeedBackSchema.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(401).json({
        message: err.message,
      });
    } else {
      res.status(200).json({
        message: "Feedback retrieve successfully",
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
