const express =require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')

app.listen(PORT,()=>{
    console.log("Server Started on port 3000");
})
mongoose.connect("mongodb+srv://root:root@cluster0.fsjkio0.mongodb.net/?retryWrites=true&w=majority", {
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
