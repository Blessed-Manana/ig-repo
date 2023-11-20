const cors = require("cors");
const express = require("express");
const app = express();
const host = "localhost";
const port = 5001;
const User = require("./models/user");
const bcrypt = require("bcrypt");
const dbConnect = require('./db/dbConnect')


app.use(express.json());
app.use(cors());
dbConnect()

app.post("/signup", (req, res) => {
    bcrypt.hash(req.boby.password, 10)
    .then((hashedPassword)=>{
     
        const user = new User({
            emailNumber: req.body.emailNumber,
            password: hashedPassword,
        })
        user.save()
        .then((result) => {
            res.status(201).send({
                message: "User Created Successfully",
                result,
            })
        })
    })
    .catch((e) =>{
    res.status(500).send({
        message: "Password was not hashed successfully",
        e,
    })
    })
})

app.listen(port, host, () => {
    console.log(`server has started on http://${host}:${port}`)
})