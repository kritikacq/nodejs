const fs = require("fs");
const os = require('os');
console.log(os.cpus().length);
//write to a file
fs.writeFile("./contacts.txt", 'Hello, world!', (err) => {
     if (err) {
        return console.error('Error writing to file:', err);
    }
    console.log('File written successfully.');

    // Read from the file
    fs.readFile("./contacts.txt", 'utf8', (err, data) => {
        if (err) {
            return console.error('Error reading from file:', err);
        }
        console.log('File content:', data);
    });
});

//blocking-code
const result = fs.readFileSync("contacts.txt", "utf-8");
console.log(result);

//append to a file
//blocking-code
fs.appendFileSync(".\logs.txt", "Hey,There\n");

//non-blocking code
 fs.appendFile(".\logs.txt", "Javascript", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        // Get the file contents after the append operation
        console.log("\nFile Contents of file after append:",
            fs.readFileSync(".\logs.txt", "utf8"));
    }
 });


 
 
