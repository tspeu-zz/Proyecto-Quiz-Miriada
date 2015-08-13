var models = require('../models/models.js');
var helpers = require('./helpers.js');

var temasAceptados = models.Subject.temasAceptados;

// Autoload - factoriza el código si ruta incluye :quizId
exports.load = function (req, res, next, quizId) {
<<<<<<< HEAD
  models.Quiz.findById(
          Number(quizId),
          { include: [{ model: models.Comment }] } //incluir comentarios asociados
          )
  .then(function (quiz) {
    if (quiz) {
      req.quiz = quiz;
      next();
    } else {
      next(new Error('No existe quizId=' + quizId));
    }
  })
=======
  models.Quiz.findById(Number(quizId)
        //,{ include: [{ model: models.Comment }] }
          // le pedimos que tambien incluya los comentarios asociados
          )
  .then(function (quiz) {
      if (quiz) { req.quiz = quiz;
                next();
      } else {
        next(new Error('No existe quizId=' + quizId));
      }
    })
>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
  .catch(function(error) { next(error); });
};

// GET /quizes
exports.index = function (req, res) {
<<<<<<< HEAD

  models.Quiz.findAll({
          where: ["lower(pregunta) like ?", helpers.sanitize(req.query.search).toLowerCase()],
          order: ["pregunta"]
=======
  // SQLite busca con like sin tener en cuenta la capitalización
  // Para obtener el mismo resultado en postgresql hacemos la búsqueda en minúsculas
  models.Quiz.findAll({
          where: ["lower(pregunta) like ?", helpers.sanitize(req.query.search).toLowerCase()],
          order: ["pregunta"] //
>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
          })
  .then(function (quizes) {
    res.render('quizes/index.ejs', { quizes: quizes, errors: [] });
  })
  .catch(function (error) { next(error); });
};

// GET /quizes/:quizId
exports.show = function (req, res) {
  res.render('quizes/show', { quiz: req.quiz, errors: [] });
};

// GET /quizes/:quizId/answer
exports.answer = function (req, res) {
<<<<<<< HEAD
  var resultado = 'Incorrecto';
  if (req.query.respuesta === req.quiz.respuesta) {
    resultado = 'Correcto';
=======
  var resultado = 'La respuesta es Incorrecta';
  if (req.query.respuesta === req.quiz.respuesta) {
    resultado = 'La respuesta es Correcta';
>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
  }
  res.render('quizes/answer', {
              quiz: (resultado === 'Correcto')?null:req.quiz,
              respuesta: resultado,
              errors: []
            });
};

// GET /quizes/new
exports.new = function (req, res) {
  var quiz = models.Quiz.build(
    { pregunta: "Pregunta", respuesta: "Respuesta", tema: "Otro" }
  );
<<<<<<< HEAD

=======
>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
  res.render('quizes/new', { quiz: quiz, errors: [], temas: temasAceptados });
};

// POST /quizes/create
exports.create= function (req, res) {
  var quiz = models.Quiz.build(req.body.quiz);

<<<<<<< HEAD
  quiz.validate().then(function (err) {
    if (err) {
      res.render('quizes/new', { quiz: quiz, errors: err.errors, temas: temasAceptados });
    } else {
      // guarda en la BD los campos de quiz
      quiz
      .save({ fields: ["pregunta", "respuesta", "tema"] })
      .then(function () {
=======
  quiz.validate()
  .then(function (err) {
      if (err)
      {
      res.render('quizes/new', { quiz: quiz, errors: err.errors, temas: temasAceptados });
      } else
      {// save: guarda en la BD
        quiz.save({ fields: ["pregunta", "respuesta", "tema"] })
        .then(function () {
>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
        res.redirect('/quizes'); // redirección HTTP a la lista de preguntas
      });
    }
  })
  .catch(function(error) { next(error); });
<<<<<<< HEAD

=======
>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
};

// GET /quizes/:quizId/edit
exports.edit = function (req, res) {
  var quiz = req.quiz; // aquí lo guarda Autoload
  res.render('quizes/edit', { quiz: quiz, errors: [], temas: temasAceptados });
};

// PUT /quizes/:quizId
exports.update = function (req, res) {
  req.quiz.pregunta = req.body.quiz.pregunta;
  req.quiz.respuesta = req.body.quiz.respuesta;
  req.quiz.tema = req.body.quiz.tema;

  req.quiz.validate().then(
    function(err){
<<<<<<< HEAD
      if (err) {
        res.render('quizes/edit', {quiz: req.quiz, errors: err.errors, temas: temasAceptados});
      } else {

        req.quiz
        .save({ fields: ["pregunta", "respuesta", "tema"] })
        .then(function() { res.redirect('/quizes');});
      }
    }
  )
  .catch(function(error) { next(error); });

=======
      if (err)
      {
        res.render('quizes/edit',
        {quiz: req.quiz,
          errors: err.errors,
          temas: temasAceptados});
      } else
      {
        // guarda en la BD los campos de quiz
        req.quiz
        .save({ fields: ["pregunta", "respuesta", "tema"] })
        .then(function() { res.redirect('/quizes');});
      }     // Redirección HTTP a lista de preguntas (URL relativo)
    }
  ).catch(function(error) { next(error); });
>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
};

// DELETE /quizes/:quizId
exports.destroy = function (req, res) {
  req.quiz
  .destroy()
  .then(function () {
    res.redirect('/quizes');
  })
  .catch(function (error) { next(error); });
};
