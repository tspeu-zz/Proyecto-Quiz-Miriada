var path = require('path');

//carga el modelo ORM que hace de traductor entre js y la DB
var Sequelize = require('sequelize');

//definir usar sqLite
var sequelize = new Sequelize (null,null,null,
                  {dialect : 'sqlite', storage: 'quiz.sqlite'}
                );

//importar la definicion de la tabla del fichero quiz.js
var Quiz = sequelize.import (path.join(__dirname, 'quiz'));
                         //path.join(__dirname, 'views')
//exporta la definicion de la tabla
exports.Quiz = Quiz;

//sequelize.sync() crea e instancia la tabla en la DB
sequelize.sync().success(function(){
  //succs metodo antiguo ejecuta el manejador cuando cre la tabla
    Quiz.count().success(function(count){
        if (count === 0)
        {
          Quiz.create({ pregunta: '¿Cuál es la Capital de Italia?',
                        respuesta: 'Roma'
                      }).success(function()
                      {
                       console.log(' DB inicializada');
                      });
        }
    });
});
