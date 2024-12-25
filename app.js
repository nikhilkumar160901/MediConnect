const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const AppointmentBooking = require("./models/appointmentBooking");
const User = require("./models/user");
mongoose.connect("mongodb://localhost:27017/portal");

var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
  console.log("connection succeeded");
});


app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



// Login check

app.post("/login", async (req, res) => {
  try {
    const user = req.body.user;
    const email = req.body.email;
    const password = req.body.password;

    const useremail = await db.collection("details").findOne({ email: email });

    if (user === "Doctor" && email === "dr@gmail.com" && password === "dr123!@") {
      res.status(201).redirect("/doctor-dashboard");
    } else if (user === "Patient" && useremail.password === password && email !== "dr@gmail.com") {
      res.status(201).redirect("/patient-dashboard");
    } else {
      res.send("Ivalid Email and Password");
    }

  } catch (error) {
    res.status(400).send("invalid Email");
  }
});






app.get("/", function (req, res) {
  res.render("index");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/signup", function (req, res) {
  res.render("signup");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.get("/patient-dashboard", function (req, res) {
  res.render("patient-dashboard");
});

app.get("/doctor-dashboard", function (req, res) {
  res.render("doctor-dashboard");
});

app.get("/student", function (req, res) {
  res.render("student");
});

app.get("/show", function (req, res) {
  res.render("show", { defaultStudent: defaultStudent });
});

app.get("/update", function (req, res) {
  res.render("update");
});

app.post("/contact", function (req, res) {
  var contactData = {
    contact: req.body.contactForm
  }
  res.redirect("contact");
});


// Sign-Up Page

app.post("/signup", async (req, res) => {
  var name = req.body.fullName;
  var mobile = req.body.mobile;
  var email = req.body.email;
  var pass = req.body.password;
  var role = req.body.role;

  console.log(name, mobile, email, pass, "ddd");
  let result = await User.exists({ mobile: mobile })
  console.log(result, "result")
  if ((await User.exists({ mobile: mobile }))) {
    return res.json({
      status: false,
      message: "User exists with contact number",
      data: null,
    });
  } else if ((await User.exists({ email: email }))) {
    return res.json({
      status: false,
      message: "User exists with this email",
      data: null,
    });
  } else {
    var user = User({
      name: name,
      phone: mobile,
      email: email,
      password: pass,
      role: role
    })

    const data = await user.save();
    console.log(data, "data");
    return res.redirect("/login");
  }


});

app.post("/doctor-dashboard", function (req, res) {
  var data = {
    date: req.body.suggestDate,
    image: req.body.filename
  }
  res.redirect("/doctor-dashboard");
});



// Appointment Booking


app.post("/patient-dashboard", async (req, res) => {
  var name = req.body.fullName;
  var date = req.body.date;
  var email = req.body.email;
  var age = req.body.age;
  var time = req.body.time;
  var gender = req.body.gender;
  var symptom = req.body.symptom;

  let appointmentBooked = AppointmentBooking({
    name: name,
    date: date,
    email: email,
    age: age,
    time: time,
    gender: gender,
    symptom: symptom,
  })

  console.log(appointmentBooked, "appointmentBooked");

  const data = await appointmentBooked.save();

  return res.redirect("/login");
})


app.listen(3000, function () {
  console.log("Server is Running");
});
