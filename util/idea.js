const http = require('http')
const {exec} = require('child_process');

let downloadTxtUrl = "http://idea.medeming.com/jets/images/jihuoma.txt"

let getCode =
    (callback) => {
        http.get(downloadTxtUrl, (res) => {
            // console.log(`状态码: ${res.statusCode}`);
            // console.log(`响应头: ${JSON.stringify(res.headers)}`);
            let rawdata = '';
            res.on('data', (chunk) => {
                rawdata += chunk;
            });
            res.on('end', () => {
                callback(rawdata)
            });
        })
    }

module.exports = getCode;
