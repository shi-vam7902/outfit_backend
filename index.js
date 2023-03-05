const express =require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')

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

