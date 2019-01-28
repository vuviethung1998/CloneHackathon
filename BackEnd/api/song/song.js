const express = require('express');
const songModel = require('./songModel');

const SongRouter = express.Router();

SongRouter.get("/get",(req,res) => {
    const SongData = req.body;
    songModel.find({}, (err, data) => {
        if(err) console.log("jafufhblbwbi")
        else console.log("success");
        res.send(data);
    });
});
module.exports = SongRouter;