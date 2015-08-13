var models = require('../models/models.js');

var statistics = {
      quizes: 0,
      comments: 0,
      commentsUnpublished: 0,
      commentedQuizes:0
    };

var errors = [];

exports.calculate = function (req, res, next) {
  console.log("");
<<<<<<< HEAD
  console.log("----estadísticas ----");
  console.log("");

  models.Quiz.count()
  .then(function (numQuizes) {
    statistics.quizes = numQuizes;
    return models.Comment.count();
  })
  .then(function (numComments) {
    statistics.comments = numComments;
    return models.Comment.countUnpublished();
  })
  .then(function (numUnpublished) {
    statistics.commentsUnpublished = numUnpublished;
    return models.Comment.countCommentedQuizes();
  })
  .then(function (numCommented) {
=======
  console.log("---- Comienzan las estadísticas ----");
  console.log("");

  // NOTE: Usar promesas (Promise.all) sería mejor, ya que se podrían
  // lanzar todas las consultas simultáneamente
  models.Quiz.count()
  .then(function (numQuizes) { // número de preguntas
    statistics.quizes = numQuizes;
    return models.Comment.count();
  })
  .then(function (numComments) { // número de comentarios
    statistics.comments = numComments;
    return models.Comment.countUnpublished();
  })
  .then(function (numUnpublished) { // número de comentarios sin publicar
    statistics.commentsUnpublished = numUnpublished;
    return models.Comment.countCommentedQuizes();
  })
  .then(function (numCommented) { // número de preguntas con comentario
>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
    statistics.commentedQuizes = numCommented;
  })
  .catch(function (err) { errors.push(err); })
  .finally(function () {
    console.log("");
<<<<<<< HEAD
    console.log("---- Fin estadísticas ----");
=======
    console.log("---- Finalizan las estadísticas ----");
>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
    console.log("");
    console.log(statistics);
    next();
  });

};
<<<<<<< HEAD
=======

>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
// GET /quizes/statistics
exports.show = function (req, res) {
  res.render('statistics/show', { statistics: statistics, errors: errors });
};
