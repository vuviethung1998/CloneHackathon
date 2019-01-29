const express = require('express');
const path = require('path');
const SongModel = require('../song/songModel')
const AdminRouter = express.Router();

const session = require("express-session");
const bcrypt = require('bcryptjs');

//middle ware
AdminRouter.use((req, res, next) => {
    console.log(req.sessionID);
    next();
});

const AdminModel = require("./adminModel");

AdminRouter.get("/loginsuccess", (req, res, next) => {
	res.send("Login success!");
});

AdminRouter.post("/login", (req,res) => {
    const { username, password } = req.body;
    if(username && password) {
        AdminModel.findOne({username : username}, function(err,userFound) {
            if (err) res.status(500).json({success:0, message: err})
            else if(!userFound || !userFound._id) res.status(404).json({ success: 0, message: "Not found!"})
            else {
                console.log(userFound)
                if(bcrypt.compareSync(password, userFound.password)){
                    const { username, password, role} = userFound;
                    req.session.userInfo = {username, password, role};
                    res.json({success: 1, message: "login accepted"});
                } else res.status(401).json({success:0, message:"Wrong password"});
            }
        })
    }
})

AdminRouter.delete("/logout",(req,res) => {
    req.session.destroy();
    res.json({success:1, message:"logout success!"});
})

AdminRouter.use((req, res, next) => {
	console.log('12345', req.session.userInfo);
	if(req.session.userInfo && req.session.userInfo.role == "admin") {
		next();
	} else res.status(401).json({ success: 0, message: "Unauthorized" });
});

AdminRouter.post("/create", (req, res) => {
    const newUser = req.body;
    const hashPassword = bcrypt.hashSync(newUser.password, 12);
    newUser.password=hashPassword;
    AdminModel.create(newUser, (err, data) => {
        if (err) {
            res.status(500).json({
                success: 0,
                message: err
            })
            console.log(err)
        }
        else res.status(201).json({
            success: 1,
            message: data
        })
    })
});

AdminRouter.get("/", (req,res) => {
    const allData = req.body;
    SongModel.find({}, (err, data) => {
        if (err) console.log(err)
        else console.log(data)
        res.send(data)
    });
});
AdminRouter.post("/song",(req,res) => {
    const newPost = req.body;
    SongModel.create(newPost, (err, postCreated) => {
        if (err) res.status(500).json({
            success: 0,
            message: err
        })
        else res.status(201).json({
            success: 1,
            message: postCreated
        });
    });
});

AdminRouter.delete("/:id",(req,res) => {
    const id = req.params.id;
    SongModel.findByIdAndDelete(id,(err,res) => {
        if(err) console.log(err)
        else res.send({message: "deleted"}); 
    });
});

module.exports = AdminRouter;
