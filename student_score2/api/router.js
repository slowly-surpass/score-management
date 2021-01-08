/*
 * function:路由配置
 */
"use strict"

const express = require("express");

const router = express.Router();

//路由列表
router.use("/login_stu", require("./login_stu.js"));
router.use("/login_tea", require("./login_tea.js"));
router.use("/login_admin", require("./login_admin.js"));
router.use("/loginout", require("./loginout.js"));
router.use("/get_userinfo", require("./get_userinfo.js"));
router.use("/change_pass",require("./change_pass.js"));
module.exports = router;