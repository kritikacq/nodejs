const http = require('http');
const fs = require("fs");
const hostname = 'localhost';
const port = 8000;
const url = require("url");

const server = http.createServer((req, res) => {
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()}:${req.method}:New request from ${req.url}\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
        fs.appendFile("log.txt", log, (err, data) => {
            switch (myUrl.pathname) {
                case '/':
                    //for handling methods
                    if (req.method === 'GET') {
                        res.end('Hello From Server\n');
                    } else if (req.method === 'POST') {
                        res.end('Data Posted\n');
                    } else {
                        res.end('Method Not Allowed\n');
                    }
                    //res.end('Hello From Server\n');
                    break;
                case '/about':
                    
                    const username = myUrl.query.username;
                    res.end(`hi ${username}\n`);
                    //res.end('About Us\n');
                    break;
                case '/search':
                    const search = myUrl.query.search_query;
                    res.end(`Search results for ${search}\n`);
                case '/signup':
                    if (req.method === 'GET')
                        res.end('This is a Signup Form\n');
                    else if (req.method === 'POST') {
                        res.end('Data Posted\n');
                    }
                    
                default:
                    res.end('404 Page Not Found\n');
            }
        });
        //console.log('Request received');
   
    }
);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});