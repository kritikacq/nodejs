const fs = require("fs");
function logReqRes(filename) {
    return (req, res, next) => {
        fs.appendFile(filename, `Request Type: ${req.method}\n ${Date.now()}:${req.ip}:${req.path}`, (err, data) => {
            next();
        }
            );
    }
}

module.exports = {
    logReqRes,
};