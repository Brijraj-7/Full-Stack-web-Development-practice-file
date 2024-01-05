const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const prot = 8080;
const mathodOverride = require("method-override");

app.use(mathodOverride("_method"));
app.set(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "demo_app",
  password: "Brij@2510",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//home route
app.get("/", (req, res) => {
  let q = `select count(*)from user;`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];

      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in db");
  }
});
// show route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("showuser.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in db");
  }
});

// Edit route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT *FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in db");
  }
});

// UPDATE Route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT *FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("WRONG password!");
      } else {
        let q2 = `UPDATE user SET username='${newUsername}'WHERE id='${id}' `;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
      res.send(user);
      // res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in db");
  }
});
app.listen("8080", () => {
  console.log("server is listening to port 8080");
});
