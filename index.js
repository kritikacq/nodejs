//day 4
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    return res.send('Hello From Express\n');
});
app.get('/about', (req, res) => {
    return res.send( 'hey' + req.query.username);
});
const myServer = http.createServer(app);
server.listen(8000, () => {
//     console.log(`Server running at http://8000/`);
// });

app.listen(80000,()=> console.log("server started"));