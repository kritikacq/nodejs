
const mongoose = require('mongoose');
const { userSchema } = require("./models/user");
const express = require('express');
const {connectMongoDB } = require("./connection");
const { logReqRes } = require("./middleware/index");
const userRouter = require("./routes/user");

const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();
const mongodb = require('mongodb');

require('dotenv').config();
const mongoURI = process.env.MONGO_URI;
const { Schema, model } = mongoose;

//connection
connectMongoDB(mongoURI);
mongoose.connect(mongoURI, {
useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
  tlsAllowInvalidCertificates: true
})
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

 console.log(typeof process.env.MONGO_URI);

//schema

const User = mongoose.model('User', userSchema);


//middleware (day 6)
app.use(express.urlencoded({ extended: true }));
app.use(logReqRes("log.txt")); 
app.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`);
    
});
//routes
app.use("/api/users", userRouter);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
}
);