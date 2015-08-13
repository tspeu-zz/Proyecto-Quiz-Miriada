var users = { admin: { id: 1, username: "admin", password: "1234" },
<<<<<<< HEAD
              pepe:  { id: 2, username: "pepe", password: "5678" }
=======
              pepe: { id: 2, username: "pepe", password: "5678" }
>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
            };

// Comprueba si el usuario está registrado en users
// Si la autenticación falla o hay errores se ejecuta callback(error)
exports.autenticar = function (login, password, callback) {
  if (users[login]) {
    if (password === users[login].password) {
<<<<<<< HEAD
          callback(null, users[login]);
      } else {
          callback(new Error('Password erróneo.'));
      }
  } else {
          callback(new Error('No existe el usuario.'));
=======
      callback(null, users[login]);
    } else {
      callback(new Error('Password erróneo.'));
    }
  } else {
    callback(new Error('No existe el usuario.'));
>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
  }
};
