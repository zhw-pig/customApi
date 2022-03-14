/**
 * @description 基础业务逻辑 底层服务层
 * @author lym
 */
const DBUtil = require("../utils/DBUtil.js");
const appConfig = require("../config/appConfig");
/**
 * @class BaseService
 */

class BaseService extends DBUtil {
    /**
     * @param {string} tableName 数据表的名称
     */
    constructor(tableName) {
        super();
        this.tableName = tableName;
    }


    getAllList() {
        let strSql = ` select * from ${this.tableName} where is_del=false `;
        return this.executeSql(strSql); //返回的是一个promise
    }

    /**
     * @name createCountSql 生成count的SQL语句
     * @param {string}} strWhere 查询条件 
     * @returns {string} countSql 生成好的SQL语句
     */
    createCountSql(strWhere){
        let countSql = ` select count(*) 'totalCount' from ${this.tableName} where is_del=false ${strWhere} `;
        return countSql;
    }
}


module.exports = BaseService;