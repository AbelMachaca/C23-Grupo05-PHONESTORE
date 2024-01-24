const rememberMeMiddleware = (req, res, next) => {
    const rememberMeToken = req.cookies.rememberMeToken;
  
    if (rememberMeToken) {
      // Verificar la validez del token y autenticar al usuario si es válido
      if (validateRememberMeToken(rememberMeToken)) {
        // Autenticar al usuario y establecer la sesión
        const user = authenticateUserFromToken(rememberMeToken);
        req.session.user = user;
        res.cookie('user', user, { maxAge: 1000 * 60 });  // Establecer cookie de sesión
      }
    }
  
    // Continuar con la siguiente capa de middleware o controlador
    next();
  };
  
  module.exports = rememberMeMiddleware;