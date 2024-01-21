const userSessionValidate=(req,res,next)=>{
    if(req.session.user.rol == user){
        next();
    }
    res.redirect("/login");
};

module.exports=userSessionValidate;
