var models = require('../models/models.js');
var helpers = require('./helpers.js');

// Autoload :commentId de comentarios
exports.load = function (req, res, next, commentId) {
<<<<<<< HEAD
  models.Comment.findById(Number(commentId))
=======
  models.Comment
  .findById(Number(commentId))
>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
  .then(function (comment) {
    if (comment) {
      req.comment = comment;
      next();
    } else {
      next(new Error('No existe commentId=' + commentId));
    }
  })
  .catch(function (error) { next(error); });
};

// GET /quizes/:quizId/comments/new
<<<<<<< HEAD
exports.new = function(req, res)
{
  res.render('comments/new.ejs', {
    quizid: req.params.quizId, errors: [] });
=======
exports.new = function(req, res) {
  res.render('comments/new.ejs', { quizid: req.params.quizId, errors: [] });
>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
};

// POST /quizes/:quizId/comments
exports.create = function(req, res) {
  var comment = models.Comment.build(
    {
      texto: req.body.comment.texto,
      QuizId: req.params.quizId
    }
  );

  comment
  .validate()
  .then(
    function(err){
      if (err) {
        res.render('comments/new.ejs', { quizid: req.params.quizId, comment: comment, errors: err.errors });
<<<<<<< HEAD
      } else
      {
=======
      } else {
>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
        comment // save: guarda en DB campo texto de comment
        .save()
        .then(function() { res.redirect('/quizes/'+req.params.quizId); });
      }      // res.redirect: Redirección HTTP a lista de preguntas
    }
  ).catch(function(error) { next(error); });

};

// GET /quizes/:quizId/comments/:commentId/publish
exports.publish = function (req, res) {
  req.comment.publicado = true;

  req.comment.save( { fields: ["publicado"] })
<<<<<<< HEAD
  .then( function ()
  {
=======
  .then( function () {
>>>>>>> 6f477f96e5b9396477f248ddb6a05c386fe8a624
    res.redirect('/quizes/' + req.params.quizId);
  })
  .catch(function (error) { next(error); });
};
