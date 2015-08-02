var path = require('path');

// Postgres DATABASE_URL = postgres://user:passwd@host:port/database
// SQLite   DATABASE_URL = sqlite://:@:/
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name  = (url[6]||null);
var user     = (url[2]||null);
var pwd      = (url[3]||null);
var protocol = (url[1]||null);
var dialect  = (url[1]||null);
var port     = (url[5]||null);
var host     = (url[4]||null);
var storage  = process.env.DATABASE_STORAGE;

// Cargar modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQLite o Postgres
var sequelize = new Sequelize(DB_name, user, pwd,
  { dialect:  protocol,
    protocol: protocol,
    port:     port,
    host:     host,
    storage:  storage,  // solo SQLite (.env)
    omitNull: true      // solo Postgres
  }
);

// Importar definicion de la tabla Quiz
var quiz_path = path.join(__dirname,'quiz');
var Quiz = sequelize.import(quiz_path);

  // Importar definición de la tabla comment
//var comment_path = path.join(__dirname,'comment');
//var Comment = sequelize.import(comment_path);

  // Establecer las relaciones
//Comment.belongsTo(Quiz);
//Quiz.hasMany(Comment, { onDelete: 'cascade',hooks: true });

exports.Quiz = Quiz; // exportar la definición de la tabla Quiz
//exports.Comment = Comment; // exportar la definición de la tabla Comment
var Subject = require('./subject.js');
exports.Subject = Subject; // exportar la definición de los temas

// sequelize.sync() inicializa BD
sequelize.sync().then(function () {

  Quiz.count().then(function (count) {
    if (count === 0) { // la tabla se inicializa solo si está vacía
      Quiz.create(
        {
          pregunta: 'Capital de Italia',
          respuesta: 'Roma',
          tema: 'Humanidades'
        }
      );
      Quiz.create(
        {
          pregunta: 'Capital de Portugal',
          respuesta: 'Lisboa',
          tema: 'Humanidades'
        }
      );
      Quiz.create(
        {
          pregunta: ' 2 + 2 ',
          respuesta: '4',
          tema: 'Matemáticas'
        }
      )
      .then(function () { console.log('DB inicializada'); });
    }
  });
});
