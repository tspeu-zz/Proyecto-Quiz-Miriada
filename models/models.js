var path = require('path');
//postgres DATABASE_URL = postgres: //user:passwd@host:port/database
//sqlite DATABASE_URL = sqlite://@:/
//var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name   = (url[6] || null);
var user      = (url[2] || null);
var pwd       = (url[3] || null);
var protocol  = (url[1] || null);
var dialect   = (url[1] || null);
var port      = (url[5] || null);
var host      = (url[4] || null);
var storage = process.env.DATABASE_STORAGE;

//carga el modelo ORM que hace de traductor entre js y la DB
var Sequelize = require('sequelize');

//usar bb sqlite o postgres
//definir usar sqLite
var sequelize = new Sequelize (DB_name,user,pwd,
                {
                  dialect : protocol,
                  protocol: protocol,
                  port :    port,
                  host:     host,
                  storage:  storage,
                  omitNull: true
                }
                );

//importar la definicion de la tabla del fichero quiz.js
var Quiz = sequelize.import (path.join(__dirname, 'quiz'));
//exporta la definicion de la tabla
exports.Quiz = Quiz;

//sequelize.sync() crea e instancia la tabla en la DB
sequelize.sync().then(function(){
  //succs metodo antiguo ejecuta el manejador cuando cre la tabla
    Quiz.count().then(function(count){
        if (count === 0)
        {
          Quiz.create({ pregunta  : '¿Cuál es la Capital de Italia?',
                        respuesta : 'Roma'
                      });
          Quiz.create({ pregunta  : '¿Capital de Portugal?',
                        respuesta : 'Lisboa'
                      }).then(function()
                      {
                       console.log(' DB inicializada');
                      });
        }
    });
});
