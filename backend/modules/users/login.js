const connection = require('../../connection');
const express = require('express');
const jwt = require("jsonwebtoken");
const Auth = require('../../middleware/Auth');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Auth);
const login = (req, res) => {
  // Create a new user in the database
  const { email, password } = req.body;
  const sql = 'SELECT COUNT(*) as cnt FROM users WHERE email = ? AND password = ?';
  connection.query(sql, [email, password], (error, results) => {
    if (error) {
      console.log(error);
      res.status(404).json({ message: 'Invalid email or password' });
    } else {
      let count = JSON.parse(JSON.stringify(results))[0].cnt;
      if (count == 1) {
        const token = jwt.sign({ email: email }, "secret-key", { expiresIn: "1h" });
        res.json({ token });
      }
      else {
        return res.status(403).json({ message: "Unauthorised!!!" });
      }
    }
  });
}

module.exports = login;
