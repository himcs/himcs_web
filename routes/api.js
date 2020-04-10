var express = require('express');
var router = express.Router();
var getSSR = require('../util/ssr');
var getCode = require('../util/idea');

router.post('/ssr', function (req, res, next) {
    if (req.body.key != 'xia') {
        res.json({'code': '2', 'msg': 'error key'});
    } else {
        getSSR((data) => {
            res.json({'code': '0', 'data': data});
        })
    }
});

router.get('/ideacode', function (req, res, next) {
    getCode((data) => {
        res.end(data);
    })
});


module.exports = router;
