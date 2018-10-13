var express = require('express');
var router = express.Router();
var tapApi = require("tap-telco-api");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('clientend', { title: 'Client'});
})

module.exports = router;