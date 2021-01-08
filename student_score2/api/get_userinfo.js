/*
* function:根据userid获取用户信息
*/
'use strict'
const express = require('express');
const return_obj = require('../tool/return_obj.js');
const verify_login = require('../middleware/verify_login.js')
const router = express.Router();
const DBHelp = require('../config/DBHelp.js');

//使用登录状态验证中间件
router.post("/", verify_login);

router.get("/",function(req,res,next) {
    console.log(req.session);
    if(req.session.iden=='stu'){
            res.send(return_obj.success({
                msg: "获取用户信息成功",
                user_info:[
                    {
                        userid: req.session.userid,
                        name: req.session.name,
                        sex: req.session.sex,
                        collage: req.session.collage,
                        class: req.session.class,
                        pro: req.session.pro,
                        tel: req.session.tel
                    }
                ]
            }))
    } else if(req.session.iden=='tea'){
        res.send(return_obj.success({
            msg: "获取用户信息成功",
            user_info:[
                {
                    userid: req.session.userid,
                    name: req.session.name,
                    tel: req.session.tel
                }
            ]
        }))
    } else if(req.session.iden=='admin'){
        res.send(return_obj.success({
            msg: "获取用户信息成功",
            user_info:[
                {
                    userid: req.session.userid,
                    name: req.session.name,
                    tel: req.session.tel,
                    email:req.session.email
                }
            ]
        }))
    } else {
        res.send(return_obj.fail("112", "用户身份有误"));
        return;
    }
})

module.exports = router;