const fs = require('fs');



const getJson = (fileName) => {
  const file = fs.readFileSync(`${__dirname}/../data/${fileName}.json`, 'utf-8');
  const json = JSON.parse(file);
  return json;
};


const creacionDeCookies = (req, res, next) => {

  
  const { email } = req.body;

 
  const users = getJson("users");
 if(email ){
  const user = users.find((usuario) => usuario.email === email);
 
if(user){
  req.session.user = user;




  res.cookie('user', user.email, { maxAge: 1000 * 60 * 15 });
}
 
 }

  if (req.body.remember === "on") {
    res.cookie('rememberMe', "true", { maxAge: 1000 * 60 * 15 });
  }

  next();
};
 
module.exports= creacionDeCookies;
