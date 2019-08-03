var express = require('express');
var router = express.Router();

var async = require("async");
var request = require('request');
var mongoose = require('mongoose');
var database = require('../core/database.js');
var model = require('../core/Model/model.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/element/get', function (req, res) {
  var params = req.body;
  if (params.checkMe == 1){
      model.findById(params.foodname, function (response) {
          if (response.success){
              console.log(response.account)
              if (response.account == null){
                  model.create(params, function (response) {
                      if (response.success){
                          console.log(response)
                          res.send(response)
                      }
                      else{
                          console.log("failed to add")
                      }
                  })
              }else{
                  console.log("bu veri zaten var ki?")
                  res.send({success:false})
              }
          }
          else
              console.log("bu var mı bakamadık")
      })
  } else if (params.checkMe == 0){
      console.log("CheckMe Value : " + params.checkMe)
      model.deleteById(params.foodname, function (response) {
          res.send(response)
      })
  }
});
router.post('/list',function (req, res) {
  model.list(function (response) {
    res.send(response);
    console.log("HERE")
  })
});
router.get('/list',function (req, res) {
  model.list(function (response) {
    res.send(response);

  })
});

module.exports = router;
