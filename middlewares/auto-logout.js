// Middleware para autologout

var defaultTime = 2 * 60 * 1000; // tiempo por defecto en ms

module.exports = function(t) {

  var logoutTime = t || defaultTime;

  console.log("Nos piden autologout con t = " + logoutTime);

  return function(req, res, next) {
    var now = new Date().getTime();
    console.log("Tiempo actual: " + now);

    // recuperamos la hora de la última petición
    var lastReqTime = req.session.reqTime || now;

    // si hay un usuario registrado y ha sobrepasado el logoutTime
    if (req.session.user && (now - lastReqTime > logoutTime)) {
      delete req.session.user; // eliminamos la sesión
      console.log("Hemos eliminado la sesión por inactividad");
    }

    // actualizamos la hora para la siguiente petición
    req.session.reqTime = now;

    // pasamos al siguiente MW
    next();
  };
};
