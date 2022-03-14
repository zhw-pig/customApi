/**
 * @description 收藏接口
 * @author lym
 */
const express = require("express");
const router = express.Router();
const ServiceFactory = require("../services/ServiceFactory");
const PageJson = require("../model/PageJson");


// 获取当前用户所有收藏
router.get('/getAllList',async(req,resp)=>{
    try {
        let result = await ServiceFactory.createLikeService().getAllListByUser(req.query);
        let arr = result.map(item=>{
            return {
               goods_id : item.lym_goods_id,
               like_id : item.lym_like_id
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
// 添加收藏
router.get("/addLikeGood", async (req, resp) => {
    try {
        let result = await ServiceFactory.createLikeService().addLikeById(req.query);
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
// 取消收藏
router.get('/removeLikeGood',async(req,resp)=>{
    try {
        let result = await ServiceFactory.createLikeService().removieLike(req.query);
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
// 重新添加到收藏
router.get('/reAddLikeGood',async(req,resp)=>{
    try {
        let result = await ServiceFactory.createLikeService().reAddLike(req.query);
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


router.get('/renderLikePage',async(req,resp)=>{
    try {
        let result = await ServiceFactory.createLikeService().getAllListGoodById(req.query);
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
module.exports = router;