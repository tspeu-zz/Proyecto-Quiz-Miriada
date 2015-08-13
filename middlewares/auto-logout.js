// Middleware para autologout

<<<<<<< HEAD
var defaultTime = 2 * 60 * 1000; // dos minutos en ms
=======
var defaultTime = 2 * 60 * 1000; // tiempo por defecto en ms
>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624

module.exports = function(t) {

  var logoutTime = t || defaultTime;

<<<<<<< HEAD
  //test
  console.log("Nos piden autologout con t = " + logoutTime);

  return function(req, res, next)
  {
    var now = new Date().getTime();
    //test
=======
  console.log("Nos piden autologout con t = " + logoutTime);

  return function(req, res, next) {
    var now = new Date().getTime();
>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
    console.log("Tiempo actual: " + now);

    // recuperamos la hora de la última petición
    var lastReqTime = req.session.reqTime || now;

    // si hay un usuario registrado y ha sobrepasado el logoutTime
<<<<<<< HEAD
    if (req.session.user && (now - lastReqTime > logoutTime))
    {
      delete req.session.user; // eliminamos la sesión
      //test
      console.log("Hemos eliminado la sesión por inactividad");
    }

    //actualizar
    req.session.reqTime = now;
=======
    if (req.session.user && (now - lastReqTime > logoutTime)) {
      delete req.session.user; // eliminamos la sesión
      console.log("Hemos eliminado la sesión por inactividad");
    }

    // actualizamos la hora para la siguiente petición
    req.session.reqTime = now;

>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
    // pasamos al siguiente MW
    next();
  };
};
