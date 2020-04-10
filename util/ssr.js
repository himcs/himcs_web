var process = require('child_process');

let getSSR = (callback) => {
    process.exec('v2ray ssinfo | grep "ss://" | sed s/"SS 链接 = "/""/', function (error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        callback(stdout);
    });
}

module.exports = getSSR;
