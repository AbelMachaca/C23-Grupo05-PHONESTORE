const userSessionValidate=(req,res,next)=>{
    if(req.session.user){
        next();
    }
    res.redirect("/");
};

module.exports=userSessionValidate;
