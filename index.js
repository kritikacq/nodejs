//day 5
const http = require('http');
const express = require('express');
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const port = 3000;
//middleware (day 6)
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(`Request received for ${req.url}`);
    next();
});
app.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`);
    fs.appendFile("log.txt", `Request Type: ${req.method}\n ${Date.now()}:${req.ip}:${req.path}`, (err, data) => {
    next();
}
    );
});
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
    
    if (!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const newUser = { ...body, id: users.length + 1 };
    users.push(newUser);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.status(201).json({ message: 'User Created', user: newUser });
    });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
});


//day 7
function dosomething() {
    throw new Error(
        'a error is thrown from dosomething');
}

function init() {
    try {
        dosomething();
    }
    catch (e) {
        console.log(e);
    }
    console.log(
        "After successful error handling");
}

init();



fs.readFile('code.txt', function (err, data) {
    if (err) {
        console.error(err);
    }
    else {
        console.log(data.toString());
    }
});

console.log("Program Ended");