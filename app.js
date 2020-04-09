const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();
const student = require('./routes/student');

//set view file 
app.set("views", __dirname + "/views/");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/script-adminlte",
  express.static(path.join(__dirname, "/node_modules/admin-lte/"))
);
// app.use(function (req, res, next) {
//   res.locals.stuff = {
//     url: req.originalUrl
//   }
//   next();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.use("/", student);

//server running
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server starts http://localhost:${port}`));