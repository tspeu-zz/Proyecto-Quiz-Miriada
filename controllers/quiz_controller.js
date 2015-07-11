// GET / quizes / question
exports.question = function(req,res){
    res.render('quizes/question',{pregunta :'¿Cuál es la Capital de Italia?' });
};

//GET / quizes / answer
exports.answer = function(req,res){
    if (req.query.respuesta === 'Roma')
    {
      res.render('quizes/answer', {respuesta : 'Respuesta Correcta'});
    } else
    {
      res.render('quizes/answer', {respuesta : 'Respuesta Incorrecta'});
    }

};
