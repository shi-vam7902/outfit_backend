const express =require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')

app.listen(PORT,()=>{
    console.log("Server Started on port 3000");
})
mongoose.connect("mongodb://127.0.0.1/27017/", {
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
