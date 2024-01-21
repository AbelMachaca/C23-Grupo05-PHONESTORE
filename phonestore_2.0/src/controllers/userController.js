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
    edit:(req,res)=>{
        res.render("/userUpdate")
    },

    update:(req,res)=>{

    }
}

module.exports = userController;