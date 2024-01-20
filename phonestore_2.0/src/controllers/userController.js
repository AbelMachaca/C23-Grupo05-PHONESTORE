const userController = {
    login: (req,res)=>{
        res.render("users/login");
    },

    processLogin: (req,res)=>{

    },
    register:(req,res)=>{
        res.render("users/register");
    },

    createUser: (req,res)=>{

    },
    profile:(req,res)=>{
        res.render("users/profile")
    }
}

module.exports = userController;