const cors = require("cors");
const express = require("express");
const app = express();
const host = "localhost";
const port = 5001;
const User = require("./models/user");
const bcrypt = require("bcrypt");
const dbConnect = require("./db/dbConnect");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cors());
dbConnect();

// const jwtSecret = process.env.JWT_SECRET || "your_long_random_secret_here";

app.post("/signup", async (req, res) => {
  try {
    const { userName, fullName, emailNumber, password } = req.body;

    if (!userName || !fullName || !emailNumber || !password) {
      return res.status(400).send({
        message: "All fields are required for signup.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      userName,
      fullName,
      emailNumber,
      password: hashedPassword,
    });

    const result = await user.save();

    res.status(201).send({
      message: "User Created Successfully",
      result,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error creating user",
      error,
    });
  }
});

app.post('/login', (req, res) => {
  const { password } = req.body;

  if ((!req.body.userName && !req.body.emailNumber) || !password) {
    return res.status(400).send({
      message: "Either username/email or password is missing for login.",
    });
  }

  // Check either userName or emailNumber
  User.findOne({
    $or: [
      { userName: req.body.userName },
      { emailNumber: req.body.emailNumber },
    ],
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found",
        });
      }

      bcrypt.compare(password, user.password)
        .then((passwordCheck) => {
          if (!passwordCheck) {
            return res.status(400).send({
              message: "Password does not match",
            });
          }

          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.emailNumber,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          res.status(200).send({
            message: "Login Successful",
            identifier: req.body.userName || user.emailNumber,
            token,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Error comparing passwords",
            error,
          });
        });
    })
    .catch((e) => {
      res.status(404).send({
        message: "User not found",
        e,
      });
    });
});


app.listen(port, host, () => {
  console.log(`Server has started on http://${host}:${port}`);
});
