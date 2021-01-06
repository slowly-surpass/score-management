/*
 * function:路由配置
 */
"use strict"

const express = require("express");

const router = express.Router();

//路由列表
router.use("/login", require("./login.js"));
router.use("/loginout", require("./loginout.js"));
module.exports = router;