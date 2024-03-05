const adminSessionValidate=(req,res,next)=>{
    if(req.session.user && req.session.user.id_entidad_usuario == 2){
        console.log("sesion", req.session.user)

        next();
    }else{
    res.redirect("/");
    }
};

module.exports=adminSessionValidate;