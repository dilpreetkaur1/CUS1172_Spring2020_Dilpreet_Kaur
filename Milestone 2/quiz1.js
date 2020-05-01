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
// route to get questions
router.get('/api/quiz/', function(req, res){
   console.log("questions")
    const id=req.query.id
    const q_id=req.query.questionid
    var data;
    if(id == "quiz1"){
         data=quiz1.quiz1
         for(var i=0; i < data.length; i++){
             if(data[i].id == q_id){
              return  res.json({"message": {"type":data[i].type,"question":data[i].question,"choices":data[i].choices,"meta": data[i].meta} })
             }
         }
         return   res.json({"message":"Not found"})
    }else{
   console.log("questions else")

        data=quiz1.quiz2
         for(var i=0; i < data.length; i++){
             if(data[i].id == q_id){
              return  res.json({"message": {"type":data[i].type,"question":data[i].question,"choices":data[i].choices,"meta": data[i].meta} })
             }
         }
         return   res.json({"message":"Not found"})  
    }
    
         
});
