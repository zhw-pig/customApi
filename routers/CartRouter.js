/**
 * @description 轮播图接口
 * @author lym
 */
const express = require("express");
const router = express.Router();
const ServiceFactory = require("../services/ServiceFactory");
const PageJson = require("../model/PageJson");

// 获取购物车所有数据
router.get('/getAllList',async(req,resp)=>{
    try {
        let result = await ServiceFactory.createCartService().getAllList();
        let arr = result.map(item=>{
            return {
               goods_id : item.lym_goods_id,
               goods_count : item.lym_buy_count,
               user_id : item.lym_user_id
            }
        });
        if (result.length > 0) {
            // new PageJson(true, "登陆成功", result)
            resp.json(new PageJson(true, "success", arr));
        } else {
            resp.json(new PageJson(false, "登陆失败"));
        }
    } catch (error) {
        console.error(error);
        resp.json(new PageJson(false, "服务器错误"));
    }
});
router.get("/addShopCar", async (req, resp) => {
    try {
        let result = await ServiceFactory.createCartService().addCart(req.query);
        if (result) {
            // 添加购物车成功
            resp.json(new PageJson(true, "success", result));
        } else {
            resp.json(new PageJson(false, "fail"));
        }
    } catch (error) {
        console.error(error);
        resp.json(new PageJson(false, "服务器错误"));
    }
});

router.get("/updateShopCar", async (req, resp) => {
    try {
        let result = await ServiceFactory.createCartService().updateCart(req.query);
        if (result) {
            // 添加购物车成功
            resp.json(new PageJson(true, "success", result));
        } else {
            resp.json(new PageJson(false, "fail"));
        }
    } catch (error) {
        console.error(error);
        resp.json(new PageJson(false, "服务器错误"));
    }
});


// 获取当前登陆用户的购物车数据
router.get("/currentUserCar",async(req,resp)=>{
    try {
        let result = await ServiceFactory.createCartService().getUserAllCarList(req.query);
        let arr = result.map(item=>{
            return {
               price : item.lym_goods_price,
               count : item.lym_buy_count
            }
        });
        
        let totalData = {
            totalCount : 0,
            totalPrice : 0
        }
        for(let i = 0; i < arr.length ; i++) {
            totalData.totalCount += arr[i].count ;
            totalData.totalPrice += (arr[i].price * arr[i].count);
        }
        if (result.length > 0) {
            // new PageJson(true, "登陆成功", result)
            resp.json(new PageJson(true, "success", totalData));
        } else {
            resp.json(new PageJson(false, "登陆失败"));
        }
    } catch (error) {
        console.error(error);
        resp.json(new PageJson(false, "服务器错误"));
    }
});


// 渲染购物车
router.get('/renderCart',async(req,resp)=>{
    try {
        let result = await ServiceFactory.createCartService().getUserAllCarList(req.query);
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

// 根据购物车id 移除购物车
router.get('/removeCar',async(req,resp)=>{
    try {
        let result = await ServiceFactory.createCartService().removeCarById(req.query);
        if (result) {
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
module.exports = router;