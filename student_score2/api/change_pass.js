/*
* function:根据userid修改用户密码
*/
'use strict'
const express = require('express');
const return_obj = require('../tool/return_obj.js');
const verify_login = require('../middleware/verify_login.js')
const router = express.Router();
const DBHelp = require('../config/DBHelp.js');
const async = require('async');

//使用登录状态验证中间件
router.post("/", verify_login);

router.post("/",function(req,res,next){
    let userid=req.session.userid;
    async.waterfall([
        function(done){
            let no,table;
            if(req.session.iden=='stu'){
                no='sno';
                table='stu';
            } else if(req.session.iden=='tea'){
                no='tno';
                table='teacher';
            } else if(req.session.iden=='admin'){
                no='ano';
                table='admin';
            } else{
                res.send(return_obj.fail("112", "用户身份有误"));
                return;
            }
            done(null,[no,table]);
        },
        function([no,table],done){
            let sql=`
                select password
                from ?
                where ?=?
            `
            
            DBHelp(sql,[table,no,userid],(err,user_info,field)=>{
                if(err){
                    console.log(err);
                    res.send(return_obj.fail("200","调用数据库接口错误"))
                    return ;
                }
                if(user_info.length==0){
                    res.send(return_obj.fail("104","用户不存在"))
                    return ;
                }
                let useinfo = JSON.stringify(user_info);
                let User_info = JSON.parse(useinfo);
                if(User_info[0].passward==req.body.old_pass)
                done(null,[no,table]);
                else {
                    res.send(return_obj.fail("116","输入旧密码有误，请重新输入"))
                    return;
                }
            })
        },
        function([no,table],done){
            let sql=`
                update ?
                set password=?
                where ?=?
            `;
            DBHelp(sql,[table,req.body.new_pass,no,userid],(err,change_user,field)=>{
                if(err){
                    console.log(err);
                    res.send(return_obj.fail("200","调用数据库接口错误"))
                    return ;
                }
                if(change_user.length==0){
                    res.send(return_obj.fail("120","修改密码失败"))
                    return ;
                }
                done(null,change_user);
            })
        }
    ],function(err,result){
        if (err) {
            console.log(err);
            return ;
        }
        res.send(return_obj.success({
            msg: "修改密码成功"
        }));
    });
    
})
module.exports = router;