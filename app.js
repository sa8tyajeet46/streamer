const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routers/userRouter");
const bodyparser = require("body-parser");
const cookieParser = require("cookieparser");
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: "true" }));
app.use(cookieParser());
app.use("/api/v1/user", userRouter);
module.exports = app;
