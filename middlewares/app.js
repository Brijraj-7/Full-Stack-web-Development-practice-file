const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// app.use((req, res, next) => {
//   //   let { query } = req.query;
//   //   console.log(query);
//   console.log("Hi, i am 1st middleware");
//   //   res.send("this ia a middleware page");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Hi, i am  2nd middleware");
// });

//logger
// app.use((req, res, next) => {
//   req.time = Date(Date.now()).toString();
//   console.log(req.method, req.hostname, req.pathname, req.time);
//   next();
// });

app.use("/random", (req, res, next) => {
  console.log("I am only for random");
  next();
});

app.use("/api", (req, res, next) => {
  let { token } = req.query;
  if (token === "hello") {
    next();
  }
  throw new ExpressError(401, "ACCESS DENIED!");
});
app.get((req, res) => {
  res.send("DATA");
});
app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/random", (req, res) => {
  res.send("this is a rendom page");
});

app.get("/err", (req, res) => {
  abd = vabd;
});
app.use("/admin", (req, res) => {
  throw new ExpressError(403, "Access to admin is Forbidden");
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Some ERROR ON SEVRVER" } = err;
  console.log("-------- ERROR --------");
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("Server listening to port 8080");
});
