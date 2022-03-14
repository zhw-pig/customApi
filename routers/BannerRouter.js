/**
 * @description 轮播图接口
 * @author lym
 */
const express = require("express");
const router = express.Router();
const ServiceFactory = require("../services/ServiceFactory");
const PageJson = require("../model/PageJson");


router.get("/list", async (req, resp) => {
    try {
        let result = await ServiceFactory.createBannerService().getAllList();
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