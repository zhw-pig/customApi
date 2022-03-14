/**
 * @description 用户接口
 * @author lym
 */
const express = require("express");
const router = express.Router();
const ServiceFactory = require("../services/ServiceFactory");
const PageJson = require("../model/PageJson");

// 获取商品类型
router.get('/login', async(req,resp)=>{
    let existUser = await ServiceFactory.createUserService().getAllList();
    let userArr = existUser.map(item=>{
        return item.lym_user_id
    });
    try {
        if(userArr.includes(req.query.tel)) {
            let result = await ServiceFactory.createUserService().loginByTel(req.query);
            if (result.length>0) {
                // new PageJson(true, "登陆成功", result)
                resp.json(new PageJson(true, "success", result));
            } else {
                resp.json(new PageJson(false, "fail"));
            }
        } else {
            resp.json(new PageJson(false, "fail", '当前账户未注册'));
        }
    } catch (error) {
        console.error(error);
        resp.json(new PageJson(false, "服务器错误")); 
    }
});

// 注册
router.post('/reg',async(req,resp)=>{
    let existUser = await ServiceFactory.createUserService().getAllList();
    let userArr = existUser.map(item=>{
        return item.lym_user_id
    });
    try {
        if(userArr.includes(req.body.user_id)) {
            resp.json(new PageJson(false, "fail", '当前账户已注册'));
        } else {
            let result = await ServiceFactory.createUserService().regByTel(req.body);
            if (result) {
                // new PageJson(true, "登陆成功", result)
                resp.json(new PageJson(true, "success", result));
            } else {
                resp.json(new PageJson(false, "fail"));
            }
        }
    } catch (error) {
        console.error(error);
        resp.json(new PageJson(false, "服务器错误")); 
    }
});

// 修改密码
router.get('/editPwd',async(req,resp)=>{
    try {
        let result = await ServiceFactory.createUserService().editPwdById(req.query);
        if (result) {
            // new PageJson(true, "登陆成功", result)
            resp.json(new PageJson(true, "success", result));
        } else {
            resp.json(new PageJson(false, "fail"));
        }
    } catch (error) {
        console.error(error);
        resp.json(new PageJson(false, "服务器错误")); 
    }
});
module.exports = router;