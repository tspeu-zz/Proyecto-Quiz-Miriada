// Definición del modelo de Quiz

var Subject = require('./subject.js');

module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
  return sequelize.define('Quiz',
=======
  return sequelize.define(
    'Quiz',
>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
          {
            pregunta: {
              type: DataTypes.STRING,
              validate: { notEmpty: { msg: "-> Falta pregunta"} }
            },
            respuesta: {
              type: DataTypes.STRING,
              validate: { notEmpty: { msg: "-> Falta respuesta"}}
            },
            tema: {
              type: DataTypes.STRING,
              validate: {
                notEmpty: { msg: "-> Falta temática"},
                isIn: {
                  args: [Subject.temasAceptados],
                  msg: "-> Tema no válido"
                }
              }
            }
          }
<<<<<<< HEAD
        );
=======

          );
>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
};
