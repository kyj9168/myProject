const approot = require('app-root-path');
const express = require('express');
const path = require('path');
const moment = require('moment');
const router = express.Router();
const MobileDetect = require('mobile-detect');
const apiController = require(approot + '/server/routes/controller/api.controller');

const getIp = (req) => {
    return req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress;
};
// router.post('/dialogue', apiController.dialogue);
router.get('/AutoCom', apiController.AutoCom);

router.get('/', (req, res, next) => {
    let md = new MobileDetect(req.headers['user-agent']);
    console.log(
        `TIME:[${moment().format('yyyy-HH-mm hh:mm:ss')} ] IP:[${getIp(
            req
        )}] BROWSER:[${md.userAgent()}] OS:[${md.os()}] PHONE:[${md.mobile()}]`
    );

    res.sendFile(approot + '/build/index.html');
});

router.get('/chat', (req, res, next) => {
    let md = new MobileDetect(req.headers['user-agent']);
    console.log(
        `TIME:[${moment().format('yyyy-HH-mm hh:mm:ss')} ] IP:[${getIp(
            req
        )}] BROWSER:[${md.userAgent()}] OS:[${md.os()}] PHONE:[${md.mobile()}]`
    );

    res.sendFile(approot + '/build/index.html');
});

router.get('/diary', (req, res, next) => {
    let md = new MobileDetect(req.headers['user-agent']);
    console.log(
        `TIME:[${moment().format('yyyy-HH-mm hh:mm:ss')} ] IP:[${getIp(
            req
        )}] BROWSER:[${md.userAgent()}] OS:[${md.os()}] PHONE:[${md.mobile()}]`
    );

    res.sendFile(approot + '/build/index.html');
});

router.get('/game', (req, res, next) => {
    let md = new MobileDetect(req.headers['user-agent']);
    console.log(
        `TIME:[${moment().format('yyyy-HH-mm hh:mm:ss')} ] IP:[${getIp(
            req
        )}] BROWSER:[${md.userAgent()}] OS:[${md.os()}] PHONE:[${md.mobile()}]`
    );

    res.sendFile(approot + '/build/index.html');
});
module.exports = router;
