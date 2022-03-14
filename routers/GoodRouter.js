/**
 * @description 商品接口
 * @author lym
 */
const express = require("express");
const router = express.Router();
const ServiceFactory = require("../services/ServiceFactory");
const PageJson = require("../model/PageJson");

// 获取商品列表
router.get("/list", async (req, resp) => {
    try {
        let result = await ServiceFactory.createGoodService().getAllList();
        if (result.length > 0) {
            // new PageJson(true, "登陆成功", result)
            resp.json(new PageJson(true, "success", result));
        } else {
            resp.json(new PageJson(false, "登陆失败"));
        }
    } catch (error) {
        console.error(error);
        resp.json(new PageJson(false, "服务器错误"));
    }
});
// 根据商品名称或者类型查询
router.get('/getGoodsByName',async(req,resp)=>{
    try {
        let result = await ServiceFactory.createGoodService().getGoodsBySearch(req.query);
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

// 根据商品id获取商品信息
router.get('/getGoodInfoById', async(req,resp)=>{
    try {
        let result = await ServiceFactory.createGoodService().getGoodInfoById(req.query);
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



module.exports = router;