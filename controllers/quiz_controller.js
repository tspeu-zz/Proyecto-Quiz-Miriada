var models = require('../models/models.js');

//AutoLoad factoriza el codigo si la ruta incluye quizId
exports.load = function(req,res,next, quizId){
  models.Quiz.findById(Number(quizId)).
  then(function(quiz){
        if (quiz){
          req.quiz = quiz;
          next();
        }
        else{
          next(new Error('no existe quizId='+quizId));
        }
    }
  ).catch(function(error){
    next(error);
  });
};


// GET / quizes / question
//las preguntas en la BD
//el modulo index
exports.index = function(req,res){
    models.Quiz.findAll().
    then(function(quizes){
        res.render('quizes/index.ejs',
        {  quizes : quizes, errors: [] });
    }).catch(function(error){
      next(error);
    });
};


exports.show = function(req,res){
    //models.Quiz.find(req.params.quizId).then(function(quiz){
    res.render('quizes/show',
    { quiz : req.quiz, errors: []});
//  });
};

//GET / quizes / answer
exports.answer = function(req,res){
    //models.Quiz.find(req.params.quizId).then(function(quiz){
      var resultado = 'La respuesta es Incorrecta';
      if (req.query.respuesta === req.quiz.respuesta)
      {
        //res.render('quizes/answer',
        //{ quiz : quiz,
          resultado = 'La respuesta es Correcta';
        //});
      }
      //else{
        res.render('quizes/answer',
        { quiz : req.quiz,
          respuesta : resultado
        });

    //}});
};
