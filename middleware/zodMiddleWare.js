const validate = (schema)=>async(req,res,next)=>{
    try{
        await schema.parsAsync({
            body:req.body,
            query:req.query,
            params:req.params
        })
        return next()
    }
    catch(err){
        console.log(err);
        return res.status(400).json({
            message:err.errors
        })
    }
}
module.exports = {validate}