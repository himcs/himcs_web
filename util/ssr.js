var process = require('child_process');

let getSSR = (callback) => {
    //去除ANSI颜色
    process.exec(`v2ray ssinfo | grep "ss://" | sed s/"SS 链接 = "/""/ | sed \'s/\x1b\\[[0-9;]*m//g\'`, function (error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        callback(stdout);
    });
}

module.exports = getSSR;
