var yeast = require('yeast');

var express = require('express');
var router = express.Router();
var tapApi = require("tap-telco-api");

// router.get('/',function (req,res) {
//     res.render('index')
// })

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

router.post('/fileupload',function (req,res) {
    //if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.path;
        var newpath = 'public/images/ads/' + files.filetoupload.name;
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
        });
    });
    // } else {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    //     res.write('<input type="file" name="filetoupload"><br>');
    //     res.write('<input type="submit">');
    //     res.write('</form>');
    //     return res.end();
    // }
})

router.get('/',function (req,res) {
        // res.writeHead(200, {'Content-Type': 'text/html'});
        // res.write('<form action="identify/fileupload" method="post" enctype="multipart/form-data">');
        // res.write('<input type="file" name="filetoupload"><br>');
        // res.write('<input type="submit">');
        // res.write('</form>');
        // return res.end();
    res.render('identify');
})

module.exports = router;