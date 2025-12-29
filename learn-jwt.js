const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser())

app.get("/", function (req, res) {
    let token = jwt.sign({email: "akhil@example.com"}, "secret")
    console.log('token', token)
    res.send("working")
    res.cookie("token",token);
})

app.get("/read", function (req,res) {
    console.log(req.cookies.token)
})

// app.get("/", function (req, res) {
//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash("password", salt, function (err, hash) {
//             console.log('hash', hash)
//         });
//     });
//     res.send("done")
// })

// app.get("/", function (req, res) {
//     bcrypt.compare("password", "$2b$10$n3bIRFj2zrv/ocmQTfpeQL.I61bg2cKWO3D3R2e49FjYSg.L5vq", function (err, result) {
//         // result == true
//         console.log(result)
//     });
// })

app.listen(3000)