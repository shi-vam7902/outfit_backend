const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

<<<<<<< HEAD
//routes 
const sizeRoutes = require('./Routes/shared/sizeRoutes')
const orderRoutes = require('./Routes/shared/orderRoutes')
const brandRoutes = require('./Routes/shared/brandRoutes')
const colorsRoutes = require('./Routes/shared/colorsRoutes')
const materialRoutes = require('./Routes/shared/materialRoutes')
const occasionRoutes = require('./Routes/shared/occasionRoutes')
const patternsRoutes = require('./Routes/shared/patternsRoutes')
const sleevesRoutes = require('./Routes/shared/sleevesRoutes')
const styleRoutes = require('./Routes/shared/styleRoutes')
=======
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
>>>>>>> 40a4c705af900ddb96492a5f04961d7902dfacea



 //url routes
app.use("/order",orderRoutes)
app.use("/brand",brandRoutes)
app.use("/color",colorsRoutes)
app.use("/material",materialRoutes)
app.use("/occasion",occasionRoutes)
app.use("/pattern",patternsRoutes)
app.use("/sleeve",sleevesRoutes)
app.use("/style",styleRoutes)
 


//server
app.listen(PORT,(err)=>{
    if(err){
        console.log("Server Not Started",err);
    }else{
        console.log("Server Started on port ",PORT);
    }
})

//database
mongoose.connect('mongodb+srv://amit:Amit1324@cluster0.sxuwjh9.mongodb.net/outfits?retryWrites=true&w=majority', (err) => {
    if (err) {
        console.log("Database Not Connected..");
    } else {
        console.log("Database Connected..");
    }
})

