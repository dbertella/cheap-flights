'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/airports', function(req, res) {
  request('https://ryanair-test.herokuapp.com/api/airports', {json: true}, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      res.jsonp(body);
    }
    else {
      res.send(response.statusCode);
    }
  });
});

router.get('/routes', function(req, res) {
  request('https://ryanair-test.herokuapp.com/api/routes', {json: true}, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      res.jsonp(body);
    }
    else {
      res.send(response.statusCode);
    }
  });
});

router.get('/routes', function(req, res) {
  request('https://ryanair-test.herokuapp.com/api/countries', {json: true}, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      res.jsonp(body);
    }
    else {
      res.send(response.statusCode);
    }
  });
});
router.get('/cheap-flights/:origin/:destination/:start/:end/:budget', function(req, res) {
  request('https://ryanair-test.herokuapp.com/api/cheap-flights/' + req.params.origin +
    '/' + req.params.destination + '/' + req.params.start + '/' + req.params.end + '/' + req.params.budget,
    {json: true}, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      res.jsonp(body);
    }
    else {
      res.send(response.statusCode);
    }
  });
});

module.exports = router;
