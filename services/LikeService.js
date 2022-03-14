/**
 * @description 操作lym_like_info表
 * @author lym
 */
const BaseService = require("./BaseService.js");
class LikeService extends BaseService {
    constructor() {
        super("lym_like_info");
    }
    
    getAllListByUser({user_id}) {
        let strSql = ` select * from ${this.tableName} where is_del=0 and lym_user_id =  ${user_id} `;
        return this.executeSql(strSql,[user_id]); //返回的是一个promise
    }
    async addLikeById({user_id,goods_id}) {
        let strSql = ` INSERT INTO ${this.tableName}  (lym_user_id, lym_goods_id) VALUES (?,?) `;
        let results =  await this.executeSql(strSql,[user_id,goods_id]);
        return results.affectedRows > 0;
    }
    async removieLike({user_id,goods_id}) {
        let strSql = ` UPDATE ${this.tableName} SET is_del = 1 WHERE  lym_user_id = ? and lym_goods_id = ? `;
        let results =  await this.executeSql(strSql,[user_id,goods_id]);
        return results.affectedRows > 0;
    }
    async reAddLike({user_id,goods_id}) {
        let strSql = ` UPDATE ${this.tableName} SET is_del = 0 WHERE  lym_user_id = ? and lym_goods_id = ? `;
        let results =  await this.executeSql(strSql,[user_id,goods_id]);
        return results.affectedRows > 0;
    }
    getAllListGoodById({user_id}) {
        let strSql = ` SELECT b.*,a.lym_user_id from lym_like_info a
        INNER JOIN lym_goods_info b
        on a.lym_goods_id = b.lym_goods_id
        where a.is_del = false and b.is_del = false and a.lym_user_id = ${user_id} `;
        return this.executeSql(strSql,[user_id]);
    }
}


module.exports = LikeService;