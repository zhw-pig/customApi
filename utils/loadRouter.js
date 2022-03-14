/**
 * @description 加载app.js里面的路由(全局加载)
 * @author lym
 */
const fs = require("fs");
const path = require("path");

const loadRouter = app => {
    //首先确定路由的目录
    let routersPath = path.join(__dirname, "../routers");
    fs.readdirSync(routersPath).forEach(item => {
        app.use(`/${item.replace("Router.js","")}`, require(path.join(routersPath, item)));
    });
};

module.exports = loadRouter;