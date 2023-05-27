const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = 3002;
const URI = process.env.URI;
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//routes
const sizeRoutes = require("./Routes/shared/sizeRoutes");
const orderRoutes = require("./Routes/shared/orderRoutes");
const brandRoutes = require("./Routes/shared/brandRoutes");
const colorsRoutes = require("./Routes/shared/colorsRoutes");
const materialRoutes = require("./Routes/shared/materialRoutes");
const occasionRoutes = require("./Routes/shared/occasionRoutes");
const patternsRoutes = require("./Routes/shared/patternsRoutes");
const sleevesRoutes = require("./Routes/shared/sleevesRoutes");
const styleRoutes = require("./Routes/shared/styleRoutes");
const roleRoutes = require("./Routes/roleRoutes");
const userRoutes = require("./Routes/customer/userRoutes");
const supplierRoutes = require("./Routes/supplier/supplierRoutes");
const categoryRoutes = require("./Routes/shared/categoryRoutes");
const outfitRoutes = require("./Routes/shared/outfitRoutes");
const addressRoutes = require("./Routes/shared/addressRoutes");
const statusRoutes = require("./Routes/shared/statusRoutes");
const subcategoryRoutes = require("./Routes/shared/subCategoryRoutes");
const cartRoutes = require("./Routes/shared/cartRoutes");
const customerFeedBackRoutes = require("./Routes/customer/customerFeedBackRoutes");
const customerReviewRoutes = require("./Routes/customer/customerReviewsRoutes");
const designerRoutes = require("./Routes/shared/designerRoutes");
const adminRoutes = require("./Routes/admin/adminRoutes");
const imageRoutes = require("./Routes/shared/imageRoutes");
const authTokenRoutes = require("./Routes/authTokenRoutes");

//routes
app.use("/size", sizeRoutes);
app.use("/order", orderRoutes);
app.use("/brand", brandRoutes);
app.use("/color", colorsRoutes);
app.use("/material", materialRoutes);
app.use("/occasion", occasionRoutes);
app.use("/pattern", patternsRoutes);
app.use("/sleeve", sleevesRoutes);
app.use("/style", styleRoutes);
app.use("/role", roleRoutes);
app.use("/user", userRoutes);
app.use("/suppliers", supplierRoutes); //3
app.use("/categories", categoryRoutes); //4
app.use("/outfits", outfitRoutes); //5
app.use("/address", addressRoutes); //6
app.use("/status", statusRoutes); //7
app.use("/subcategory", subcategoryRoutes); //8
app.use("/cart", cartRoutes); //9
app.use("/feedback", customerFeedBackRoutes); //10
app.use("/review", customerReviewRoutes); //11
app.use("/designer", designerRoutes);
app.use("/admin", adminRoutes);
app.use("/image", imageRoutes);
app.use("/token", authTokenRoutes);

//server
app.listen(PORT, (err) => {
  if (err) {
    console.log("Server Not Started", err);
  } else {
    console.log("Server Started on port ", PORT);
  }
});

mongoose.connect(URI, (err) => {
  if (err) {
    console.log("Database Not Connected..", err);
  } else {
    console.log("Database Connected..");
  }
});
