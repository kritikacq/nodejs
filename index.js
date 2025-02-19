const http = require('http');
const fs = require("fs");
// const hostname = 'localhost';
// const port = 8000;
// // const url = require("url");
// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//     return res.send('Hello From Express\n');
// });
// app.get('/about', (req, res) => {
//     return res.send( 'hey' + req.query.username);
// });
// // // function myHandler(req, res) {
// //     (req, res) => {
// //         if (req.url === '/favicon.ico') return res.end();
// //         const log = `${Date.now()}:${req.method}:New request from ${req.url}\n`;
// //         const myUrl = url.parse(req.url, true);
// //         console.log(myUrl);
// //         fs.appendFile("log.txt", log, (err, data) => {
// //             switch (myUrl.pathname) {
// //                 case '/':
// //                     //for handling methods
// //                     if (req.method === 'GET') {
// //                         res.end('Hello From Server\n');
// //                     } else if (req.method === 'POST') {
// //                         res.end('Data Posted\n');
// //                     } else {
// //                         res.end('Method Not Allowed\n');
// //                     }
// //                     //res.end('Hello From Server\n');
// //                     break;
// //                 case '/about':
                    
// //                     const username = myUrl.query.username;
// //                     res.end(`hi ${username}\n`);
// //                     //res.end('About Us\n');
// //                     break;
// //                 case '/search':
// //                     const search = myUrl.query.search_query;
// //                     res.end(`Search results for ${search}\n`);
// //                 case '/signup':
// //                     if (req.method === 'GET')
// //                         res.end('This is a Signup Form\n');
// //                     else if (req.method === 'POST') {
// //                         res.end('Data Posted\n');
// //                     }
                    
// //                 default:
// //                     res.end('404 Page Not Found\n');
// //             }
// //         });
// //         //console.log('Request received');
   
// //     }
// // }
// const server = http.createServer(app);

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express');
const users = require("./MOCK_DATA.json");
const app = express();
const port = 8000;
//middleware
app.use(express.urlencoded({ extended: true }));
app.get('/api/users', (req, res) => {
    return res.json(users);
});

app.get('/users', (req, res) => {
    const html = `
    <ul> 
    ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
    //console.log(`Server  is running at http://localhost:${port}/`);
});

app.route("/api/users/:id").get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})
    .patch((req, res) => {
        return res.json({ message: 'User Updated' });
    })
    .delete((req, res) => {
        return res.json({ message: 'User Deleted' });
    });
app.post('/api/users', (req, res) => {
    const body = req.body;
    body.id = users.length + 1;
    users.push(body);
    fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ message: 'User Created'});
    });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
});