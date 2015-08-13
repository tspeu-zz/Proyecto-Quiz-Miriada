// Funciones auxiliares

// --- limpia la cadena pasada para poder usarla conlike al buscar
exports.sanitize = function (str) {
  var tmp = str || "";
  return "%" + tmp.trim().replace(/ /g, "%") + "%";
};
<<<<<<< HEAD
=======

// --- Convierte el objeto devuelto por sequelize en un array
// No necesaria al actualizar la versión de sequelize
// exports.errToArray = function (err) {
//   var errArray = [];
//   var i = 0;
//
//   for (var p in err) {
//     errArray[i++] = { message: err[p] };
//   }
//
//   return errArray;
// };
>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
