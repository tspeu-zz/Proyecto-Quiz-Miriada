<<<<<<< HEAD
//  modelo de comment con validación
=======
// Definición del modelo de comment con validación

>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Comment', {
    texto: {
      type: DataTypes.STRING,
      validate: { notEmpty: { msg: '-> Falta comentario' } }
    },
    publicado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    classMethods: {
<<<<<<< HEAD
      countUnpublished: function ()
      {
        return this.count({ where: { publicado: false } });
      },
      countCommentedQuizes: function ()
      {
=======
      countUnpublished: function () {
        return this.count({ where: { publicado: false } });
      },
      countCommentedQuizes: function () { // NOTE: mejor en el modelo Quiz ¿cómo?
>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
        return this.aggregate('QuizId', 'count', { distinct: true });
      }
    }
  });
};
