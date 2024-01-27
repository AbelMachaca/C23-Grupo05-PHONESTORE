const fs = require('fs');



const getJson = (fileName) => {
  const file = fs.readFileSync(`${__dirname}/../data/${fileName}.json`, 'utf-8');
  const json = JSON.parse(file);
  return json;
};




const rememberMeMiddleware = (req, res, next) => {
  console.log("llegue al middleware rememberMe");
  console.log(req.cookies.rememberMe);
  console.log(req.cookies.user);

  

  
  

    const userCookie = req.cookies.user;
const rememberMe = req.cookies.rememberMe
    if (userCookie && rememberMe ) {
      console.log("Cookie user está presente");

      const users = getJson("users");
      const user = users.find((elemento) => elemento.email === userCookie);

     
        req.session.user = user;
        console.log("Usuario recordado:", user);
      
    
  }

  console.log("Termina el middleware rememberMe");
  next();
};

module.exports = rememberMeMiddleware;
