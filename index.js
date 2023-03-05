const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// const URI = process.env.URI || "mongodb://127.0.0.1:27017/outfits"
app.listen(PORT, () => {
  console.log("Server Started on port 3000");
});

// routes
const roleRoutes = require('./Routes/roleRoutes')
const userRoutes = require('./Routes/customer/userRoutes')
const supplierRoutes = require('./Routes/supplier/supplierRoutes')
const categoryRoutes = require('./Routes/shared/categoryRoutes')
const outfitRoutes = require('./Routes/shared/outfitRoutes')
const addressRoutes = require('./Routes/shared/addressRoutes')
const statusRoutes = require('./Routes/shared/statusRoutes')
const subcategoryRoutes = require('./Routes/shared/subCategoryRoutes')
const cartRoutes = require('./Routes/shared/cartRoutes')
const customerFeedBackRoutes = require('./Routes/customer/customerFeedBackRoutes')
const customerReviewRoutes = require('./Routes/customer/customerReviewsRoutes')
const designerRoutes =require('./Routes/shared/designerRoutes')
// main routes
app.use("/roles",roleRoutes)//.1
app.use("/users",userRoutes)//2
app.use("/suppliers",supplierRoutes)//3
app.use("/categories",categoryRoutes)//4
app.use("/outfits",outfitRoutes)//5
app.use("/address",addressRoutes)//6
app.use("/statuses",statusRoutes)//7
app.use("/subcategories",subcategoryRoutes)//8
app.use("/carts",cartRoutes)//9
app.use("/feedbacks",customerFeedBackRoutes)//10
app.use("/reviews",customerReviewRoutes)//11
app.use("/designer",designerRoutes)//12


mongoose.connect("mongodb+srv://root:root@cluster0.qzotymx.mongodb.net/outfits", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
    socketTimeoutMS: 30000,

}, (err) => {
    if (err) {
        console.log(err);
        console.log("Error Connecting db");
    }
    else {
        console.log(" Cluster Created ->  Connection Established");
    }

})

