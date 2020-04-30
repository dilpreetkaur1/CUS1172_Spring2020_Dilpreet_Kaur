// import express from 'express';
// Set up the express app
const quiz1= require("./quiz1.json")
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    
   res.send('GET route on things.');
});

// route to ge quizzes list
router.get('/api/quiz/list', function(req, res){
    //  quiz_list= [{"quiz1":quiz1.quiz1_id,"quiz2": quiz1.quiz2_id}];
     res.json({"message":[{"quiz1":quiz1.quiz1_id,"quiz2": quiz1.quiz2_id}]})
});
// route to get quiz agains quiz id
router.get('/api/quiz/:id', function(req, res){
    // res.send('quizes.');

    const id=req.params.id
    var data;
    console.log("id is here ", id)
    if(id === "quiz1"){
         data=quiz1.quiz1
    }else{
        data=quiz1.quiz2

    }
res.json({"message": data })
});
