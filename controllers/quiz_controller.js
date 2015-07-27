var models = require('../models/models.js');

// GET / quizes / question
//las preguntas en la BD
exports.question = function(req,res){
    models.Quiz.findAll().success(function(quiz)
    {
    res.render('quizes/question',{pregunta : quiz[0].pregunta});
    });
};

//GET / quizes / answer
exports.answer = function(req,res){
    models.Quiz.findAll().success(function(quiz)
    {
      if (req.query.respuesta === quiz[0].respuesta)
      {
        res.render('quizes/answer', {respuesta : 'Respuesta Correcta'});
      } else
      {
        res.render('quizes/answer', {respuesta : 'Respuesta Incorrecta'});
      }
    });
};
