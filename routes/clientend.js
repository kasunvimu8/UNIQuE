var express = require('express');
var router = express.Router();
var tapApi = require("tap-telco-api");

//var tadhack = require('./routes/ids/tadhack');

var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGODB_URI || "mongodb://localhost:27017/";

/* GET users listing. */
router.get('/', function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("heroku_whwz6n3v");
        var query = { user_type: "company" };
        dbo.collection("users_table").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
            res.render('clientend', { title: 'client subscribe', "messages" : result, record_no : 1});
        });
    });
    //res.render('clientend', { title: 'Client'});
})

router.get('/tadhack', function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("heroku_whwz6n3v");
        var query = {msg_from: "tadhack" , msg_to: "gihan" };
        dbo.collection("msg_table").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
            //res.render('clientend', { title: 'client subscribe', "messages" : result, record_no : 1});
            res.render('ids/tadhack', { title: 'tadhack', "messages" : result});
        });
    });

})

module.exports = router;