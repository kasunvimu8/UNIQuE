var yeast = require('yeast');

var express = require('express');
var router = express.Router();
var tapApi = require("tap-telco-api");

router.get('/',function (req,res) {
    res.render('index')
})
module.exports = router;