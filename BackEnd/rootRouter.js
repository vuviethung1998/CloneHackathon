const express = require('express');
const path = require("path");
const SongRouter = require("./api/song/song");
const BackgroundRouter = require("./api/background/background");
const AdminRouter = require("./api/adminManager/adminRouter");
const LinkRouter = require("./api/userAdd/link");

const RootRouter = express.Router();

RootRouter.use('/song',SongRouter);
RootRouter.use('/background', BackgroundRouter);
RootRouter.use('/admin', AdminRouter);
RootRouter.use('/link',LinkRouter);

module.exports = RootRouter;