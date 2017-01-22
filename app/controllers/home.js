var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Task = mongoose.model('Task');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
    res.render('index');
  });

router.get('/getTodos', function(req, res, next){
  Task.find({}, function(err, tasks){
    res.send(tasks);
  })
})

router.post('/addTodo', function(req, res, next){
  if(req.body.task){
    var task= new Task({
      text:req.body.task,
      done:false
    })
    task.save(function(err, task){
      res.send(task);
    })
  }else{
    res.header(500);
    res.end();
  }
})

router.put('/markDone/:id', function(req, res, next){
  var id=req.params.id;
  Task.update({_id:id},{done:true} ,function(err){
    if(err){
      res.header(500);
      res.end();
    }else{
      res.header(200);
      res.end();
    }
  })
})

router.put('/markUndone/:id', function(req, res, next){
  var id=req.params.id;
  Task.update({_id:id},{done:false} ,function(err){
    if(err){
      res.header(500);
      res.end();
    }else{
      res.header(200);
      res.end();
    }
  })
})

router.delete('/removeTodo/:id', function(req, res, next){
  var id=req.params.id;
  Task.findOne({_id:id}, function(err, result){
    if(!err){
      result.remove(function(){
        res.header(200);
        res.end();
      })
    }else{
      res.header(500);
      res.end();
    };
  })
})
