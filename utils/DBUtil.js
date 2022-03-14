/**
 * @description 数据库核心操作对象
 * @author lym
 */

const mysql = require("mysql");
const dbConfig = require("../config/dbConfig.js");

/**
 * @class DBUtil
 * @description 数据库操作对象
 */
class DBUtil {
    /**
     * @name getConn 获取数据库连接
     * @returns {Object} conn数据库连接对象
     */
     getConn() {
        let conn = mysql.createConnection(dbConfig);
        conn.connect();
        return conn;
    }

    /**
     * 
     * @param {string} strSql 要执行的SQL语句
     * @param {Array} params  执行SQL语句的参数
     * @returns {Promise} 返回异步的promise
     */
     executeSql(strSql,params=[]){
        let promise=new Promise((resolve,reject)=>{
            let conn=this.getConn();
            conn.query(strSql,params,(err,result)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(result);
                }
                conn.end();
            })
        });
        return promise;
    }

}


module.exports=DBUtil;