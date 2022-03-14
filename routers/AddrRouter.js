/**
 * @description 收货地址接口接口
 * @author lym
 */
const express = require("express");
const router = express.Router();
const ServiceFactory = require("../services/ServiceFactory");
const PageJson = require("../model/PageJson");

// 根据登陆用户，获取收货地址
router.get('/list',async(req,resp)=>{
    try {
        let result = await ServiceFactory.createAddrService().getAddrListByUserId(req.query);
        if (result.length > 0) {
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

// 新增地址addAddr
router.get('/addAddr',async(req,resp)=>{
    try {
        let result = await ServiceFactory.createAddrService().addAddressByUser(req.query);
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

// 渲染编辑页面
router.get('/editPage',async(req,resp)=>{
    try {
        let result = await ServiceFactory.createAddrService().getAddrByAddrId(req.query);
        if (result.length > 0) {
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

// 根据地址id修改地址
router.get('/updateAddr',async(req,resp)=>{
    try {
        let result = await ServiceFactory.createAddrService().updateAddressById(req.query);
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

// 根据id删除地址
router.get('/delAddr',async(req,resp)=>{
    try {
        let result = await ServiceFactory.createAddrService().delAddressById(req.query);
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