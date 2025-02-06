const fs = require("fs");
const os = require('os');
console.log(os.cpus().length);
// const filePath = "./contacts.txt";

//blocking-code
const result = fs.readFileSync("contacts.txt", "utf-8");
console.log(result);
console.log("2");
//non-blocking code
// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("Error", err)
//     } else {
//         console.log(result);
//     }
// });

fs.writeFile("./contacts.txt", 'Hello, world!', (err) => {
    //  if (err) {
    //     return consol-*e.error('Error writing to file:', err);
    // }
    // console.log('File written successfully.');

    // // Read from the file
    // fs.readFile("./contacts.txt", 'utf8', (err, data) => {
    //     if (err) {
    //         return console.error('Error reading from file:', err);
    //     }
    //     console.log('File content:', data);
    // });
});




fs.appendFileSync(".\contacts.txt", "Hey,There\n");
//  fs.appendFile(".\contacts.txt", "Javascript", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         // Get the file contents after the append operation 
//         console.log("\nFile Contents of file after append:",
//             fs.readFileSync(".\contacts.txt", "utf8"));
//     }
//  }); 

 
 
