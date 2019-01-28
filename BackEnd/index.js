const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require("express-session");
const cors = require('cors');

const RootRouter = require("./rootRouter");

const app = express();
const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: true,
};
app.use(cors(corsOption));

app.use((req, res, next) => {
    res.setHeader("X-Frame-Options", "ALLOWALL");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, GET, PUT, DELETE, OPTIONS"
    );
  
    if (req.headers.origin) {
        res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
    }
    //res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Credentials", true);
  
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Authorization, Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(session({
    secret: "fuckyoubitch",
    resave: false,
    saveUninitialized: false,
    cookie:{
        secure: false,
        httpOnly: false,
        maxAge: 1000*60*60*24*7
    }
}))

mongoose.connect('mongodb://admin:admin123@ds163650.mlab.com:63650/listmusicbymood', 
    { useNewUrlParser: true },
    (err) => {
        if (err) console.log(err)
        else console.log("DB Connected");
    }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/", RootRouter);

const port = process.env.port || 5000;

app.listen(port, (err) => {
    if (err) console.log(err);
    else console.log("Server is started")
});