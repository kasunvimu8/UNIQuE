var express = require('express');
var router = express.Router();
var tapApi = require("tap-telco-api");

router.get('/',function (req,res) {
    res.render('index')
})

router.get('/dashboard',function (req,res) {
    res.render('index')
})

router.get('/community',function (req,res) {
    res.render('index')
})

router.get('/identify',function (req,res) {
    res.render('index')
})


module.exports = router;