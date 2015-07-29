var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz', errors: []});
});
//autoload
router.param('quizId', quizController.load);

router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

//hace el get de question
//router.get('/quizes/question', quizController.question);
//hace el get que answer
//router.get('/quizes/answer', quizController.answer);

/* GETp pagina creditos. */
router.get('/autor', function(req, res) {
  res.render('autor', { nombre : 'MIRIADA Módulo 6',
                        autor : 'Juan M Banchero'
                      });
});

module.exports = router;
