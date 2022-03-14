/**
 * Service的工厂类
 */

class ServiceFactory{
    constructor(){
        throw new Error("当前对象不允许使用new来创建");
    }
    // 创建轮播图服务层
    static createBannerService(){
        let BannerService = require("./BannerService");
        return new BannerService();
    }
    // 创建商品服务层
    static createGoodService(){
        let GoodService = require("./GoodService");
        return new GoodService();
    }
    // 创建分类页面服务层
    static createSortService(){
        let SortService = require("./SortService");
        return new SortService();
    }
    // 创建用户service层
    static createUserService(){
        let UserService = require("./UserService");
        return new UserService();
    }

    // 创建购物车服务层
    static createCartService(){
        let CartService = require("./CartService");
        return new CartService();
    }
    // 创建收藏层
    static createLikeService(){
        let LikeService = require("./LikeService");
        return new LikeService();
    }
    // 创建收货地址服务层
    static createAddrService(){
        let AddrService = require("./AddrService");
        return new AddrService();
    }
}


module.exports = ServiceFactory;