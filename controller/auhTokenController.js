const AuthTokenModel = require('../model/authTokenModel')
exports.getAuthToken=(req,res)=>{
    const publicKey = req.params.key
    AuthTokenModel.findOne({publicKey}).populate('user').exec((err,data)=>{
        if(err)
        {
            res.status(400).json({
                message:"Invalid public key"
            })
        }else
        {
            res.status(200).json({message:" Authorization Done",data:data})
        }
    })
}