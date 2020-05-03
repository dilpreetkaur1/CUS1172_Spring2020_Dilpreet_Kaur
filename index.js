// Set up the express app
const express= require("express")
const app= express()
var quiz1 = require('./quiz1');
var cors = require('cors')
app.use(cors()) 
app.use('/quiz1', quiz1);
const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});
const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
