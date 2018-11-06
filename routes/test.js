var express = require('express');
var router = express.Router();
var tapApi = require("tap-telco-api");

var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGODB_URI || "mongodb://localhost:27017/";

var str = "tadHack@dialog.lk:123";

router.get('/', function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("heroku_whwz6n3v");
        var words = str.split(':');

        var query = {  $and:[
                {
                    "qr_date": {
                        $gte: new Date(new Date().getTime() - 1000 * 60 * 60)
                    }},
                {
                    "qr_date": {
                        $lte: new Date()
                    }},
                {
                    "user_email": words[0]
                },
                {
                    "tmp_value" : words[1]
                }
            ] };
        //var query = "";
        dbo.collection("qr_table").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });

    res.render('test', { title: 'Test code'});
})

module.exports = router;