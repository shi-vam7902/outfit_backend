const AuthTokenModel = require('../model/authTokenModel')


exports.GetAuthToken = (req,res)=>{
        const publicKey = req.params.key
        AuthTokenModel.findOne({publicKey}).populate('user').exec((err,data)=>{
            if(err){
                res.status(401).json({message:"invalid publicKey"})
            }else{

                res.status(200).json({message:"Data Authorization Done",data:data})
            }
        })
}