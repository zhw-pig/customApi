/**
 * @description adminApi入口文件
 * @author 梁颖敏
 */
// 1、导入express框架
const express = require("express");
// 2、使用express框架创建app接口程序
const app = express();
// 3、因为express本身只有get请求方式，如果需要使用post请求需要导入body-parser
const bodyParser = require("body-parser"); //POST取值插件
// 4、导入路径组件
const path = require("path");
const fs = require('fs');
const http = require('http');
const httpServer = http.createServer(app);
// const PORT = 83;   // 端口号

// 5、导入全局配置文件
const appConfig = require("./config/appConfig");

// app.use('/imgUploads',express.static(path.join(__dirname,'/imgUploads')));

// Express里面加载插件（中间件）使用app.use()
// 配置post请求方式
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '20mb'
}));
app.use(bodyParser.json({
    limit: '20mb'
}));

// 处理跨域问题CORS
app.use((req, resp, next) => {
    resp.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
    resp.setHeader("Access-Control-Allow-Headers", "*,oauth");
     resp.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
});




//加载路由
require("./utils/loadRouter")(app);



httpServer.listen(83, () => {
    console.log('小程序接口====服务器启动成功');
});
