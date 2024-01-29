const fs = require('fs');



const getJson = (fileName) => {
  const file = fs.readFileSync(`${__dirname}/../data/${fileName}.json`, 'utf-8');
  const json = JSON.parse(file);
  return json;
};


const creacionDeCookies = (req, res, next) => {

  console.log("estoy en generacion de creacion de cookies" )
  const { email } = req.body;

  console.log("este es el mail"+ email)
  const users = getJson("users");
 if(email ){
  const user = users.find((usuario) => usuario.email === email);
 
if(user){
  req.session.user = user;

console.log(user)


  res.cookie('user', user.email, { maxAge: 1000 * 60 * 15 });
}
 
 }

  if (req.body.remember === "on") {
    res.cookie('rememberMe', "true", { maxAge: 1000 * 60 * 15 });
  }

  next();
};
 
module.exports= creacionDeCookies;