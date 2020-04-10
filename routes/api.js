var express = require('express');
var router = express.Router();
var getSSR = require('../util/ssr');
var getCode = require('../util/idea');

router.get('/ssr', function(req, res, next) {
     getSSR((data) => {
         res.end(data);
    })
});

router.get('/ideacode', function(req, res, next) {
    getCode((data) => {
        res.end(data);
    })
});


module.exports = router;
