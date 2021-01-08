/*
* function:封装了api返回给前端的对象接口
*/
"use strict"
exports.fail = function(error_code,error_des){
    return {
        'status':0,
        'error_code':error_code,
        'error_des':error_des
    }
}

exports.success = function(data){
    return {
        'status':1,
        'data':data
    };
}
