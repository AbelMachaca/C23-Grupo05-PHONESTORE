const adminSessionValidate=(req,res,next)=>{

    const user=req.session.user.rol
    console.log("este es " + user)
    if(req.session.user.rol == "admin"){
        next();
    }
    res.redirect("/users/login");
};

module.exports=adminSessionValidate;