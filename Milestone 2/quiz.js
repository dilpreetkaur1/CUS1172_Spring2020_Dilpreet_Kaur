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
