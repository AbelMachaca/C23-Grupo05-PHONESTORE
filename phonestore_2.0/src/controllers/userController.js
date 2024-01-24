const fs = require("fs");
const path = require("path");
const {validationResult} = require('express-validator');
const usersFilePath = path.join(__dirname, "../data/users.json");
const { v4: uuidv4 } = require("uuid");


const getJson = () => {
const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
return users;
};


const userController = {
    login: (req,res)=>{
        res.render("users/login");
    },
    register:(req,res)=>{
        res.render("users/register");
    },
    show:(req,res)=>{
        const { id } = req.params;
        const users = getJson();
        const user = users.find((element) => element.id == id);
        res.render("users/profile", { user })
    },

    edit:(req,res)=>{
        const { id } = req.params;
        const users = getJson();
        const user = users.find((element) => element.id == id);
        res.render("users/userUpdate", { user })
    },
    update:(req, res)=>{
        const errores = validationResult(req);
        //console.log("errores:", errores);
        if(!errores.isEmpty()){
        const { id } = req.params;
        const users = getJson();
        const user = users.find((element) => element.id == id);
        return res.render('users/userUpdate',{errores:errores.mapped(),old:req.body, user})
        }


        const usersFilePath = path.join(__dirname, '../data/users.json');
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
            const {id} = req.params
            const {firstName, lastName, email, password, address, tel, postalCode, birthDate,dniNumber} = req.body;
            const nuevoArray = users.map(user => {
                if (user.id == id){
                    return{
                        id,
                        firstName: firstName.trim(),
                        lastName: lastName.trim(),
                        dniNumber,
                        // email: email.trim(),
                        password,
                        address: address.trim(),
                        tel,
                        postalCode,
                        birthDate: birthDate,
                        image: req.file ? req.file.filename : user.image,
                    }
                }
            })
            const json = JSON.stringify(nuevoArray);
            fs.writeFileSync(usersFilePath, json, "utf-8"); 
            
        
    }
}

module.exports = userController;